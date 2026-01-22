import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [typingText, setTypingText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Bienvenue sur mon portfolio';

  // Effet pour le texte qui s'écrit lettre par lettre
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypingText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        // Faire clignoter le curseur après la fin de l'écriture
        const cursorInterval = setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);
        
        return () => clearInterval(cursorInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf'; // Correction du chemin
    link.download = 'CV_Isidore_EKLOU.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const projects = [
    {
      id: 1,
      title: "Site E-commerce Germany Shop",
      description: "Plateforme de vente en ligne pour des produits allemands.",
      technologies: ["WordPress", "PHP", "CSS", "HTML"],
      image:  "images/germany.png" // Correction du chemin
    },
    {
      id: 2,
      title: "Température en temps réel",
      description: "Site web pour avoir la température en temps réel.",
      technologies: ["React", "API météo", "CSS", "HTML"],
      image: "images/wether.jpeg" // Correction du chemin
    },
    {
      id: 3,
      title: "Application web de saisie des mots",
      description: "Application web pour saisir des mots. Très performante pour les apprentis en Word.",
      technologies: ["HTML5", "CSS", "Javascript", "Bootstrap"],
      image: "images/me04.jpg" // Correction du chemin
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section" id="accueil">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="typing-title">
                {typingText}
                <span className={`cursor ${showCursor ? 'visible' : 'hidden'}`}>|</span>
              </h1>
              
              <h2 className="hero-subtitle">
                <span className="gradient-text">EKLOU Folly Isidore</span>
                <span className="role">Référent Digital | Développeur Web Junior</span>
              </h2>
              
              <p className="hero-description">
                Passionné par la création d'applications web modernes et la digitalisation 
                des entreprises. Je transforme vos idées en solutions digitales performantes.
              </p>
              
              <div className="hero-buttons">
                <button 
                  className="btn btn-primary"
                  onClick={downloadCV}
                >
                  <i className="fas fa-download"></i>
                  Télécharger mon CV
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => navigate('/projets')}
                >
                  <i className="fas fa-eye"></i>
                  Voir mes projets
                </button>
              </div>
            </div>
            
            <div className="hero-image">
              <div className="profile-illustration">
                <div className="code-icon">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <div className="floating-icons">
                  <i className="fab fa-react"></i>
                  <i className="fab fa-js"></i>
                  <i className="fab fa-html5"></i>
                  <i className="fab fa-css3-alt"></i>
                  <i className="fab fa-wordpress"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="stat-content">
                <h3 className="stat-number">1+</h3>
                <p className="stat-label">Année d'expérience</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-project-diagram"></i>
              </div>
              <div className="stat-content">
                <h3 className="stat-number">15+</h3>
                <p className="stat-label">Projets réalisés</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="stat-content">
                <h3 className="stat-number">10+</h3>
                <p className="stat-label">Clients satisfaits</p>
              </div>
            </div>
          </div>
          
          <div className="stats-actions">
            <button 
              className="btn btn-outline"
              onClick={() => navigate('/apropos')}
            >
              <i className="fas fa-user"></i>
              En savoir plus sur moi
            </button>
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/contact')}
            >
              <i className="fas fa-envelope"></i>
              Me contacter
            </button>
          </div>
        </div>
      </section>

      {/* Projets Section */}
      <section className="projects-section" id="projets">
        <div className="container">
          <div className="section-header">
            <h2>Mes Projets Récents</h2>
            <p>Découvrez quelques-unes de mes réalisations</p>
          </div>
          
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/placeholder.jpg";
                    }}
                  />
                  <div className="project-overlay">
                    <button 
                      className="view-project-btn"
                      onClick={() => navigate(`/projet/${project.id}`)}
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </button>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="section-cta">
            <button 
              className="btn btn-outline"
              onClick={() => navigate('/projets')}
            >
              <i className="fas fa-arrow-right"></i>
              Voir tous mes projets
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-cta-section">
        <div className="container">
          <div className="contact-cta-content">
            <h2>Prêt à concrétiser votre projet ?</h2>
            <p>
              Discutons de vos idées et voyons comment je peux vous aider à les réaliser.
              Je suis disponible pour des collaborations et des missions freelance.
            </p>
            
            <div className="contact-cta-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => navigate('/contact')}
              >
                <i className="fas fa-paper-plane"></i>
                Envoyer un message
              </button>
              <a 
                href="mailto:follyrefdig@gmail.com" 
                className="btn btn-secondary"
              >
                <i className="fas fa-envelope"></i>
                follyrefdig@gmail.com
              </a>
            </div>
            
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <a href="tel:+22898265062">+228 98 26 50 62</a>
              </div>
              <div className="contact-item">
                <i className="fab fa-whatsapp" href="c:\Users\ADN GOLFE1\AppData\Local\Packages\5319275A.WhatsAppDesktop_cv1g1gvanyjgm\LocalState\sessions\01BBF6B0BBF7455A2C6756488C779C6DFD05EDA9\transfers\2026-04\WhatsApp Image 2026-01-21 at 20.17.22.jpeg"></i>
                <span>Disponible sur WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;