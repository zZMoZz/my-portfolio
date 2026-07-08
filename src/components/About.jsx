import { useEffect, useState } from 'react';
import { experience, skills, education, certifications } from '../data/portfolioData';
import { FaCertificate } from 'react-icons/fa';
import './About.css';

const TABS = ['Experience', 'Skills', 'Education', 'Certification'];

const STATS = [
  { label: 'Years Experience', value: '0' },
  { label: 'Projects Shipped', value: '30+' },
  { label: 'Companies', value: '0' },
];

function ExperienceTab() {
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
    <div className="skills-grid">
      {skills.map((skill) => {
        const Icon = skill.icon;
        return (
          <div className="skill-chip" key={skill.id}>
            <span className="skill-chip__icon" style={{ '--skill-color': skill.color }}>
              <Icon aria-hidden="true" />
            </span>
            <span className="skill-chip__name">{skill.name}</span>
          </div>
        );
      })}
    </div>
  );
}

function EducationTab() {
  return (
    <ul className="about__list">
      {education.map((item) => {
        const Icon = item.icon;
        return (
          <li className="experience-item" key={item.id}>
            <div className="experience-item__icon">
              <Icon aria-hidden="true" />
            </div>
            <div className="experience-item__body">
              <div className="experience-item__head">
                <h3>{item.school}</h3>
                <span className="experience-item__period">{item.period}</span>
              </div>
              <p className="experience-item__role">{item.degree}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function CertificationTab() {
  return (
    <ul className="about__list">
      {certifications.map((cert) => (
        <li className="experience-item" key={cert.id}>
          <div className="experience-item__icon">
            <FaCertificate aria-hidden="true" />
          </div>
          <div className="experience-item__body">
            <div className="experience-item__head">
              <h3>{cert.name}</h3>
              <span className="experience-item__period">{cert.year}</span>
            </div>
            <p className="experience-item__role">{cert.issuer}</p>
          </div>
        </li>
      ))}
    </ul>
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
          <div className="about__panel-glow" aria-hidden="true" />
          <div className="about__stats">
            {STATS.map((stat) => (
              <div className="about__stat" key={stat.label}>
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about__content">
          <span className="eyebrow">Get to know me</span>
          <h2 className="section-heading">About Me</h2>
          <p className="about__bio">
            I'm Mohamed Mohsen, a frontend developer who enjoys turning clean designs into fast, accessible interfaces.
            My focus is the React ecosystem, from component architecture to performance tuning. Outside of client
            work, I build and maintain a handful of small open source tools.
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
            {activeTab === 'Certification' && <CertificationTab />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
