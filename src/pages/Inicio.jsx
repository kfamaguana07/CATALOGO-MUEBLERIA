import React from 'react';
import './Inicio.css';

const Inicio = () => {
  return (
    <div className="inicio-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title fade-up">
            MUEBLERÍA Y CARPINTERÍA <br />
            "EL LAUREL"
          </h1>
          <p className="hero-subtitle fade-up-delay-1">
            Trabajos Garantizados en Madera, MDF y Melamínico
          </p>
          <button className="btn-premium fade-up-delay-2">
            Explorar Diseños
          </button>
        </div>
      </section>

      {/* Sección Sobre la Mueblería */}
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 fade-up">
              <div className="about-content">
                <h2 className="section-title">Nuestra Pasión</h2>
                <h3 className="section-subtitle">El Arte de la Madera</h3>
                <p className="about-text">
                  Cada pieza que creamos nace de una profunda conexión con la naturaleza 
                  y el respeto por la tradición artesanal. Trabajamos con maderas nobles, 
                  MDF de alta calidad y melamínicos premium para dar vida a espacios únicos.
                </p>
                <p className="about-text">
                  Nuestro compromiso es transformar tu visión en realidad, combinando 
                  técnicas ancestrales con diseño contemporáneo. Cada mueble cuenta una 
                  historia de dedicación, precisión y amor por los detalles.
                </p>
                <div className="about-features">
                  <div className="feature-item">
                    <span className="feature-icon">✦</span>
                    <span>Diseño Personalizado</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✦</span>
                    <span>Materiales Premium</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✦</span>
                    <span>Artesanía Experta</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 fade-up-delay-1">
              <div className="image-collage">
                <div className="collage-item collage-large">
                  <img 
                    src="https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=600&h=700&fit=crop" 
                    alt="Mueble artesanal" 
                  />
                </div>
                <div className="collage-item collage-medium">
                  <img 
                    src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=400&h=500&fit=crop" 
                    alt="Detalle madera" 
                  />
                </div>
                <div className="collage-item collage-small">
                  <img 
                    src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=350&h=450&fit=crop" 
                    alt="Acabado fino" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Categorías Destacadas */}
      <section className="categories-section">
        <div className="container">
          <div className="text-center mb-5 fade-up">
            <h2 className="section-title">Nuestras Especialidades</h2>
            <p className="section-description">
              Explora nuestras categorías de productos y descubre la excelencia en cada detalle
            </p>
          </div>
          
          <div className="row g-4">
            {/* Tarjeta Puertas */}
            <div className="col-lg-4 col-md-6 fade-up">
              <div className="category-card">
                <div className="category-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1534172849764-7f5ab3c96a28?w=800&h=600&fit=crop" 
                    alt="Puertas de madera" 
                    className="category-image"
                  />
                  <div className="category-overlay"></div>
                </div>
                <div className="category-content">
                  <h3 className="category-title">Puertas</h3>
                  <p className="category-description">
                    Puertas de entrada y de interior que combinan seguridad y elegancia
                  </p>
                  <span className="category-link">Ver más →</span>
                </div>
              </div>
            </div>

            {/* Tarjeta Closets */}
            <div className="col-lg-4 col-md-6 fade-up-delay-1">
              <div className="category-card">
                <div className="category-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop" 
                    alt="Closets modernos" 
                    className="category-image"
                  />
                  <div className="category-overlay"></div>
                </div>
                <div className="category-content">
                  <h3 className="category-title">Closets</h3>
                  <p className="category-description">
                    Soluciones de almacenamiento personalizadas para optimizar tu espacio
                  </p>
                  <span className="category-link">Ver más →</span>
                </div>
              </div>
            </div>

            {/* Tarjeta Muebles de Cocina */}
            <div className="col-lg-4 col-md-6 fade-up-delay-2">
              <div className="category-card">
                <div className="category-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop" 
                    alt="Muebles de cocina" 
                    className="category-image"
                  />
                  <div className="category-overlay"></div>
                </div>
                <div className="category-content">
                  <h3 className="category-title">Muebles de Cocina</h3>
                  <p className="category-description">
                    Cocinas integrales diseñadas para funcionalidad y estilo
                  </p>
                  <span className="category-link">Ver más →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
