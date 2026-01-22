// pages/Home.jsx
import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser'; // IMPORT EmailJS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
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
    link.href = '/images/CV.pdf';
    link.download = 'CV_Isidore.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // État pour les animations de la section À propos
  const aboutRef = useRef(null);
  const [animatedSkills, setAnimatedSkills] = useState(false);
  
  // Observer pour animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedSkills(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  // Initialisation EmailJS
  useEffect(() => {
    // Initialiser EmailJS avec votre clé publique
    emailjs.init("hFK4E4YCOs31XC-Ew"); // Remplacez par votre clé publique EmailJS
  }, []);

  const projects = [
    {
      id: 1,
      title: "Site E-commerce Germany Shop",
      description: "Plateforme de vente en ligne pour des produits allemands avec paiement sécurisé.",
      technologies: ["WordPress", "WooCommerce", "PHP", "CSS"],
      image: "/images/germany.png",
      demo: "#",
      github: null
    },
    {
      id: 2,
      title: "Logiciel de Gestion Scolaire GESCADMEC",
      description: "Application complète de gestion scolaire avec tableau de bord administratif.",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      image: "/images/gescadmec.jpg",
      demo: null,
      github: "https://github.com/FOLL04/Gescadmec"
    },
    {
      id: 3,
      title: "Site Couture AMETOKOSTYLE",
      description: "Site vitrine WordPress pour une couturière avec prise de rendez-vous en ligne.",
      technologies: ["WordPress", "PHP", "CSS", "Appointments"],
      image: "/images/Ametoko.png",
      demo: "https://ametokostyle.page.gd/?i=1",
      github: null
    },
    {
      id: 4,
      title: "Météo en Temps Réel",
      description: "Application web de météo avec localisation automatique et prévisions.",
      technologies: ["React", "API Météo", "JavaScript", "CSS"],
      image: "/images/wether.jpeg",
      demo: "https://foll04.github.io/weather/",
      github: "https://github.com/FOLL04/weather"
    }
  ];

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setError('');

    // Validation des champs
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setError('Veuillez remplir tous les champs obligatoires (*)');
      setIsSending(false);
      return;
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactForm.email)) {
      setError('Veuillez entrer une adresse email valide');
      setIsSending(false);
      return;
    }

    try {
      // Envoi avec EmailJS
      const response = await emailjs.send(
        'service_7zbp5ts', // Remplacez par votre Service ID
        'template_exra0wa', // Remplacez par votre Template ID
        {
          from_name: contactForm.name,
          from_email: contactForm.email,
          subject: contactForm.subject || 'Message depuis le portfolio',
          message: contactForm.message,
          to_name: 'Isidore',
          reply_to: contactForm.email,
          date: new Date().toLocaleDateString('fr-FR')
        },
        'hFK4E4YCOs31XC-Ew' // Remplacez par votre Public Key
      );

      if (response.status === 200) {
        setIsSent(true);
        setContactForm({ name: '', email: '', subject: '', message: '' });
        
        // Réinitialiser après 5 secondes
        setTimeout(() => {
          setIsSent(false);
        }, 5000);
      }
    } catch (err) {
      console.error('Erreur EmailJS:', err);
      setError('Une erreur est survenue lors de l\'envoi. Veuillez réessayer.');
    } finally {
      setIsSending(false);
    }
  };

  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
    // Effacer l'erreur quand l'utilisateur modifie un champ
    if (error) setError('');
  };

  // Méthodologies Agile
  const agileMethodologies = [
    {
      name: "SCRUM",
      description: "Cadre agile pour la gestion de projet avec sprints, rétrospectives et réunions quotidiennes",
      icon: "fas fa-tasks"
    },
    {
      name: "Kanban",
      description: "Visualisation du flux de travail avec colonnes To Do, In Progress, Done",
      icon: "fas fa-columns"
    },
    {
      name: "MVP",
      description: "Produit Minimum Viable pour validation rapide avec les utilisateurs",
      icon: "fas fa-rocket"
    },
    {
      name: "User Stories",
      description: "Définition des besoins utilisateurs sous forme de scénarios",
      icon: "fas fa-users"
    }
  ];

  // Étapes de gestion de projet
  const projectSteps = [
    "Analyse des besoins",
    "Conception technique",
    "Développement itératif",
    "Tests et validation",
    "Déploiement",
    "Maintenance"
  ];

  return (
    <div className="home-container">
      <Navbar />

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
                <span className="role">Référent Digital | Développeur Web</span>
              </h2>
              
              <p className="hero-description">
                Passionné par la création d'applications web modernes et performantes.
                Je transforme vos idées en solutions digitales concrètes.
              </p>
              
              <div className="hero-buttons">
                <button 
                  className="btn btn-primary" href="/CV.pdf" download
                  onClick={downloadCV}
                >
                  <i className="fas fa-download"></i>
                  Télécharger mon CV
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  <i className="fas fa-envelope"></i>
                  Me contacter
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
                <i className="fas fa-project-diagram"></i>
              </div>
              <div className="stat-content">
                <h3 className="stat-number">4</h3>
                <p className="stat-label">Projets Clés</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-code"></i>
              </div>
              <div className="stat-content">
                <h3 className="stat-number">12+</h3>
                <p className="stat-label">Compétences</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-award"></i>
              </div>
              <div className="stat-content">
                <h3 className="stat-number">2</h3>
                <p className="stat-label">Formations Certifiées</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* À propos Section */}
      <section className="about-section" id="apropos" ref={aboutRef}>
        <div className="container">
          <div className="section-header">
            <h2>À propos de moi</h2>
            <p>Développeur web passionné par l'innovation digitale</p>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <p>
                Je suis <strong>EKLOU Folly Isidore</strong>, Développeur Web & Référent Digital basé à Lomé, Togo.
                Passionné par les technologies web, je crée des solutions digitales modernes, performantes 
                et adaptées aux besoins spécifiques de chaque client.
              </p>
              
              {/* Compétences */}
              <div className="skills-container">
                <h3>Mes compétences techniques :</h3>
                <div className={`skills-grid ${animatedSkills ? 'animated' : ''}`}>
                  <div className="skill-category">
                    <h4><i className="fas fa-code"></i> Frontend</h4>
                    <div className="skills-list">
                      <span className="skill-tag">HTML5</span>
                      <span className="skill-tag">CSS3</span>
                      <span className="skill-tag">JavaScript</span>
                      <span className="skill-tag">React</span>
                      <span className="skill-tag">Bootstrap</span>
                      <span className="skill-tag">WordPress</span>
                    </div>
                  </div>
                  
                  <div className="skill-category">
                    <h4><i className="fas fa-server"></i> Backend</h4>
                    <div className="skills-list">
                      <span className="skill-tag">PHP</span>
                      <span className="skill-tag">Laravel</span>
                      <span className="skill-tag">MySQL</span>
                    </div>
                  </div>
                  
                  <div className="skill-category">
                    <h4><i className="fas fa-tools"></i> Outils & Méthodes</h4>
                    <div className="skills-list">
                      <span className="skill-tag">Git</span>
                      <span className="skill-tag">SEO</span>
                      <span className="skill-tag">UI/UX</span>
                      <span className="skill-tag">ODOO ERP</span>
                      <span className="skill-tag">Méthodes Agile</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Gestion de Projet & Méthodologie Agile */}
              <div className="agile-section">
                <h3><i className="fas fa-project-diagram"></i> Gestion de Projet & Méthodologie Agile</h3>
                
                <div className="agile-intro">
                  <p>
                    J'utilise les méthodologies Agile pour assurer une gestion de projet efficace, 
                    une communication transparente et des livraisons rapides de haute qualité.
                  </p>
                </div>
                
                <div className="agile-methodologies">
                  {agileMethodologies.map((method, index) => (
                    <div key={index} className="agile-card">
                      <div className="agile-icon">
                        <i className={method.icon}></i>
                      </div>
                      <h4>{method.name}</h4>
                      <p>{method.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="project-process">
                  <h4>Mon processus de développement :</h4>
                  <div className="process-steps">
                    {projectSteps.map((step, index) => (
                      <div key={index} className="process-step">
                        <div className="step-number">{index + 1}</div>
                        <div className="step-content">
                          <h5>{step}</h5>
                          <p>Approche structurée et méthodique</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Formations */}
              <div className="education-section">
                <h3><i className="fas fa-graduation-cap"></i> Mes formations :</h3>
                
                <div className="education-cards">
                  <div className="education-card">
                    <div className="education-header">
                      <h4>Référent Digital & Développement Web</h4>
                      <span className="education-year">2025</span>
                    </div>
                    <div className="education-institution">
                      <i className="fas fa-university"></i>
                      Académie Digital du Numérique (ADN Golfe)
                    </div>
                    <div className="education-skills">
                      <strong>Compétences acquises :</strong>
                      <div className="skills-mini">
                        <span>Développement Web Full Stack</span>
                        <span>Gestion de Projet Digital</span>
                        <span>SEO & Marketing Digital</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="education-card">
                    <div className="education-header">
                      <h4>Assistance Comptabilité et Gestion de Stock</h4>
                      <span className="education-period">Nov 2023 - Juin 2024</span>
                    </div>
                    <div className="education-institution">
                      <i className="fas fa-university"></i>
                      ROMARIC.com
                    </div>
                    <div className="education-skills">
                      <strong>Compétences acquises :</strong>
                      <div className="skills-mini">
                        <span>Gestion Comptable</span>
                        <span>Logistique & Stock</span>
                        <span>Saisie des pièces Comptable</span>
                        <span>Analyse Financière</span>
                      </div>
                    </div>
                    <button 
                      className="certificate-btn"
                      onClick={() => {
                        // Fonction pour télécharger le certificat
                        const link = document.createElement('a');
                        link.href = '/certificat_romaric.pdf';
                        link.download = 'Certificat_ROMARIC_EKLOU_Isidore.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      <i className="fas fa-download"></i>
                      Télécharger le certificat
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Projets Section */}
      <section className="projects-section" id="projets">
        <div className="container">
          <div className="section-header">
            <h2>Mes Projets</h2>
            <p>Découvrez mes principales réalisations</p>
          </div>
          
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <span className="tech-badge">{project.technologies[0]}</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-demo"
                      >
                        <i className="fas fa-external-link-alt"></i> Voir le site
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-github"
                      >
                        <i className="fab fa-github"></i> Code source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="section-header">
            <h2>Contact</h2>
            <p>Discutons de votre projet</p>
          </div>
          
          <div className="contact-content">
            <div className="contact-form-container">
              <div className="form-header">
                <h3><i className="fas fa-paper-plane"></i> Envoyez-moi un message</h3>
              </div>
              
              {/* Message de succès */}
              {isSent && (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                </div>
              )}
              
              {/* Message d'erreur */}
              {error && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {error}
                </div>
              )}
              
              <form onSubmit={handleContactSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nom complet *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Adresse email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="votre@email.com"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Objet de votre message"
                    value={contactForm.subject}
                    onChange={handleContactChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Décrivez votre projet ou votre demande..."
                    rows="6"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="btn-submit"
                  disabled={isSending}
                >
                  {isSending ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> Envoi en cours...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i> Envoyer le message
                    </>
                  )}
                </button>
              </form>
            </div>
            
            <div className="contact-info-container">
              <div className="contact-info-card">
                <h3><i className="fas fa-info-circle"></i> Mes informations</h3>
                
                <div className="contact-info-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:follyrefdig@gmail.com">follyrefdig@gmail.com</a>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <strong>Téléphone</strong>
                    <a href="tel:+22898265062">+228 98 26 50 62</a>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <strong>Localisation</strong>
                    <span>Lomé, Togo</span>
                  </div>
                </div>
              </div>
              
              <div className="social-card">
                <h3><i className="fas fa-share-alt"></i> Mes réseaux</h3>
                <div className="social-links">
                  <a 
                    href="https://github.com/FOLL04" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn github"
                  >
                    <i className="fab fa-github"></i>
                    <span>GitHub</span>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/isidore-folly-eklou-3791a921b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn linkedin"
                  >
                    <i className="fab fa-linkedin"></i>
                    <span>LinkedIn</span>
                  </a>
                  
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn facebook"
                  >
                    <i className="fab fa-facebook"></i>
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
              
              <div className="availability-card">
                <h3><i className="fas fa-clock"></i> Disponibilité</h3>
                <p><i className="fas fa-check-circle"></i> Réponse sous 24h maximum</p>
                <p><i className="fas fa-check-circle"></i> Disponible pour de nouveaux projets</p>
                <p><i className="fas fa-check-circle"></i> Devis gratuit sous 48h</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;