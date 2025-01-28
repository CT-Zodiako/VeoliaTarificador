import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { serviceMenu } from "../services/serviceMenu";

export const Menu = () => {
    const navigate = useNavigate();

    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const menu = serviceMenu();
    const inicio = menu[0];
    
    const onMenu = () => {
        setShowOffcanvas(!showOffcanvas);
    };

    const cerrarSesion = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="navbar fixed-top custom-navbar">
            <div className="container-fluid" style={{ height: '1.8rem' }}>
                <button
                    className="botonMenu"
                    type="button"
                    onClick={onMenu}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <h6>Veolia App</h6>
                {/* <div className={`offcanvas offcanvas-start ${showOffcanvas ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ width: '16rem', fontSize: '15px', color: 'rgb(213,208,208)', background: 'rgb(110,110,112)' }}> */}
                <div
                    className="sidebar-menu"
                    style={{
                        width: '15rem',
                        background: 'rgb(110,110,112)',
                        height: '100vh',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        overflowY: 'visible',
                        overflowX: 'hidden',
                        overflow: 'visible',
                        fontSize: '15px',
                        color: 'rgb(213,208,208)',
                        padding: '1rem',
                        zIndex: 1,
                    }}
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">VEOLIA</h5>
                        {/* <button type="button" className="btn-close" onClick={onMenu} aria-label="Close"></button> */}
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li>
                                <button
                                    className="btn btn-secondary"
                                    style={{ background: 'rgb(225,31,31)', color: 'rgb(255, 255, 255)', width: '5rem', margin: '1rem 0rem', padding: '0.5rem 0' }}
                                    onClick={cerrarSesion}    
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                                        <polyline points="16 17 21 12 16 7"/>
                                        <line x1="21" y1="12" x2="9" y2="12"/>
                                    </svg>
                                    {/* <p>Cerrar Sesión</p> */}
                                </button>
                            </li>
                            {inicio && (
                                <li className="nav-item dropdown">
                                    <Link className="text-nav nav-link" to={inicio.to}>Inicio</Link>
                                </li>                            
                            )}
                            {menu.map((item, index)=>(
                                <li className="nav-item dropdown" key={index} style={{ position: 'relative', zIndex: 1 }}>
                                {item.label !== 'Inicio' && (
                                    <>
                                        <a className="text-nav nav-link dropdown-toggle" href="#" role="button" onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown" aria-expanded="false">
                                            {item.label}
                                        </a>
                                        {item.items && (
                                            <ul className="dropdown-menu optionMenu lista-menu">
                                                {item.items.map((rut, index)=> (
                                                    <li key={index}><Link className="dropdown-item" to={rut.to}>{rut.label}</Link></li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
