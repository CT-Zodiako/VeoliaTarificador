import { useState } from "react";
import { Link } from "react-router-dom";

export const Menu = () => {

    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const onMenu = () => {
        setShowOffcanvas(!showOffcanvas);
    };

    return (
        <nav className="navbar bg-body-tertiary fixed-top">
            <div className="container-fluid">

                <p>Veolia</p>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={onMenu}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`offcanvas offcanvas-end ${showOffcanvas ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                        <button type="button" className="btn-close" onClick={onMenu} aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown" aria-expanded="false">
                                    Configuración
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/aps">APS</Link></li>
                                    <li><Link className="dropdown-item" to="/usuarios">Usuarios</Link></li>
                                </ul>
                            </li>


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown" aria-expanded="false">
                                    Reporteador Sui
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/formatosFormularios">Formatos y Formularios</Link></li>
                                    <li><Link className="dropdown-item" to="/resmunenFormatosFormularios">Resumen Formatos y Formularios</Link></li>
                                    <li><Link className="dropdown-item" to="/reversiones">Reversiones</Link></li>
                                </ul>
                            </li>


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown" aria-expanded="false">
                                    Informes Proyecciones
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/informesProyecciones">Formatos y Formularios</Link></li>
                        
                                </ul>
                            </li>

                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    )
}
