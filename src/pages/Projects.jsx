import React, { useState } from 'react';


function Projects() {
  // Liste complète de vos projets
  const allProjects = [
    {
      id: 1,
      title: "Site E-commerce WordPress",
      description: "Boutique en ligne complète avec WooCommerce, paiement sécurisé et gestion des stocks",
      technologies: ["WordPress", "WooCommerce", "PHP", "CSS", "JavaScript"],
      category: "wordpress",
      github: "https://github.com/FOLL04/ecommerce-wp",
      demo: "https://boutique.demo.com"
    },
    {
      id: 2,
      title: "Application React - Gestion de tâches",
      description: "Application moderne de gestion de tâches avec drag & drop et notifications",
      technologies: ["React", "JavaScript", "CSS3", "LocalStorage"],
      category: "react",
      github: "https://github.com/FOLL04/task-manager-react",
      demo: "https://tasks.demo.com"
    },
    {
      id: 3,
      title: "Site Vitrine - Restaurant",
      description: "Site responsive pour restaurant avec menu en ligne, réservation et galerie",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      category: "bootstrap",
      github: "https://github.com/FOLL04/restaurant-website",
      demo: "https://restaurant.demo.com"
    },
    {
      id: 4,
      title: "Dashboard Admin Laravel",
      description: "Tableau de bord administratif avec gestion des utilisateurs et statistiques",
      technologies: ["Laravel", "PHP", "MySQL", "Chart.js"],
      category: "laravel",
      github: "https://github.com/FOLL04/admin-dashboard",
      demo: "https://admin.demo.com"
    },
    {
      id: 5,
      title: "Portfolio Personnel",
      description: "Site portfolio moderne avec animations et formulaire de contact",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      category: "html-css-js",
      github: "https://github.com/FOLL04/personal-portfolio",
      demo: "https://portfolio.demo.com"
    },
    {
      id: 6,
      title: "Blog WordPress Thème Personnalisé",
      description: "Thème WordPress sur mesure avec éditeur Gutenberg et optimisation SEO",
      technologies: ["WordPress", "PHP", "JavaScript", "REST API"],
      category: "wordpress",
      github: "https://github.com/FOLL04/custom-wp-theme",
      demo: "https://blog.demo.com"
    },
    {
      id: 7,
      title: "Application Météo React",
      description: "Application météo avec prévisions sur 7 jours et géolocalisation",
      technologies: ["React", "API REST", "CSS Modules", "Axios"],
      category: "react",
      github: "https://github.com/FOLL04/weather-app",
      demo: "https://meteo.demo.com"
    },
    {
      id: 8,
      title: "Site e-Learning Laravel",
      description: "Plateforme d'apprentissage en ligne avec cours, quiz et certificats",
      technologies: ["Laravel", "MySQL", "JavaScript", "PDF Generation"],
      category: "laravel",
      github: "https://github.com/FOLL04/elearning-platform",
      demo: "https://elearn.demo.com"
    },
    {
      id: 9,
      title: "Landing Page Bootstrap",
      description: "Page de destination responsive pour produit digital avec formulaire de capture",
      technologies: ["Bootstrap 5", "JavaScript", "EmailJS"],
      category: "bootstrap",
      github: "https://github.com/FOLL04/landing-page",
      demo: "https://landing.demo.com"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('all'); // 'all', 'wordpress', 'react', 'laravel', 'bootstrap', 'html-css-js'
  const projectsPerPage = 6;

  // Filtrer les projets par catégorie
  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);

  // Calculer la pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Catégories disponibles
  const categories = [
    { id: 'all', name: 'Tous les projets' },
    { id: 'wordpress', name: 'WordPress' },
    { id: 'react', name: 'React' },
    { id: 'laravel', name: 'Laravel' },
    { id: 'bootstrap', name: 'Bootstrap' },
    { id: 'html-css-js', name: 'HTML/CSS/JS' }
  ];

  return (
    <>
      {/* En-tête */}
      <section className="projects-header">
        <h1>Mes Projets</h1>
        <p>Découvrez mes réalisations et projets personnels</p>
      </section>

      {/* Filtres par catégorie */}
      <section className="filters-section">
        <div className="filters-container">
          <h3>Filtrer par technologie :</h3>
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => {
                  setFilter(category.id);
                  setCurrentPage(1); // Retour à la première page lors du filtrage
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Affichage des projets */}
      <section className="all-projects">
        <div className="projects-container">
          {currentProjects.length > 0 ? (
            currentProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <div className="image-placeholder">
                    <span className="tech-badge">{project.category}</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-github"
                    >
                      <span className="btn-icon">{"</>"}</span> Code
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-demo"
                    >
                      <span className="btn-icon">▶</span> Démo
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-projects">
              <p>Aucun projet trouvé dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="pagination-section">
          <div className="pagination">
            <button 
              onClick={() => paginate(currentPage - 1)} 
              disabled={currentPage === 1}
              className="pagination-btn"
            >
              &laquo; Précédent
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`pagination-btn ${currentPage === number ? 'active' : ''}`}
              >
                {number}
              </button>
            ))}
            
            <button 
              onClick={() => paginate(currentPage + 1)} 
              disabled={currentPage === totalPages}
              className="pagination-btn"
            >
              Suivant &raquo;
            </button>
          </div>
          <p className="pagination-info">
            Page {currentPage} sur {totalPages} • {filteredProjects.length} projets
          </p>
        </section>
      )}

      {/* Appel à l'action */}
      <section className="cta-section">
        <h2>Vous avez un projet similaire ?</h2>
        <p>N'hésitez pas à me contacter pour discuter de vos besoins</p>
        <a href="/contact" className="btn-contact">Me contacter</a>
      </section>
    </>
  );
}

export default Projects;