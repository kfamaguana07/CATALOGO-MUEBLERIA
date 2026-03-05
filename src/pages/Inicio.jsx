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
                <h2 className="section-title">Sobre Nosotros</h2>
                <p className="about-text">
                  Con más de 20 años de experiencia en Mueblería y Carpintería 'El Laurel' nos dedicamos a diseñar y fabricar muebles en todos los estilos: puertas, closets, muebles de cocina y mucho más. Cada trabajo que realizamos está respaldado por nuestra garantía asegurando tu satisfacción en todo momento.
                  </p>
                <p className="about-text">
                  Trabajamos con materiales de alta calidad como madera, MDF y melamínico, nos adaptamos a tu presupuesto sin limitar tu creatividad. Cualquier diseño que imagines puede hacerse realidad, creando espacios únicos que reflejen tu estilo y necesidades.
                  </p>
                <div className="about-features">
                  <div className="feature-item">
                    <span className="feature-icon">✦</span>
                    <span>Más de 25 años creando muebles de calidad</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✦</span>
                    <span>Garantía en cada trabajo que realizamos</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✦</span>
                    <span>Diseños personalizados, hechos a tu medida y presupuesto</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 fade-up-delay-1">
              <div className="image-collage">
                <div className="collage-item collage-large">
                  <img 
                    src="https://res.cloudinary.com/dufbr79os/image/upload/v1772734442/Gemini_Generated_Image_fhz513fhz513fhz5_rzpu7f.png" 
                    alt="Mueble artesanal" 
                  />
                </div>
                <div className="collage-item collage-medium">
                  <img 
                    src="https://res.cloudinary.com/dufbr79os/image/upload/v1772743232/Gemini_Generated_Image_k2omxpk2omxpk2om_r3shea.png" 
                    alt="Detalle madera" 
                  />
                </div>
                <div className="collage-item collage-small">
                  <img 
                    src="https://res.cloudinary.com/dufbr79os/image/upload/v1772733922/Gemini_Generated_Image_rwaja1rwaja1rwaj_jeskgl.png" 
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
              Explora nuestras categorías de productos y encuentra el diseño perfecto para cada rincón de tu casa.
            </p>
          </div>
          
          <div className="row g-4">
            {/* Tarjeta Puertas */}
            <div className="col-lg-4 col-md-6 fade-up">
              <div className="category-card">
                <div className="category-image-wrapper">
                  <img 
                    src="https://res.cloudinary.com/dufbr79os/image/upload/v1772747201/Gemini_Generated_Image_ywnev5ywnev5ywne_hfdzv4.png" 
                    alt="Puertas de madera" 
                    className="category-image"
                  />
                  <div className="category-overlay"></div>
                </div>
                <div className="category-content">
                  <h3 className="category-title">Puertas</h3>
                  <p className="category-description">
                    Puertas principales e interiores con diseños clásicos y modernos.
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
                    src="https://res.cloudinary.com/dufbr79os/image/upload/v1772749360/Gemini_Generated_Image_gct7yagct7yagct7_qwknab.png" 
                    alt="Closets modernos" 
                    className="category-image"
                  />
                  <div className="category-overlay"></div>
                </div>
                <div className="category-content">
                  <h3 className="category-title">Closets</h3>
                  <p className="category-description">
                    Closets modulares y sobre medida para mantener todo en orden.
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
                    src="https://res.cloudinary.com/dufbr79os/image/upload/v1772749412/D_Q_NP_899179-MLU78141444176_082024-O_xerm0k.webp" 
                    alt="Muebles de cocina" 
                    className="category-image"
                  />
                  <div className="category-overlay"></div>
                </div>
                <div className="category-content">
                  <h3 className="category-title">Muebles</h3>
                  <p className="category-description">
                    Muebles para cocina y baño fabricados con materiales que soportan la humedad y el uso diario.
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
