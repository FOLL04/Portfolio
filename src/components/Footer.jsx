import React from 'react';

function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:follyrefdig@gmail.com?subject=Contact Portfolio';
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+22898265062';
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-grid">
          
          {/* Colonne 1: Logo et contact */}
          <div className="footer-column">
            <div className="footer-logo" onClick={() => scrollToSection('accueil')}>
              <span className="logo-first">ISIDORE</span>
              <span className="logo-last">EKLOU</span>
            </div>
            <p className="footer-tagline">
              Développeur passionné par la création de solutions digitales innovantes
            </p>
            <div className="footer-contact">
              <div className="contact-item" onClick={handleEmailClick}>
                <i className="fas fa-envelope"></i>
                <span>follyrefdig@gmail.com</span>
              </div>
              <div className="contact-item" onClick={handleCallClick}>
                <i className="fas fa-phone"></i>
                <span>+228 98 26 50 62</span>
              </div>
            </div>
          </div>

          {/* Colonne 2: Navigation */}
          <div className="footer-column">
            <h3 className="footer-title">Navigation</h3>
            <nav className="footer-nav">
              <button onClick={() => scrollToSection('accueil')} className="nav-link">
                Accueil
              </button>
              <button onClick={() => scrollToSection('projets')} className="nav-link">
                Projets
              </button>
              <button onClick={() => scrollToSection('competences')} className="nav-link">
                Compétences
              </button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">
                Contact
              </button>
            </nav>
          </div>

          {/* Colonne 3: Réseaux sociaux */}
          <div className="footer-column">
            <h3 className="footer-title">Réseaux</h3>
            <div className="social-grid">
              <a 
                href="https://github.com/FOLL04" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link github"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/isidore-eklou-461992360" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link linkedin"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
            </div>
            <button 
              className="contact-btn"
              onClick={() => scrollToSection('contact')}
            >
              <i className="fas fa-paper-plane"></i>
              Me Contacter
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Isidore Eklou - Tous droits réservés</p>
      </div>
    </footer>
  );
}

export default Footer;