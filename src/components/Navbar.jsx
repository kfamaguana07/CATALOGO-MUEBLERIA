import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar-premium ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        

        <button 
          className="navbar-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
              onClick={closeMobileMenu}
            >
              Inicio
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink 
              to="/disenos" 
              className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
              onClick={closeMobileMenu}
            >
              Diseños
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink 
              to="/trabajos-realizados" 
              className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
              onClick={closeMobileMenu}
            >
              Trabajos Realizados
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink 
              to="/contactos" 
              className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
              onClick={closeMobileMenu}
            >
              Contactos
            </NavLink>
          </li>
        </ul>

        <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="https://res.cloudinary.com/dufbr79os/image/upload/v1772601561/Logo_-_Muebleria_isufgc.png" alt="Elegance Mueblería Logo" className="navbar-logo-image" />
        </NavLink>
        
      </div>
    </nav>
  );
};

export default Navbar;
