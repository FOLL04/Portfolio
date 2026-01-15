import React from 'react';
import { FaUser, FaGraduationCap, FaCode, FaGlobe, FaEnvelope, FaGamepad, FaRocket, FaLightbulb, FaFileDownload, FaEye } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaReact, FaLaravel, FaWordpress, FaBootstrap } from 'react-icons/fa';

function About() {
  return (
    <>
      {/* Section Présentation */}
      <section className="about-header">
        <div className="profile-container">
          <div className="avatar-icon">
            <FaUser size="3rem" />
          </div>
          <h1>À propos de moi</h1>
          <p className="intro-text">
            <FaRocket /> Développeur passionné par la création de solutions web innovantes
          </p>
          <p className="bio-text">
            Je suis <strong>EKLOU Folly Isidore</strong>, Référent Digital & Développeur Web Junior basé à Lomé, Togo.
            Passionné par l'UX/UI et les technologies modernes, j'aime concevoir des applications performantes, 
            élégantes et intuitives.
          </p>
          <div className="contact-buttons">
            <a href="mailto:follyredig@gmail.com" className="btn btn-primary">
              <FaEnvelope /> Contactez-moi
            </a>
            <a href="https://github.com/FOLL04" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Section Formation */}
      <section className="education-section">
        <h2><FaGraduationCap /> Formation</h2>
        <div className="education-card">
          <h3>Référent Digital & Développement Web</h3>
          <p className="institution">Académie Digital du Numérique (ADN Golfe), Lomé</p>
          <p className="duration">Mars - Décembre 2025</p>
          <p>
            Formation intensive en développement web, UX/UI, gestion de projet digital et déploiement de solutions web modernes.
          </p>
          <button className="btn btn-outline">
            <FaEye /> Voir le diplôme
          </button>
        </div>
      </section>

      {/* Section Compétences */}
      <section className="skills-section">
        <h2><FaCode /> Compétences Techniques</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Langages & Technologies</h3>
            <ul>
              <li>HTML5 / CSS3</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Frameworks & Bibliothèques</h3>
            <ul>
              <li><FaReact /> React.js</li>
              <li><FaLaravel /> Laravel</li>
              <li><FaBootstrap /> Bootstrap</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Outils & CMS</h3>
            <ul>
              <li>Git & GitHub</li>
              <li><FaWordpress /> WordPress</li>
              <li>Odoo</li>
              <li>Moodle</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Compétences transverses</h3>
            <ul>
              <li>UI/UX Design</li>
              <li>SEO Technique</li>
              <li>Agile/Scrum</li>
              <li>Google Analytics</li>
            </ul>
          </div>
        </div>
        <div className="skills-buttons">
          <button className="btn btn-primary">
            <FaEye /> Voir mes projets
          </button>
          <button className="btn btn-outline">
            <FaFileDownload /> Télécharger mon CV
          </button>
        </div>
      </section>

      {/* Section Langues & Loisirs */}
      <section className="extra-section">
        <div className="extra-grid">
          <div className="extra-card">
            <h3><FaGlobe /> Langues</h3>
            <ul>
              <li>Français (bilingue)</li>
              <li>Anglais technique</li>
            </ul>
          </div>
          <div className="extra-card">
            <h3><FaGamepad /> Loisirs</h3>
            <ul>
              <li>Veillée technologique</li>
              <li>Jeux de société</li>
            </ul>
            <button className="btn btn-small">En savoir plus</button>
          </div>
        </div>
      </section>

      {/* Section Inspiration / Philosophie */}
      <section className="philosophy-section">
        <h3><FaLightbulb /> Ma philosophie de développement</h3>
        <p className="philosophy-text">
          Je crois en la création de solutions web qui allient <strong>performance, élégance et accessibilité</strong>. 
          Chaque ligne de code doit servir l'expérience utilisateur et répondre à un besoin concret.
        </p>
        <a href="#contact" className="btn btn-primary">
          Discutons de votre projet
        </a>
      </section>
    </>
  );
}

export default About;