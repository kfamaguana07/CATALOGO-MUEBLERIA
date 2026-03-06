import { useNavigate } from 'react-router-dom';
import './Diseños.css';

export default function Disenos() {
    const navigate = useNavigate();

    return (
        <div className="disenos-page">
            {/* ── Encabezado ── */}
            <header className="disenos-header">
                <h1 className="disenos-title">MUEBLERÍA Y CARPINTERÍA "EL LAUREL"</h1>
                <p className="disenos-subtitle">Diseños en Madera, MDF y Melamínico</p>
            </header>

            <div className="container">
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
        </div>
    );
}
