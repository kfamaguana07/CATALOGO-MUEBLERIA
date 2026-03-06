import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Disenos from './pages/Diseños';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          {/* Rutas de Diseños */}
          <Route path="/diseños" element={<Disenos />} />
          <Route path="/diseños/puertas" element={<Disenos />} />
          <Route path="/diseños/closets" element={<Disenos />} />
          <Route path="/diseños/muebles" element={<Disenos />} />

          {/* Fallback temporales para evitar errores 404 en consola hasta crear páginas */}
          <Route path="/trabajos-realizados" element={<Inicio />} />
          <Route path="/contactos" element={<Inicio />} />
          <Route path="*" element={<Inicio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
