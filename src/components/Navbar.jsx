import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaPhone,
  FaDownload,
} from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const pages = [
    { id: "accueil", label: "Accueil", path: "/", icon: <FaHome /> },
    { id: "apropos", label: "À Propos", path: "/apropos", icon: <FaUser /> },
    { id: "projets", label: "Projets", path: "/projets", icon: <FaProjectDiagram /> },
    { id: "contact", label: "Contact", path: "/contact", icon: <FaPhone /> },
  ];

  const activePage = location.pathname;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "images/CV.pdf";
    link.download = "images/CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          {/* Logo */}
          <div
            className="nav-brand"
            onClick={() => handleNavigation("/")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleNavigation("/")}
          >
            <div className="logo">
              <span className="logo-name">ISIDORE</span>
              <span className="logo-surname">EKLOU</span>
            </div>
            <div className="logo-subtitle">Référent Digital | Développeur Web</div>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {pages.map((page) => (
              <button
                key={page.id}
                className={`nav-link ${activePage === page.path ? "active" : ""}`}
                onClick={() => handleNavigation(page.path)}
              >
                {page.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="nav-actions">
            <div className="social-icons">
              <a href="https://github.com/FOLL04" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/isidore-eklou-461992360" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
            <button className="btn btn-primary" onClick={() => handleNavigation("/contact")}>
              <FaEnvelope /> Contact
            </button>
          </div>

          {/* Burger Menu */}
          <button
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
          <div className="mobile-nav-links">
            {pages.map((page) => (
              <button
                key={page.id}
                className={`mobile-nav-link ${activePage === page.path ? "active" : ""}`}
                onClick={() => handleNavigation(page.path)}
              >
                {page.icon} <span>{page.label}</span>
              </button>
            ))}
          </div>

          <div className="mobile-actions">
            <a href="https://github.com/FOLL04" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/isidore-eklou-461992360" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <button className="btn btn-primary" onClick={() => handleNavigation("/contact")}>
              <FaEnvelope /> Me Contacter
            </button>
            <button className="btn btn-outline" onClick={downloadCV}>
              <FaDownload /> Télécharger CV
            </button>
          </div>
        </div>
      </nav>
      <div className="navbar-spacer"></div>
    </>
  );
}

export default Navbar;
