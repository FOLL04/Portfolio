import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route pour la page d'accueil */}
          <Route path="/" element={<Home />} />
          
          {/* Tu peux ajouter d'autres routes plus tard */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/project/:id" element={<ProjectDetail />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;