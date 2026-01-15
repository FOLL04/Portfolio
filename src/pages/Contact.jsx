import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaClock, FaRocket, FaHandshake, FaPaperPlane, FaCheckCircle, FaSpinner } from 'react-icons/fa';

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Envoi avec EmailJS
    emailjs.sendForm(
      'service_2jjg3m8',
      'template_iuo51g1',
      form.current,
      'hFK4E4YCOs31XC-Ew'
    )
    .then((result) => {
      console.log('Email envoyé avec succès:', result.text);
      setIsSending(false);
      setIsSent(true);
      
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setIsSent(false);
      }, 3000);
    })
    .catch((error) => {
      console.error('Erreur lors de l\'envoi:', error.text);
      setIsSending(false);
      alert('Une erreur est survenue. Veuillez réessayer.');
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* En-tête */}
      <section className="contact-header">
        <div className="container">
          <h1>Contactez-moi</h1>
          <p>Discutons de votre projet web ensemble</p>
        </div>
      </section>

      {/* 3 Cartes d'information */}
      <section className="contact-cards-section">
        <div className="container">
          <div className="contact-cards-grid">
            <div className="contact-card">
              <div className="contact-card-icon">
                <FaEnvelope />
              </div>
              <h3>Contact Direct</h3>
              <p>Réponse garantie sous 24h</p>
              <a href="mailto:follyredig@gmail.com" className="btn btn-primary" style={{marginTop: '1rem'}}>
                <FaEnvelope /> Envoyer un email
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <FaClock />
              </div>
              <h3>Disponibilité</h3>
              <p>Ouvert aux nouvelles opportunités</p>
              <p style={{marginTop: '0.5rem', color: '#666', fontSize: '0.9rem'}}>
                Lundi - Vendredi: 9h - 18h
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <FaRocket />
              </div>
              <h3>Types de Projets</h3>
              <p>Sites web, applications, refontes, consulting</p>
              <p style={{marginTop: '0.5rem', color: '#666', fontSize: '0.9rem'}}>
                Devis gratuit sous 48h
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire avec informations */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-grid">
            {/* Colonne informations */}
            <div className="form-side-message">
              <h3><FaHandshake /> Pourquoi me contacter ?</h3>
              <ul>
                <li>✅ Développement sur mesure</li>
                <li>✅ Design UX/UI optimisé</li>
                <li>✅ Respect des délais</li>
                <li>✅ Support technique inclus</li>
                <li>✅ Solutions évolutives</li>
                <li>✅ Technologies modernes</li>
              </ul>
              
              <div style={{marginTop: '2rem'}}>
                <h4>Informations de contact</h4>
                <div className="contact-info-list" style={{marginTop: '1rem'}}>
                  <div className="contact-info-item">
                    <FaEnvelope style={{marginRight: '0.5rem', color: '#667eea'}} />
                    <div>
                      <strong>Email</strong>
                      <a href="mailto:follyredig@gmail.com" style={{display: 'block', color: '#333'}}>
                        follyredig@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="contact-info-item" style={{marginTop: '1rem'}}>
                    <FaPhone style={{marginRight: '0.5rem', color: '#667eea'}} />
                    <div>
                      <strong>Téléphone</strong>
                      <a href="tel:+22898265062" style={{display: 'block', color: '#333'}}>
                        +228 98 26 50 62
                      </a>
                    </div>
                  </div>
                  
                  <div className="contact-info-item" style={{marginTop: '1rem'}}>
                    <FaMapMarkerAlt style={{marginRight: '0.5rem', color: '#667eea'}} />
                    <div>
                      <strong>Localisation</strong>
                      <p style={{margin: 0, color: '#333'}}>Lomé, Togo</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div style={{marginTop: '2rem'}}>
                <h4>Réseaux sociaux</h4>
                <div className="social-buttons" style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                  <a 
                    href="https://github.com/FOLL04" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn github"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1rem',
                      background: '#24292e',
                      color: 'white',
                      borderRadius: '0.5rem',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn linkedin"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1rem',
                      background: '#0077b5',
                      color: 'white',
                      borderRadius: '0.5rem',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <FaLinkedin />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
              
              <div style={{marginTop: '2rem', padding: '1rem', background: '#f0f7ff', borderRadius: '0.5rem'}}>
                <h4>Disponibilité</h4>
                <p style={{margin: '0.5rem 0', color: '#2e7d32'}}>
                  ✅ Disponible pour de nouvelles opportunités
                </p>
                <p style={{margin: '0.5rem 0', color: '#666'}}>
                  Réponse sous 24h maximum
                </p>
              </div>
            </div>

            {/* Colonne formulaire */}
            <div className="contact-form">
              <div className="form-header">
                <h2><FaPaperPlane /> Formulaire de contact</h2>
                <p>Décrivez votre projet en détails</p>
              </div>
              
              {isSent && (
                <div className="success-message">
                  <FaCheckCircle /> Message envoyé avec succès !
                </div>
              )}
              
              <form ref={form} onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nom complet *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Sujet du projet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Ex: Site e-commerce, Application web..."
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Description détaillée *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Décrivez votre projet, vos besoins, votre budget approximatif..."
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSending || isSent}
                >
                  {isSending ? (
                    <>
                      <FaSpinner className="spinner" /> Envoi en cours...
                    </>
                  ) : isSent ? (
                    <>
                      <FaCheckCircle /> Message envoyé !
                    </>
                  ) : (
                    <>
                      <FaPaperPlane /> Envoyer le message
                    </>
                  )}
                </button>
                
                <p className="form-note">* Champs obligatoires</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA supplémentaire */}
      <section className="contact-cta">
        <div className="container">
          <h2>Vous avez une idée de projet ?</h2>
          <p>Que ce soit un site web, une application ou une refonte, je serais ravi d'en discuter avec vous.</p>
          <a href="mailto:follyredig@gmail.com" className="cta-btn">
            <FaEnvelope /> Envoyer un email direct
          </a>
        </div>
      </section>
    </>
  );
}

export default Contact;