import { FaPhoneAlt, FaEnvelope, FaShareAlt } from 'react-icons/fa';
import { profile, socialLinks } from '../data/portfolioData';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <span className="contact__badge">
          <span className="contact__badge-dot" aria-hidden="true" />
          Open for opportunities
        </span>
        <h2 className="section-heading contact__title">Contact Me</h2>
        <p className="section-subheading contact__subtitle">Feel free to connect with me</p>

        <div className="contact__cards">
          <div className="contact-card">
            <span className="contact-card__label">Phone</span>
            <div className="contact-card__icon">
              <FaPhoneAlt aria-hidden="true" />
            </div>
            <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`} className="contact-card__value">
              {profile.phone}
            </a>
          </div>

          <div className="contact-card">
            <span className="contact-card__label">Email</span>
            <div className="contact-card__icon">
              <FaEnvelope aria-hidden="true" />
            </div>
            <a href={`mailto:${profile.email}`} className="contact-card__value">
              {profile.email}
            </a>
          </div>

          <div className="contact-card">
            <span className="contact-card__label">Social Media</span>
            <div className="contact-card__icon">
              <FaShareAlt aria-hidden="true" />
            </div>
            <div className="contact-card__socials">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="contact-card__social-link"
                    style={{ '--social-color': social.color }}
                  >
                    <Icon aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
