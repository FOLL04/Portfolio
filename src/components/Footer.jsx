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
          <h3>Navigation</h3>
          <ul className="footer-links">
            <li>
              <a 
                href="#accueil" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('accueil');
                }}
              >
                <i className="fas fa-home"></i> Accueil
              </a>
            </li>
            <li>
              <a 
                href="#apropos" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('apropos');
                }}
              >
                <i className="fas fa-user"></i> À propos
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
              >
                <i className="fas fa-cogs"></i> Services
              </a>
            </li>
            <li>
              <a 
                href="#projets" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projets');
                }}
              >
                <i className="fas fa-briefcase"></i> Projets
              </a>
            </li>
            <li>
              <a 
                href="#competences" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('competences');
                }}
              >
                <i className="fas fa-code"></i> Compétences
              </a>
            </li>
            <li>
              <a 
                href="#galerie" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('galerie');
                }}
              >
                <i className="fas fa-images"></i> Galerie
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                <i className="fas fa-envelope"></i> Contact
              </a>
            </li>
          </ul>
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
                  <a href="https://www.tiktok.com/@isidoreeklou228?_r=1&_t=ZM-92et6Its9dY" className="social-icon-contact">
                    <i className="fab fa-tiktok"></i>
                  </a>
                  <a href="https://www.instagram.com/isidorekl21?igsh=ZXF3OGl2aWx3ZnBz" className="social-icon-contact">
                    <i className="fab fa-instagram"></i>
                  </a>
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
                  <a href="https://x.com/Isidore_kl21?t=XnW_ayV9RZwUry15zTUtzQ&s=09" className="social-icon-contact">
                    <i className="fab fa-twitter"></i>
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
          <p>&copy; 2024 ISIDORE FOLLY EKLOU. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;