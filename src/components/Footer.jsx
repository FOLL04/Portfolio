import React from 'react';
import './Footer.css';

function Footer() {
  // Fonction pour le scroll smooth (identique à Navbar)
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <i className="fas fa-code"></i>
            <span>ISIDORE EKLOU</span>
          </div>
          <p>Développeur Full Stack & Designer UI/UX passionné par la création de solutions digitales innovantes.</p>
          <div className="footer-contact">
            <p><i className="fas fa-phone"></i> +228 98 26 50 62</p>
            <p><i className="fas fa-envelope"></i> follyrefdig@gmail.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Lomé, Togo</p>
          </div>
        </div>

        

        <div className="footer-section">
          <h3>Mes Services</h3>
          <ul className="footer-links">
            <li><i className="fas fa-palette"></i> UI/UX Design</li>
            <li><i className="fas fa-code"></i> Développement Web</li>
            <li><i className="fas fa-mobile-alt"></i> Applications Mobile</li>
            <li><i className="fas fa-chart-line"></i> Référencement SEO</li>
            <li><i className="fas fa-paint-brush"></i> Infographie</li>
            <li><i className="fas fa-users"></i> Community Management</li>
            <li><i className="fas fa-laptop-medical"></i> Assistance Informatique</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Réseaux sociaux</h3>
          <div className="social-icons-contact">
                 
                  <a href="https://www.facebook.com/isidore.eklou.92" className="social-icon-contact">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="https://www.threads.net/@isidorekl21" className="social-icon-contact">
                    <i className="fab fa-threads"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/isidore-eklou-461992360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-icon-contact">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/FOLL04" className="social-icon-contact">
                    <i className="fab fa-github"></i>
                  </a>
                  
          </div>
          
         

          <div className="footer-cta">
            <p>Prêt à démarrer votre projet ?</p>
            <button 
              className="btn-footer"
              onClick={() => scrollToSection('contact')}
            >
              <i className="fas fa-rocket"></i> Commencer maintenant
            </button>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2026 ISIDORE FOLLY EKLOU. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;