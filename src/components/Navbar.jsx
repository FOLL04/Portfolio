import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaBars, 
  FaTimes,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaPhone,
  FaDownload,
  FaEye
} from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Pages de navigation
  const pages = [
    { id: 'accueil', label: 'Accueil', path: '/', icon: <FaHome /> },
    { id: 'apropos', label: 'À Propos', path: '/apropos', icon: <FaUser /> },
    { id: 'projets', label: 'Projets', path: '/projets', icon: <FaProjectDiagram /> },
    { id: 'contact', label: 'Contact', path: '/contact', icon: <FaPhone /> }
  ];

  // Détection de la page active
  const getActivePage = () => {
    const currentPath = location.pathname;
    const page = pages.find(p => p.path === currentPath) || pages.find(p => p.path === '/');
    return page?.id || 'accueil';
  };

  const activePage = getActivePage();

  // Détection du scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation
  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    
    // Scroll vers le haut si on est déjà sur la page
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Toggle du menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fermer le menu en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Ne pas fermer si on clique sur le hamburger
      if (hamburgerRef.current && hamburgerRef.current.contains(event.target)) {
        return;
      }
      
      // Fermer si on clique en dehors du menu
      if (menuRef.current && !menuRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    // Gérer le scroll du body
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Télécharger le CV
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV_Isidore_EKLOU.pdf';
    link.download = 'CV_Isidore_EKLOU.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav 
        ref={menuRef}
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      >
        <div className="container">
          <div className="nav-container">
            {/* Logo */}
            <div 
              className="nav-brand" 
              onClick={() => handleNavigation('/')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleNavigation('/')}
              aria-label="Retour à l'accueil"
            >
              <div className="logo">
                <span className="logo-name">ISIDORE</span>
                <span className="logo-surname">EKLOU</span>
              </div>
              <div className="logo-subtitle">Référent Digital | Développeur Web</div>
            </div>

            {/* Navigation Desktop */}
            <div className="nav-links">
              {pages.map((page) => (
                <button
                  key={page.id}
                  className={`nav-link ${activePage === page.id ? 'active' : ''}`}
                  onClick={() => handleNavigation(page.path)}
                  aria-label={`Aller à ${page.label}`}
                  aria-current={activePage === page.id ? 'page' : undefined}
                >
                  {page.label}
                </button>
              ))}
            </div>

            {/* Actions Desktop */}
            <div className="nav-actions">
              <div className="social-icons">
                <a
                  href="https://github.com/FOLL04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Visiter mon GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/isidore-eklou-461992360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Visiter mon LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>

              <button 
                className="btn btn-primary"
                onClick={() => handleNavigation('/contact')}
                aria-label="Aller au formulaire de contact"
              >
                <FaEnvelope /> Contact
              </button>
            </div>

            {/* Menu Burger Mobile */}
            <button
              ref={hamburgerRef}
              className={`hamburger ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div 
          className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}
          id="mobile-menu"
          aria-hidden={!isMenuOpen}
        >
          <div className="mobile-header">
            <div 
              className="mobile-logo"
              onClick={() => handleNavigation('/')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleNavigation('/')}
              aria-label="Retour à l'accueil"
            >
              <span className="mobile-logo-text">ISIDORE EKLOU</span>
              <div className="mobile-subtitle">Référent Digital | Développeur Web</div>
            </div>
          </div>

          <div className="mobile-nav-links">
            {pages.map((page) => (
              <button
                key={page.id}
                className={`mobile-nav-link ${activePage === page.id ? 'active' : ''}`}
                onClick={() => handleNavigation(page.path)}
                aria-current={activePage === page.id ? 'page' : undefined}
              >
                <div className="mobile-link-content">
                  {page.icon}
                  <span>{page.label}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="mobile-actions">
            <div className="mobile-social-icons">
              <a
                href="https://github.com/FOLL04"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-icon github"
                aria-label="Visiter mon GitHub"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/isidore-eklou-461992360"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-icon linkedin"
                aria-label="Visiter mon LinkedIn"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </div>

            <button 
              className="btn btn-primary mobile-contact-btn"
              onClick={() => handleNavigation('/contact')}
              aria-label="Aller au formulaire de contact"
            >
              <FaEnvelope /> Me Contacter
            </button>

            <button 
              className="btn btn-outline"
              onClick={downloadCV}
              aria-label="Télécharger mon CV"
              style={{ marginTop: '16px', width: '100%' }}
            >
              <FaDownload /> Télécharger CV
            </button>
          </div>
        </div>

        {/* Overlay pour mobile */}
        <div 
          className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      </nav>
      
      {/* Espace pour la navbar fixe */}
      <div className="navbar-spacer"></div>
    </>
  );
}

export default Navbar;