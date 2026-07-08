import { FaChevronUp } from 'react-icons/fa';
import { profile, socialLinks } from '../data/portfolioData';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  const firstName = profile.name.split(' ')[0];

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#hero" className="footer__top" aria-label="Back to top">
          <FaChevronUp aria-hidden="true" />
        </a>

        <div className="footer__socials">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                <Icon aria-hidden="true" />
              </a>
            );
          })}
        </div>

        <hr className="footer__divider" />

        <p className="footer__made">
          Made with <span className="footer__heart">&hearts;</span> by {profile.name}
        </p>
        <p className="footer__copyright">
          © {year} {firstName}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
