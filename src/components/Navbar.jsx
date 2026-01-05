import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  // Détecter le scroll pour l'effet de transparence
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Détection de la section active
      const sections = ['accueil', 'apropos', 'services', 'projets', 'competences', 'galerie', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour le scroll smooth
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  // Liens de navigation
  const navItems = [
    { id: 'accueil', label: 'Accueil', icon: 'fas fa-home' },
    { id: 'apropos', label: 'Àpropos', icon: 'fas fa-user' },
    { id: 'services', label: 'Services', icon: 'fas fa-briefcase' },
    { id: 'projets', label: 'Projets', icon: 'fas fa-code' },
    { id: 'competences', label: 'Compétences', icon: 'fas fa-cogs' },
    { id: 'galerie', label: 'Galerie', icon: 'fas fa-images' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' }
  ];

  // Liens sociaux
  const socialLinks = [
    { href: 'https://github.com/FOLL04', icon: 'fab fa-github', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/isidore-eklou-461992360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: 'fab fa-linkedin', label: 'LinkedIn' },
    { href: 'https://x.com/Isidore_kl21?t=XnW_ayV9RZwUry15zTUtzQ&s=09', icon: 'fab fa-x-twitter', label: 'Twitter' },
   
  ];

  

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="nav-container">
          {/* Logo */}
          <div className="nav-brand" onClick={() => scrollToSection('accueil')}>
            <div className="logo">
              <span className="logo-text">ISIDORE</span>
              <span className="logo-highlight">EKLOU</span>
            </div>
            <div className="logo-subtitle">Référent Digital | Développeur web junior</div>
          </div>

          {/* Navigation Desktop */}
          <div className="nav-links-desktop">
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    <i className={item.icon}></i>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & CTA Desktop */}
          <div className="nav-actions">
            <div className="social-links-desktop">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
            <button 
              className="cta-button"
              onClick={() => scrollToSection('contact')}
            >
              <i className="fas fa-paper-plane"></i>
              <span>Me Contacter</span>
            </button>
          </div>

          {/* Menu Hamburger Mobile */}
          <button
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Menu Mobile */}
        <div className={`nav-menu-mobile ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-header">
            <div className="mobile-logo">
              <span>ISIDORE EKLOU</span>
              <div className="mobile-subtitle">
                Référent Digital | Développeur web junior
                
                </div>
            </div>
          </div>

          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  <div className="mobile-link-content">
                    <i className={item.icon}></i>
                    <span>{item.label}</span>
                  </div>
                  <i className="fas fa-chevron-right"></i>
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-social-cta">
            <div className="mobile-social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-social-link"
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
            <button 
              className="mobile-cta-button"
              onClick={() => scrollToSection('contact')}
            >
              <i className="fas fa-comment-dots"></i>
              Discuter d'un projet
            </button>
          </div>

          <div className="mobile-contact-info">
            <a href="tel:+22898265062" className="mobile-contact-link">
              <i className="fas fa-phone"></i>
              +228 98 26 50 62
            </a>
            <a href="mailto:follyrefdig@gmail.com" className="mobile-contact-link">
              <i className="fas fa-envelope"></i>
              follyrefdig@gmail.com
            </a>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div 
            className="menu-overlay"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </nav>
      
      {/* Espace réservé pour la hauteur fixe de la navbar */}
      <div className="navbar-spacer"></div>
    </>
  );
}

export default Navbar;