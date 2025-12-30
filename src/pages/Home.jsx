import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';
import emailjs from '@emailjs/browser';
import '@fortawesome/fontawesome-free/css/all.min.css';


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

  // Données de tes projets - À MODIFIER AVEC TES VRAIS PROJETS
  const projects = [
    {
      id: 1,
      title: "Site web de quizz INGGBBATEST-PRO",
      description: "Site web de quizz developpé avec du javascript native",
      image: "/images/breifJS.png",
      technologies: ["Javascript"],
      github: "https://github.com/FOLL04/INGGBAATEST-pro",
      demo: "https://foll04.github.io/INGGBAATEST-pro/",
      type: "github",
      category: "Brief Académique"
    },
    {
      id: 2,
      title: "Plateforme TRAVEL AGENCY",
      description: "Site web d'une entreprise de gestion de voyage du togo vers l'extérieure",
      image: "/images/travel.png",
      technologies: ["HTML5", "CSS3"],
      github: "https://github.com/FOLL04/Travel-Agency",
      demo: null,
      type: "brief",
      category: "web"
    },
    {
      id: 3,
      title: "Logiciel GESCADMEC",
      description: "Logiciel de gestion d'une école.",
      image: "/images/gescadmec.jpg",
      technologies: ["LARAVEL"],
      github: "https://github.com/FOLL04/Gescadmec",
      demo: null,
      type: "github",
      category: "mobile"
    },
    {
      id: 4,
      title: "Site web Pour un collègue informaticien",
      description: "Projet dr creation d'un site web pour un collègue informaticien",
      image: "/images/briefSITE.png",
      technologies: ["HTML5", "CSS3", "Boostrap"],
      github: "https://github.com/FOLL04/Site-Responsive1",
      demo: "https://foll04.github.io/Site-Responsive1/",
      type: "brief",
      category: "web"
    },
    {
      id: 5,
      title: "Site web pour une Boutique",
      description: "Site web pour une boutique de vente d'articles importé d'allemagne",
      image: "/images/germany.png",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/FOLL04/GermanyShop",
      demo: null,
      type: "github",
      category: "web"
    },
    {
      id: 6,
      title: "Mon Portfolio Personnel",
      description: "Site web personnel pour présenter mes compétences et projets.",
      image: "/images/portfolio.png",
      technologies: ["React.js", "Github", "Render.com"],
      github: "https://github.com/FOLL04/Portfolio",
      demo: "https://isidore.onrender.com/",
      type: "github",
      category: "web"
    }
  ];

  // Données complètes des compétences
  const skills = {
    languages: [
      { name: "JavaScript", level: 55, icon: "fab fa-js-square" },
      { name: "HTML5", level: 80, icon: "fab fa-html5" },
      { name: "CSS3", level: 60, icon: "fab fa-css3-alt" },
      { name: "PHP", level: 50, icon: "fab fa-php" },
      { name: "SQL", level: 45, icon: "fas fa-database" }
    ],
    frameworks: [
      { name: "Laravel", level: 55, icon: "fab fa-laravel" },
      { name: "ReactJS", level: 45, icon: "fab fa-react" },
      { name: "Flutter", level: 20, icon: "fas fa-mobile-alt" }
    ],
    cms: [
      { name: "WordPress", level: 75, icon: "fab fa-wordpress" },
      { name: "Moodle", level: 75, icon: "fas fa-graduation-cap" }
    ],
    erp: [
      { name: "Odoo", level: 70, icon: "fas fa-cogs" },
      { name: "Dolibarr", level: 45, icon: "fas fa-chart-line" }
    ],
    design: [
      { name: "Figma", level: 70, icon: "fab fa-figma" },
      { name: "Canva", level: 70, icon: "fas fa-palette" }
    ],
    outils: [
      { name: "Trello", level: 70, icon: "fab fa-trello" },
      { name: "Lucidchart", level: 80, icon: "fas fa-project-diagram" },
      { name: "Analyse SI", level: 60, icon: "fas fa-chart-pie" },
      { name: "Draw.io", level: 60, icon: "fas fa-network-wired" }
    ]
  };

  // Données de la galerie
  const galleryItems = [
    {
      id: 1,
      image: "/images/FIGMA1.png",
      title: "Maquette de l'application Facebook",
      category: "figma",
      description: "Design UI/UX complet pour une application de réseau social",
      outils: ["Figma", "Prototypage"]
    },
    {
      id: 2,
      image: "/images/Ametoko.png ",
      title: "Conception de Logo pour AetokoStyle",
      category: "logo",
      description: "Logo pour un atelier de couture moderne à lomé AetokoStyle",
      outils: ["Canva", "Vector Design"]
    },
    {
      id: 3,
      image: "/images/restau2.png",
      title: "Site E-commerce pour un Restaurant",
      category: "figma",
      description: "Création d'identité visuelle pour un restaurant gastronomique",
      outils: ["Figma", "Auto Layout"]
    },
    {
      id: 4,
      image: "/images/evaeme.png",
      title: "Affiche pour une boutique de vente de ciment",
      category: "affiche",
      description: "Design d'affiche pour un commercant de ciment à Lomé EVAEME",
      outils: ["Canva", "Photoshop"]
    },
    {
      id: 5,
      image: "/images/land.png",
      title: "Landing page pour un site personnel",
      category: "figma",
      description: "Page de destination moderne pour un portfolio de service freelance",
      outils: ["Figma", "UI Kit"]
    },
    {
      id: 6,
      image: "/images/MAKAKOOO1.png",
      title: "Logo Startup E-commerce Shopify",
      category: "logo",
      description: "Identité moderne pour une startup e-commerce spécialisée dans la construction",
      outils: ["Canva", "Vector Design"]
    },
    {
      id: 7,
      image: "/images/kani.png",
      title: "Affiche De lanvcement de formations",
      category: "affiche",
      description: "Affiche promotionnelle pour le lancement de nouvelles formations en presentiel",
      outils: ["Canva", "Marketing"]
    },
    {
      id: 8,
      image: "/images/dashboard.png",
      title: "Dashboard Admin pour Application Web",
      category: "figma",
      description: "Tableau de bord administrateur intuitif pour la gestion des utilisateurs et du contenu",
      outils: ["Figma", "UI Kit"]
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
  
  // État pour le formulaire de contact
  
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

  //  CORRECTION ICI : Ta Public Key doit commencer par "user_"
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    
    //  CORRIGE TA PUBLIC KEY - Elle doit être du format "user_xxxxxxxxxx"
    const SERVICE_ID = 'service_7zbp5ts';
    const TEMPLATE_ID = 'template_iuo51g1';
    const PUBLIC_KEY = 'hFK4E4YCOs31XC-Ew'; 
    
    // Ajouter la date
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
      console.log(' Success:', result.text);
      alert(' Message envoyé avec succès ! Je vous répondrai rapidement.');
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSending(false);
    })
    .catch((error) => {
      console.error(' Error:', error.text);
      alert(' Erreur lors de l\'envoi. Vous pouvez aussi :\n• M\'écrire à : follyrefdig@gmail.com\n• M\'appeler au : +228 98 26 50 62');
      setIsSending(false);
    });
};


  return (
    <div className="home">
      <Navbar />
      
      {/* Section Accueil */}
      <section id="accueil" className="section">
        <div className="hero-container">
          <div className="hero-content">
            <h2>Isidore EKLOU</h2>
            <p>Référent Digital & Développeur Web Full Stack</p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Télécharger mon CV</button>
              <button className="btn btn-secondary" onClick={() => document.getElementById('projets').scrollIntoView()}>
                Mes Projets</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/MEEE.jpg" alt="Photo de profil" />
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
              <p>Je propose des solutions digitales complètes avec une expertise en développement web, gestion de projet et stratégie numérique.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Satisfaction Client</h3>
              <p>Votre satisfaction est ma priorité. Je m'engage à livrer des projets de qualité qui répondent à vos attentes.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-chess-knight"></i>
              </div>
              <h3>Planification & Stratégie</h3>
              <p>Une approche méthodique pour chaque projet, de la conception à la mise en production, garantissant succès et pérennité.</p>
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
            <p>Je vous accompagne dans tous les aspects de votre présence digitale, de la conception à la mise en œuvre</p>
          </div>
          <div className="services-grid">
            {/* Service 1 - UI/UX Design */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-palette"></i>
              </div>
              <h3>UI/UX Design</h3>
              <p>Création d'interfaces intuitives et d'expériences utilisateur mémorables qui convertissent vos visiteurs en clients</p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Design d'interface moderne</li>
                <li><i className="fas fa-check"></i> Expérience utilisateur optimisée</li>
                <li><i className="fas fa-check"></i> Prototypage interactif</li>
                <li><i className="fas fa-check"></i> Tests d'utilisabilité</li>
              </ul>
              <button className="service-btn" onClick={() => document.getElementById('galerie').scrollIntoView()}>
                <i className="fas fa-arrow-right"></i> En savoir plus
              </button>
            </div>

            {/* Service 2 - Infographie */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3>Infographie</h3>
              <p>Conception visuelle percutante pour renforcer votre identité de marque et capter l'attention de votre audience</p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Identité visuelle</li>
                <li><i className="fas fa-check"></i> Charte graphique</li>
                <li><i className="fas fa-check"></i> Supports print & digital</li>
                <li><i className="fas fa-check"></i> Motion design</li>
              </ul>
              <button className="service-btn" onClick={() => document.getElementById('galerie').scrollIntoView()}>
                <i className="fas fa-arrow-right"></i> En savoir plus
              </button>
            </div>

            {/* Service 3 - Développement Web */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Développement Web</h3>
              <p>Développement de sites web et applications sur mesure, performants et évolutifs avec les technologies modernes</p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Sites vitrines & e-commerce</li>
                <li><i className="fas fa-check"></i> Applications Reactjs/Laravel</li>
                <li><i className="fas fa-check"></i> Responsive design</li>
                <li><i className="fas fa-check"></i> Hébergement & déploiement</li>
              </ul>
              <button className="service-btn" onClick={() => document.getElementById('projets').scrollIntoView()}>
                  <i className="fas fa-arrow-right"></i> En savoir plus
              </button>
            </div>

            {/* Service 4 - Référencement Digital */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Référencement Digital</h3>
              <p>Optimisation SEO pour améliorer votre visibilité sur les moteurs de recherche et attirer du trafic qualifié</p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Audit SEO technique</li>
                <li><i className="fas fa-check"></i> Optimisation on-page</li>
                <li><i className="fas fa-check"></i> Stratégie de contenu</li>
                <li><i className="fas fa-check"></i> Analytics & reporting</li>
              </ul>
              <button className="service-btn" onClick={() => document.getElementById('contact').scrollIntoView()}>
                <i className="fas fa-arrow-right"></i> En savoir plus
              </button>
            </div>

            {/* Service 5 - Assistance Informatique */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-laptop-medical"></i>
              </div>
              <h3>Assistance Informatique</h3>
              <p>Support technique réactif pour résoudre vos problèmes informatiques et optimiser votre environnement digital</p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Support technique</li>
                <li><i className="fas fa-check"></i> Maintenance préventive</li>
                <li><i className="fas fa-check"></i> Formation utilisateur</li>
                <li><i className="fas fa-check"></i> Sécurité informatique</li>
              </ul>
              <button className="service-btn" onClick={() => document.getElementById('contact').scrollIntoView()}>
                <i className="fas fa-arrow-right"></i> En savoir plus
              </button>
            </div>

            {/* Service 6 - Community Management */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Community Management</h3>
              <p>Gestion et animation de vos communautés en ligne pour renforcer l'engagement et développer votre marque</p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Stratégie réseaux sociaux</li>
                <li><i className="fas fa-check"></i> Création de contenu</li>
                <li><i className="fas fa-check"></i> Animation communautaire</li>
                <li><i className="fas fa-check"></i> Analyse de performance</li>
              </ul>
              <button className="service-btn" onClick={() => document.getElementById('contact').scrollIntoView()}>
                <i className="fas fa-arrow-right"></i> En savoir plus
              </button>
            </div>
          </div>
          <div className="services-cta">
            <h3>Prêt à transformer votre vision en réalité ?</h3>
            <p>Discutons de votre projet et trouvons la solution adaptée à vos besoins</p>
            <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView()}>
              <i className="fas fa-rocket"></i> Commencer mon projet
            </button>
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section id="projets" className="section">
        <div className="projects-container">
          <div className="projects-header">
            <h5>Mon Portfolio</h5>
            <h2>Mes Réalisations</h2>
            <p>Découvrez une sélection de mes projets, allant des briefs académiques aux applications personnelles</p>
          </div>
          <div className="projects-filters">
            <button className="filter-btn active" data-filter="all">Tous</button>
            <button className="filter-btn" data-filter="github">Projets GitHub</button>
            <button className="filter-btn" data-filter="brief">Développement web</button>
          </div>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className={`project-card ${project.type} ${project.category}`}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                          <i className="fab fa-github"></i>
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      )}
                      {!project.github && !project.demo && (
                        <span className="project-private">
                          <i className="fas fa-lock"></i> Code Privé
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="project-badge">
                    {project.type === 'github' ? (
                      <span className="badge github-badge">
                        <i className="fab fa-github"></i> GitHub
                      </span>
                    ) : (
                      <span className="badge brief-badge">
                        <i className="fas fa-graduation-cap"></i> Brief Académique
                      </span>
                    )}
                  </div>
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
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        <i className="fab fa-github"></i> Code Source
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <i className="fas fa-play"></i> Voir la Demo
                      </a>
                    )}
                    {!project.github && !project.demo && (
                      <button className="btn btn-outline" disabled>
                        <i className="fas fa-lock"></i> Projet Académique
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="projects-cta">
            <h3>Intéressé par mon travail ?</h3>
            <p>N'hésitez pas à explorer mes autres projets ou à me contacter pour discuter de votre projet</p>
            <div className="cta-buttons">
              <a href="https://github.com/FOLL04" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <i className="fab fa-github"></i> Voir mon GitHub
              </a>
              <a href="#contact" className="btn btn-secondary">
                <i className="fas fa-envelope"></i> Me Contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Compétences COMPLÈTE */}
      <section id="competences" className="section">
        <div className="skills-container">
          <div className="skills-header">
            <h5>Mes Compétences</h5>
            <h2>Mon Expertise Technique</h2>
            <p>Un panorama complet de mes compétences techniques acquises au fil de mes expériences</p>
          </div>

          <div className="skills-grid">
            {/* Langages de programmation */}
            <div className="skill-category">
              <div className="category-header">
                <i className="fas fa-code"></i>
                <h3>Langages de Programmation</h3>
              </div>
              <div className="skills-list">
                {skills.languages.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <div className="skill-icon">
                        <i className={skill.icon}></i>
                      </div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                        data-level={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="skill-category">
              <div className="category-header">
                <i className="fas fa-cubes"></i>
                <h3>Frameworks & Libraries</h3>
              </div>
              <div className="skills-list">
                {skills.frameworks.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <div className="skill-icon">
                        <i className={skill.icon}></i>
                      </div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                        data-level={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CMS */}
            <div className="skill-category">
              <div className="category-header">
                <i className="fas fa-pencil-alt"></i>
                <h3>Systèmes de Gestion de Contenu</h3>
              </div>
              <div className="skills-list">
                {skills.cms.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <div className="skill-icon">
                        <i className={skill.icon}></i>
                      </div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                        data-level={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ERP */}
            <div className="skill-category">
              <div className="category-header">
                <i className="fas fa-chart-bar"></i>
                <h3>ERP & Logiciels de Gestion</h3>
              </div>
              <div className="skills-list">
                {skills.erp.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <div className="skill-icon">
                        <i className={skill.icon}></i>
                      </div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                        data-level={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Design & Maquettage */}
            <div className="skill-category">
              <div className="category-header">
                <i className="fas fa-paint-brush"></i>
                <h3>Design & Maquettage</h3>
              </div>
              <div className="skills-list">
                {skills.design.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <div className="skill-icon">
                        <i className={skill.icon}></i>
                      </div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                        data-level={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outils de Gestion & Conception */}
            <div className="skill-category">
              <div className="category-header">
                <i className="fas fa-tools"></i>
                <h3>Outils de Gestion & Conception</h3>
              </div>
              <div className="skills-list">
                {skills.outils.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <div className="skill-icon">
                        <i className={skill.icon}></i>
                      </div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                        data-level={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="skills-summary">
            <div className="summary-card">
              <i className="fas fa-laptop-code"></i>
              <h3>Développement Full Stack</h3>
              <p>Capacité à travailler sur l'ensemble des couches d'une application, du frontend au backend</p>
            </div>
            <div className="summary-card">
              <i className="fas fa-mobile-alt"></i>
              <h3>Applications Multi-plateformes</h3>
              <p>Création d'applications web responsives et solutions mobiles cross-platform</p>
            </div>
            <div className="summary-card">
              <i className="fas fa-rocket"></i>
              <h3>Solutions Sur Mesure</h3>
              <p>Développement de solutions adaptées aux besoins spécifiques de chaque client</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Galerie */}
      <section id="galerie" className="section">
        <div className="gallery-container">
          <div className="gallery-header">
            <h5>Ma Galerie Créative</h5>
            <h2>Design & Identité Visuelle</h2>
            <p>Découvrez mes réalisations en design UI/UX, création de logos et supports publicitaires</p>
          </div>

          <div className="gallery-filters">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              <i className="fas fa-th"></i> Tous les projets
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'figma' ? 'active' : ''}`}
              onClick={() => setActiveFilter('figma')}
            >
              <i className="fab fa-figma"></i> Maquettes Figma
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'logo' ? 'active' : ''}`}
              onClick={() => setActiveFilter('logo')}
            >
              <i className="fas fa-signature"></i> Logos
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'affiche' ? 'active' : ''}`}
              onClick={() => setActiveFilter('affiche')}
            >
              <i className="fas fa-palette"></i> Affiches Pub
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
                    <div className="gallery-content">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <div className="gallery-tools">
                        {item.outils.map((outil, index) => (
                          <span key={index} className="tool-tag">{outil}</span>
                        ))}
                      </div>
                      <button className="view-btn">
                        <i className="fas fa-expand"></i> Voir les détails
                      </button>
                    </div>
                  </div>
                </div>
                <div className="gallery-footer">
                  <span className={`category-badge category-${item.category}`}>
                    {item.category === 'figma' && <i className="fab fa-figma"></i>}
                    {item.category === 'logo' && <i className="fas fa-signature"></i>}
                    {item.category === 'affiche' && <i className="fas fa-palette"></i>}
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-cta">
            <h3>Besoin d'un design sur mesure ?</h3>
            <p>Que ce soit pour une maquette, un logo ou une campagne publicitaire, je crée l'identité visuelle qui vous correspond</p>
            <a href="#contact" className="btn btn-primary">
              <i className="fas fa-pencil-alt"></i> Discuter de mon projet
            </a>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="section">
        <div className="contact-container">
          <div className="contact-header">
            <h5>Contact</h5>
            <h2>Travaillons Ensemble</h2>
            <p>N'hésitez pas à me contacter pour discuter de votre projet ou pour toute question</p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-details">
                  <h4>Téléphone</h4>
                  <a href="tel:+22898265062">+228 98 26 50 62</a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <a href="mailto:follyrefdig@gmail.com">follyrefdig@gmail.com</a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details">
                  <h4>Localisation</h4>
                  <p>Lomé, Togo</p>
                </div>
              </div>

              <div className="social-links-contact">
                <h4>Suivez-moi sur les réseaux</h4>
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
                      <i className="fas fa-paper-plane"></i> Envoyer le message
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
                <h4>Outils utilisés :</h4>
                <div className="tools-list">
                  {selectedImage.outils.map((outil, index) => (
                    <span key={index} className="tool-tag">{outil}</span>
                  ))}
                </div>
              </div>
              <div className="modal-category">
                <span className={`category-badge category-${selectedImage.category}`}>
                  {selectedImage.category === 'figma' && <i className="fab fa-figma"></i>}
                  {selectedImage.category === 'logo' && <i className="fas fa-signature"></i>}
                  {selectedImage.category === 'affiche' && <i className="fas fa-palette"></i>}
                  {selectedImage.category === 'figma' ? 'Maquette Figma' : 
                   selectedImage.category === 'logo' ? 'Logo Design' : 
                   'Affiche Publicitaire'}
                </span>
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