import React from 'react';


function Footer() {
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

          {/* Colonne 2: Réseaux sociaux */}
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