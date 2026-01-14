import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';
import emailjs from '@emailjs/browser';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Helmet } from 'react-helmet';

function Home() {
  // État pour la modale galerie
  const [selectedImage, setSelectedImage] = useState(null);
  // État pour le formulaire de contact
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Données de tes projets - FILTRÉS et AMÉLIORÉS
  const projects = [
    {
      id: 1,
      title: "Plateforme TRAVEL AGENCY",
      description: "Site web complet pour une entreprise de gestion de voyages du Togo vers l'étranger avec réservation en ligne",
      image: "/images/travel.png",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/FOLL04/Travel-Agency",
      demo: null,
      completed: true,
      responsive: true,
      type: "website"
    },
    {
      id: 2,
      title: "Logiciel GESCADMEC",
      description: "Application web de gestion scolaire complète avec modules étudiants, enseignants et administration",
      image: "/images/gescadmec.jpg",
      technologies: ["Laravel", "MySQL", "Bootstrap"],
      github: "https://github.com/FOLL04/Gescadmec",
      demo: null,
      completed: true,
      responsive: true,
      type: "app"
    },
    {
      id: 3,
      title: "Site E-commerce GermanyShop",
      description: "Boutique en ligne pour vente d'articles importés d'Allemagne avec interface utilisateur moderne",
      image: "/images/germany.png",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/FOLL04/GermanyShop",
      demo: null,
      completed: true,
      responsive: true,
      type: "website"
    },
    {
      id: 4,
      title: "Site vitrine pour une couturière AMETOKOSTYLE",
      description: "Site web vitrine présentant les services et réalisations d'une couturière basée à Lomé",
      image: "/images/germany.png",
      technologies: ["WordPress", "PHP", "CSS3"],
      github: null,
      demo: "https://ametokostyle.page.gd/",
      completed: true,
      responsive: "https://ametokostyle.page.gd/"
    },
    {
      id: 5,
      title: "App web SaisieQuizz",
      description: "Application web de saisie et gestion de quiz pour établissements éducatifs",
      image: "/images/germany.png",
      technologies: ["HTML5", "JavaScript", "CSS3"],
      github: "https://github.com/FOLL04/saisiequizz",
      demo: "https://foll04.github.io/saisiequizz/",
      completed: true,
      responsive: "https://foll04.github.io/saisiequizz/"
    }
  ];

  // Données complètes des compétences (SANS POURCENTAGES)
  const skills = {
    languages: [
      { name: "JavaScript", icon: "fab fa-js-square" },
      { name: "HTML5", icon: "fab fa-html5" },
      { name: "CSS3", icon: "fab fa-css3-alt" },
      { name: "PHP", icon: "fab fa-php" },
      { name: "SQL", icon: "fas fa-database" }
    ],
    frameworks: [
      { name: "Laravel", icon: "fab fa-laravel" },
      { name: "ReactJS", icon: "fab fa-react" },
      { name: "Flutter", icon: "fas fa-mobile-alt" }
    ],
    cms: [
      { name: "WordPress", icon: "fab fa-wordpress" },
      { name: "Moodle", icon: "fas fa-graduation-cap" }
    ],
    erp: [
      { name: "Odoo", icon: "fas fa-cogs" },
      { name: "Dolibarr", icon: "fas fa-chart-line" }
    ],
    design: [
      { name: "Figma", icon: "fab fa-figma" },
      { name: "Canva", icon: "fas fa-palette" }
    ],
    outils: [
      { name: "Trello", icon: "fab fa-trello" },
      { name: "Lucidchart", icon: "fas fa-project-diagram" },
      { name: "Git", icon: "fab fa-git-alt" }
    ]
  };

  // Données de la galerie (FILTRÉE - retiré Facebook)
  const galleryItems = [
    {
      id: 1,
      image: "/images/Ametoko.png",
      title: "Logo pour Atelier de Couture AMETOKOSTYLE",
      category: "logo",
      description: "Logo moderne pour un atelier de couture à Lomé",
      outils: ["Canva", "Vector Design"]
    },
    {
      id: 2,
      image: "/images/restau2.png",
      title: "Maquette Site E-commerce Restaurant",
      category: "figma",
      description: "Design complet pour un site de restaurant avec réservation en ligne",
      outils: ["Figma", "UI Design"]
    },
    {
      id: 3,
      image: "/images/evaeme.png",
      title: "Affiche Publicitaire Boutique",
      category: "affiche",
      description: "Design d'affiche pour un commerçant spécialisé",
      outils: ["Canva", "Marketing"]
    },
    {
      id: 4,
      image: "/images/land.png",
      title: "Landing Page Portfolio",
      category: "figma",
      description: "Page d'accueil moderne pour portfolio freelance",
      outils: ["Figma", "UI Kit"]
    },
    {
      id: 5,
      image: "/images/MAKAKOOO1.png",
      title: "Logo Startup E-commerce",
      category: "logo",
      description: "Identité visuelle pour startup e-commerce",
      outils: ["Canva", "Branding"]
    },
    {
      id: 6,
      image: "/images/kani.png",
      title: "Affiche Formation Professionnelle",
      category: "affiche",
      description: "Support visuel pour lancement de formations",
      outils: ["Canva", "Design Graphique"]
    },
    {
      id: 7,
      image: "/images/dashboard.png",
      title: "Dashboard Admin Application Web",
      category: "figma",
      description: "Interface administrateur complète avec analytics",
      outils: ["Figma", "UX Design"]
    }
  ];

  // Filtres de catégorie galerie
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  
  const [isSending, setIsSending] = useState(false);
  const form = useRef();

  // Gestion du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    
    const SERVICE_ID = 'service_7zbp5ts';
    const TEMPLATE_ID = 'template_iuo51g1';
    const PUBLIC_KEY = 'hFK4E4YCOs31XC-Ew'; 
    
    const now = new Date();
    const formattedTime = now.toLocaleString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY, {
      time: formattedTime
    })
    .then((result) => {
      console.log('Success:', result.text);
      alert('Message envoyé avec succès ! Je vous répondrai rapidement.');
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSending(false);
    })
    .catch((error) => {
      console.error('Error:', error.text);
      alert('Erreur lors de l\'envoi. Vous pouvez aussi :\n• M\'écrire à : follyrefdig@gmail.com\n• M\'appeler au : +228 98 26 50 62');
      setIsSending(false);
    });
  };

  // Données de contact cliquables
  const contactData = [
    {
      type: "phone",
      text: "+228 98 26 50 62",
      href: "tel:+22898265062",
      icon: <i className="fas fa-phone"></i>
    },
    {
      type: "email",
      text: "follyrefdig@gmail.com",
      href: "mailto:follyrefdig@gmail.com",
      icon: <i className="fas fa-envelope"></i>
    },
    {
      type: "location",
      text: "Lomé, Togo",
      href: "#",
      icon: <i className="fas fa-map-marker-alt"></i>
    }
  ];

  // Liens sociaux pertinents seulement
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/FOLL04",
      icon: "fab fa-github",
      relevant: true
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/isidore-eklou-461992360",
      icon: "fab fa-linkedin",
      relevant: true
    }
  ];

  return (
    <div className="home">
      {/* META DESCRIPTIONS AJOUTÉES */}
      <Helmet>
        <title>Isidore EKLOU - Référent Digital & Développeur web junior passionné par L'UI/UX</title>
        <meta 
          name="description" 
          content="Portfolio de Isidore EKLOU, Référent Digital et Développeur Web Full Stack basé à Lomé. Expertise en développement web, design UI/UX et solutions digitales." 
        />
        <meta 
          property="og:description" 
          content="Découvrez le portfolio professionnel de Isidore EKLOU avec des projets web complets, designs créatifs et compétences techniques en développement." 
        />
        <meta name="keywords" content="développeur web, référent digital, Lomé, Togo, React, Laravel, portfolio" />
      </Helmet>
      
      <Navbar />
      
      {/* Section Accueil */}
        <section id="accueil" className="section">
          <div className="hero-container">
            <div className="hero-content">
              <h2>Isidore EKLOU</h2>
              <p>Référent Digital et Développeur Fullstack (Laravel & React), 
                je transforme vos concepts en applications performantes avec une forte sensibilité UX/UI. 
                Expert en solutions sur mesure et optimisation SEO, 
                je mise sur les méthodes Agiles pour livrer des projets élégants et intuitifs. 
                Découvrez mon univers entre code moderne et design centré sur l'utilisateur.</p>
              <div className="hero-buttons">
                {/* REMPLACE LE BOUTON PAR CE LIEN : */}
                <a 
                  href="/images/CV.pdf" 
                  className="btn btn-primary"
                  download="CV_Isidore_EKLOU.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-download"></i> Télécharger mon CV
                </a>
                
                <button className="btn btn-secondary" onClick={() => document.getElementById('projets').scrollIntoView()}>
                  Mes Projets
                </button>
              </div>
            </div>
            <div className="hero-image">
              <img src="/images/MEEE.jpg" alt="Isidore EKLOU - Développeur Web" />
            </div>
          </div>
        </section>

      {/* Section À propos */}
      <section id="apropos" className="section">
        <div className="about-container">
          <div className="about-header">
            <h1>Mes Valeurs Principales</h1>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Expertise Digital</h3>
              <p>Solutions digitales complètes avec expertise en développement web, gestion de projet et stratégie numérique.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Satisfaction Client</h3>
              <p>Votre satisfaction est ma priorité avec des projets de qualité qui répondent à vos attentes.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-chess-knight"></i>
              </div>
              <h3>Planification & Stratégie</h3>
              <p>Approche méthodique de la conception à la mise en production pour garantir succès et pérennité.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section id="services" className="section">
        <div className="services-container">
          <div className="services-header">
            <h5>Mes Services</h5>
            <h2>Des Solutions Digitales Complètes</h2>
            <p>Je vous accompagne dans tous les aspects de votre présence digitale</p>
          </div>
          <div className="services-grid">
            {/* Service 1 - UI/UX Design */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-palette"></i>
              </div>
              <h3>UI/UX Design</h3>
              <p>Création d'interfaces intuitives et d'expériences utilisateur mémorables</p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Design d'interface moderne</li>
                <li><i className="fas fa-check"></i> Prototypage interactif</li>
                <li><i className="fas fa-check"></i> Tests d'utilisabilité</li>
              </ul>
            </div>

            {/* Service 2 - Infographie */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3>Infographie</h3>
              <p>Conception visuelle percutante pour renforcer votre identité de marque</p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Identité visuelle</li>
                <li><i className="fas fa-check"></i> Supports print & digital</li>
                <li><i className="fas fa-check"></i> Motion design</li>
              </ul>
            </div>

            {/* Service 3 - Développement Web */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Développement Web</h3>
              <p>Développement de sites web et applications sur mesure avec technologies modernes</p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Sites vitrines & e-commerce</li>
                <li><i className="fas fa-check"></i> Applications React/Laravel</li>
                <li><i className="fas fa-check"></i> Hébergement & déploiement</li>
              </ul>
            </div>

            {/* Service 4 - Référencement Digital */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Référencement Digital</h3>
              <p>Optimisation SEO pour améliorer votre visibilité sur les moteurs de recherche</p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Audit SEO technique</li>
                <li><i className="fas fa-check"></i> Stratégie de contenu</li>
                <li><i className="fas fa-check"></i> Analytics & reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

            {/* Section Projets */}
<section id="projets" className="section">
  <div className="projects-container">
    <div className="projects-header">
      <h5>Mes Réalisations</h5>
      <h2>Projets Professionnels</h2>
      <p>Sélection de projets web complets et fonctionnels</p>
    </div>
    <div className="projects-grid">
      {projects.map(project => (
        <div key={project.id} className="project-card">
          <div className="project-image">
            <img src={project.image} alt={project.title} />
            <div className="project-overlay">
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link demo-link"
                  >
                    <i className="fas fa-external-link-alt"></i> Voir Demo
                  </a>
                )}
                {!project.github && !project.demo && (
                  <span className="project-private">
                    <i className="fas fa-lock"></i> Code Privé
                  </span>
                )}
              </div>
            </div>
            {project.completed && (
              <div className="project-badge completed">
                <i className="fas fa-check-circle"></i> Complet
              </div>
            )}
          </div>
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-actions">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-github">
                  <i className="fab fa-github"></i> Code Source
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-demo"
                >
                  <i className="fas fa-eye"></i> Voir la Demo
                </a>
              )}
              
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      

      {/* Section Compétences - SANS POURCENTAGES */}
      <section id="competences" className="section">
        <div className="skills-container">
          <div className="skills-header">
            <h5>Mes Compétences</h5>
            <h2>Expertise Technique</h2>
            <p>Technologies et outils que je maîtrise</p>
          </div>

          <div className="skills-grid">
            {/* Langages de programmation */}
            <div className="skill-category">
              <div className="category-header">
                <i className="fas fa-code"></i>
                <h3>Langages</h3>
              </div>
              <div className="skills-list">
                {skills.languages.map((skill, index) => (
                  <div key={index} className="skill-item-no-percent">
                    <div className="skill-icon">
                      <i className={skill.icon}></i>
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="skill-category">
              <div className="category-header">
                <i className="fas fa-cubes"></i>
                <h3>Frameworks</h3>
              </div>
              <div className="skills-list">
                {skills.frameworks.map((skill, index) => (
                  <div key={index} className="skill-item-no-percent">
                    <div className="skill-icon">
                      <i className={skill.icon}></i>
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CMS */}
            <div className="skill-category">
              <div className="category-header">
                <i className="fas fa-pencil-alt"></i>
                <h3>CMS</h3>
              </div>
              <div className="skills-list">
                {skills.cms.map((skill, index) => (
                  <div key={index} className="skill-item-no-percent">
                    <div className="skill-icon">
                      <i className={skill.icon}></i>
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ERP */}
            <div className="skill-category">
              <div className="category-header">
                <i className="fas fa-chart-bar"></i>
                <h3>ERP</h3>
              </div>
              <div className="skills-list">
                {skills.erp.map((skill, index) => (
                  <div key={index} className="skill-item-no-percent">
                    <div className="skill-icon">
                      <i className={skill.icon}></i>
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Design & Maquettage */}
            <div className="skill-category">
              <div className="category-header">
                <i className="fas fa-paint-brush"></i>
                <h3>Design</h3>
              </div>
              <div className="skills-list">
                {skills.design.map((skill, index) => (
                  <div key={index} className="skill-item-no-percent">
                    <div className="skill-icon">
                      <i className={skill.icon}></i>
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outils */}
            <div className="skill-category">
              <div className="category-header">
                <i className="fas fa-tools"></i>
                <h3>Outils</h3>
              </div>
              <div className="skills-list">
                {skills.outils.map((skill, index) => (
                  <div key={index} className="skill-item-no-percent">
                    <div className="skill-icon">
                      <i className={skill.icon}></i>
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Galerie */}
      <section id="galerie" className="section">
        <div className="gallery-container">
          <div className="gallery-header">
            <h5>Portfolio Créatif</h5>
            <h2>Design & Identité Visuelle</h2>
            <p>Réalisations en design graphique et identité visuelle</p>
          </div>

          <div className="gallery-filters">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              <i className="fas fa-th"></i> Tous
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'figma' ? 'active' : ''}`}
              onClick={() => setActiveFilter('figma')}
            >
              <i className="fab fa-figma"></i> Maquettes
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'logo' ? 'active' : ''}`}
              onClick={() => setActiveFilter('logo')}
            >
              <i className="fas fa-signature"></i> Logos
            </button>
          </div>

          <div className="gallery-grid">
            {filteredItems.map(item => (
              <div 
                key={item.id} 
                className="gallery-item"
                onClick={() => openModal(item)}
              >
                <div className="gallery-image">
                  <img src={item.image} alt={item.title} />
                  <div className="gallery-overlay">
                    <button className="view-btn">
                      <i className="fas fa-expand"></i> Voir
                    </button>
                  </div>
                </div>
                <div className="gallery-footer">
                  <h4>{item.title}</h4>
                  <span className={`category-badge category-${item.category}`}>
                    {item.category === 'figma' && <i className="fab fa-figma"></i>}
                    {item.category === 'logo' && <i className="fas fa-signature"></i>}
                    {item.category === 'affiche' && <i className="fas fa-palette"></i>}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="section">
        <div className="contact-container">
          <div className="contact-header">
            <h5>Contact</h5>
            <h2>Travaillons Ensemble</h2>
            <p>Discutons de votre projet digital</p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              {contactData.map((contact, index) => (
                <a 
                  key={index}
                  href={contact.href}
                  className="contact-card clickable"
                  target={contact.type === 'email' || contact.type === 'phone' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                >
                  <div className="contact-icon">
                    {contact.icon}
                  </div>
                  <div className="contact-details">
                    <h4>
                      {contact.type === 'phone' ? 'Téléphone' : 
                       contact.type === 'email' ? 'Email' : 'Localisation'}
                    </h4>
                    <p>{contact.text}</p>
                  </div>
                </a>
              ))}

              <div className="social-links-contact">
                <h4>Réseaux Professionnels</h4>
                <div className="social-icons-contact">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url} 
                      className="social-icon-contact"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* FORMULAIRE DE CONTACT */}
            <div className="contact-form">
              <form ref={form} onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Votre nom complet"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSending}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Votre adresse email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSending}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Sujet du message"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    disabled={isSending}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Votre message..."
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSending}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary btn-full"
                  disabled={isSending}
                >
                  {isSending ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> Envoi en cours...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i> Envoyer
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Modale pour la galerie */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-image">
              <img src={selectedImage.image} alt={selectedImage.title} />
            </div>
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
              <div className="modal-tools">
                <h4>Outils :</h4>
                <div className="tools-list">
                  {selectedImage.outils.map((outil, index) => (
                    <span key={index} className="tool-tag">{outil}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Home;