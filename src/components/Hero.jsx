import { useEffect, useState } from 'react';
import { profile, heroBadges } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';
import './Hero.css';

const SCRAMBLE_CHARS = '!<>-_\\/[]{}—=+*^?#';

function Hero() {
  const [displayRole, setDisplayRole] = useState(profile.roles[0]);

  useEffect(() => {
    let roleIndex = 0;
    let stepTimeout;
    let holdTimeout;

    const scrambleTo = (target) => {
      let revealCount = 0;
      let tick = 0;

      const step = () => {
        tick += 1;
        if (tick % 2 === 0 && revealCount < target.length) {
          revealCount += 1;
        }

        setDisplayRole(
          target
            .split('')
            .map((char, i) =>
              i < revealCount || char === ' '
                ? char
                : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
            )
            .join('')
        );

        if (revealCount < target.length) {
          stepTimeout = setTimeout(step, 35);
        } else {
          holdTimeout = setTimeout(() => {
            roleIndex = (roleIndex + 1) % profile.roles.length;
            scrambleTo(profile.roles[roleIndex]);
          }, 2200);
        }
      };

      step();
    };

    holdTimeout = setTimeout(() => {
      roleIndex = 1 % profile.roles.length;
      scrambleTo(profile.roles[roleIndex]);
    }, 2200);

    return () => {
      clearTimeout(stepTimeout);
      clearTimeout(holdTimeout);
    };
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow hero__eyebrow">Hi there</span>
          <h1 className="hero__title">
            I'm <span className="hero__name">{profile.name}</span>
          </h1>
          <h2 className="hero__role">{displayRole}</h2>
          <p className="hero__tagline">{profile.tagline}</p>
          <div className="hero__actions">
            <a href={profile.resumeUrl} className="btn btn-primary">
              Get Resume
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero__portrait">
          <div className="hero__portrait-glow" aria-hidden="true" />
          <div className="hero__portrait-frame">
            <img src={profileImg} alt={profile.name} className="hero__portrait-img" />
          </div>
          {heroBadges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <div className={`hero__badge hero__badge--${i}`} key={badge.id} style={{ '--badge-color': badge.color }}>
                <Icon aria-hidden="true" />
                <span className="sr-only">{badge.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;
