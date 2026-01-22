// App.jsx - VERSION CORRIGÉE
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

// Importez About, Projects, Contact seulement si les fichiers existent
// Si vous venez de les créer, décommentez ces lignes :
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apropos" element={<About />} /> {/* Changé à /apropos */}
            <Route path="/projets" element={<Projects />} /> {/* Changé à /projets */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;