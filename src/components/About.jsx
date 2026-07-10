import { useEffect, useState } from 'react';
import { profile, experience, skillGroups, education, certifications } from '../data/portfolioData';
import aboutMeImg from '../assets/about-me.jpg';
import './About.css';

const TABS = ['Experience', 'Skills', 'Education', 'Certifications'];

function ExperienceTab() {
  if (experience.length === 0) {
    return <p className="about__empty">No work experience yet — I'm a fresh graduate looking for my first role.</p>;
  }

  return (
    <ul className="about__list">
      {experience.map((item) => {
        const Icon = item.icon;
        return (
          <li className="experience-item" key={item.id}>
            <div className="experience-item__icon" style={{ '--icon-color': item.iconColor }}>
              <Icon aria-hidden="true" />
            </div>
            <div className="experience-item__body">
              <div className="experience-item__head">
                <h3>{item.company}</h3>
                <span className="experience-item__period">{item.period}</span>
              </div>
              <p className="experience-item__role">{item.role}</p>
              <p className="experience-item__summary">{item.summary}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function SkillsTab() {
  return (
    <div className="skills-groups">
      {skillGroups.map((group) => (
        <div className="skills-group" key={group.id}>
          <h3 className="skills-group__title">{group.category}</h3>
          <p className="skills-group__items">{group.items.join(' | ')}</p>
        </div>
      ))}
    </div>
  );
}

function EducationTab() {
  return (
    <div className="education-list">
      {education.map((item) => (
        <div className="education-item" key={item.id}>
          <div className="education-item__body">
            <div className="education-item__head">
              <a
                href={item.schoolUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="education-item__school"
              >
                {item.school}
              </a>
              <span className="education-item__period">{item.period}</span>
            </div>
            <p className="education-item__degree">{item.degree}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function CertificationTab() {
  return (
    <div className="education-list">
      {certifications.map((cert) => (
        <div className="education-item" key={cert.id}>
          <div className="education-item__body">
            <div className="education-item__head">
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="education-item__school"
              >
                {cert.name}
              </a>
            </div>
            <p className="education-item__degree">{cert.issuer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function About() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  useEffect(() => {
    const onSetTab = (event) => {
      if (TABS.includes(event.detail)) setActiveTab(event.detail);
    };
    window.addEventListener('about:set-tab', onSetTab);
    return () => window.removeEventListener('about:set-tab', onSetTab);
  }, []);

  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div className="about__panel">
          <img src={aboutMeImg} alt={profile.name} className="about__photo" />
        </div>

        <div className="about__content">
          <span className="eyebrow">Get to know me</span>
          <h2 className="section-heading">About Me</h2>
          <p className="about__bio">
            I'm a fresh graduate Software Engineer who loves exploring different areas of technology. I have
            hands-on experience in Machine Learning, AI Automation, Web Scraping, and Frontend Development, while
            my main specialization is Backend Development. I've built backend applications using both Spring and
            Node.js. I'm always eager to tackle new challenges, learn emerging technologies, and collaborate on
            building impactful solutions. Let's create something remarkable together!
          </p>

          <div className="about__tabs" role="tablist">
            {TABS.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                className={`about__tab ${activeTab === tab ? 'about__tab--active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="about__tab-content">
            {activeTab === 'Experience' && <ExperienceTab />}
            {activeTab === 'Skills' && <SkillsTab />}
            {activeTab === 'Education' && <EducationTab />}
            {activeTab === 'Certifications' && <CertificationTab />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
