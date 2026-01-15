import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  const [typingText, setTypingText] = useState('');
  const fullText = 'Bienvenue sur mon portfolio';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypingText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf'; // Assure-toi que le fichier est dans le dossier public
    link.download = 'CV_Isidore_EKLOU.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const projects = [
    {
      id: 1,
      title: "Site E-commerce Artisanal",
      description: "Plateforme de vente en ligne pour artisans locaux avec système de paiement sécurisé.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Tableau de bord pour analyse de données avec visualisations interactives.",
      technologies: ["Vue.js", "Chart.js", "Express"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Application Mobile Fitness",
      description: "App de suivi d'entraînement avec plans personnalisés et suivi nutritionnel.",
      technologies: ["React Native", "Firebase", "Redux"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
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
                <span className="cursor">|</span>
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
                <h3 className="stat-number">20+</h3>
                <p className="stat-label">Projets réalisés</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="stat-content">
                <h3 className="stat-number">15+</h3>
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
      <section className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2>Mes Projets Récents</h2>
            <p>Découvrez quelques-unes de mes réalisations</p>
          </div>
          
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <button 
                      className="view-project-btn"
                      onClick={() => navigate('/projets')}
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
                <i className="fab fa-whatsapp"></i>
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