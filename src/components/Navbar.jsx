import { useEffect, useState } from 'react';
import { profile } from '../data/portfolioData';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#about', tab: 'Skills' },
  { label: 'Certifications', href: '#about', tab: 'Certifications' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (tab) => {
    if (tab) {
      window.dispatchEvent(new CustomEvent('about:set-tab', { detail: tab }));
    }
    setMenuOpen(false);
  };

  const firstName = profile.name.split(' ')[0];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo" onClick={() => handleLinkClick()}>
          {'</'}
          <span>{firstName}</span>
          {'>'}
        </a>

        <div className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => handleLinkClick(link.tab)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="navbar__cta" onClick={() => handleLinkClick()}>
            Contact
          </a>
        </div>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
