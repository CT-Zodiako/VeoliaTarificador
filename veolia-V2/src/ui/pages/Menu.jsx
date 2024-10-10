import { useState } from "react";
import { Link } from "react-router-dom";
import { serviceMenu } from "../services/serviceMenu";

export const Menu = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const menu = serviceMenu();
    const inicio = menu[0];
    const onMenu = () => {
        setShowOffcanvas(!showOffcanvas);
    };

    return (
        <nav className="navbar fixed-top custom-navbar">
            <div className="container-fluid" style={{ height: '1.8rem' }}>
                <h6>Veolia App</h6>
                <button
                    className="navbar-toggler botonMenu"
                    type="button"
                    onClick={onMenu}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`offcanvas offcanvas-end ${showOffcanvas ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ width: '15rem', fontSize: '15px', color: 'rgb(213,208,208)', background: 'rgb(110,110,112)' }}>
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                        <button type="button" className="btn-close" onClick={onMenu} aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            {inicio && (
                                <li className="nav-item dropdown"><Link className="text-nav nav-link dropdown-toggle" to={inicio.to}>Inicio</Link></li>
                            )}
                            {menu.map((item, index)=>(
                                <li className="nav-item dropdown" key={index}>
                                {item.label !== 'Inicio' && (
                                    <>
                                        <a className="text-nav nav-link dropdown-toggle" href="#" role="button" onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown" aria-expanded="false">
                                            {item.label}
                                        </a>
                                        {item.items && (
                                            <ul className="dropdown-menu optionMenu">
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
