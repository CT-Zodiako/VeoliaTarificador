import { useState } from "react";
import { Link } from "react-router-dom";

export const Menu = () => {

    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const onMenu = () => {
        setShowOffcanvas(!showOffcanvas);
    };

    return (
        <nav className="navbar bg-body-tertiary fixed-top">
            <div className="container-fluid" style={{ height: '1.8rem' }}>
                <h6>Veolia App</h6>
                <button
                    className="navbar-toggler botonMenu"
                    type="button"
                    onClick={onMenu}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className={`offcanvas offcanvas-end ${showOffcanvas ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ width: '15rem', fontSize: '12px' }}>
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
                                    <li><a className="dropdown-item textMenu" href="#">Action</a></li>
                                    <li><a className="dropdown-item textMenu" href="#">Another action</a></li>
                                    <li><a className="dropdown-item textMenu" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown" aria-expanded="false">
                                    Configuración
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item textMenu" to="/aps">APS</Link></li>
                                    <li><Link className="dropdown-item textMenu" to="/empresas">Empresas</Link></li>
                                    <li><Link className="dropdown-item textMenu" to="/usuarios">Usuarios</Link></li>
                                    <li><Link className="dropdown-item textMenu" to="/rellenos">Rellenos</Link></li>

                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown" aria-expanded="false">
                                    Suministros
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item textMenu" to="/indicesCRA">Indices CRA</Link></li>
                                    <li><Link className="dropdown-item textMenu" to="/sub-con">Subsidios y Contribuciones</Link></li>
                                    <li><Link className="dropdown-item textMenu" to="/sub-verf">Verificación</Link></li>
                                    <li><Link className="dropdown-item textMenu" to="/sub-aproch">Activar Aprovechamiento</Link></li>
                                    <li><Link className="dropdown-item textMenu" to="/sub-costPoda">Costo Poda</Link></li>
                                    <li><Link className="dropdown-item textMenu" to="/sub-ajutProd">Ajustes Productividad</Link></li>
                                    <li><Link className="dropdown-item textMenu" to="/sub-desCost">Descuento Costo</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown" aria-expanded="false">
                                    Procesos
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item textMenu" to="/calculo">Calculo Tarifas</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown" aria-expanded="false">
                                    Informes comerciales
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item textMenu" to="/dataDetalladoTarifasCo">Detallado Tarifas</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown" aria-expanded="false">
                                    Informes gerenciales
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item textMenu" to="/dataDetalladoTarifas">Detallado Tarifas</Link></li>
                                    <li><Link className="dropdown-item textMenu" to="/detalladoCostos">Detallado de costo</Link></li>
                                    <li><Link className="dropdown-item textMenu" to="/dataDetalladoSubAport">Detallado Sub y Aportes</Link></li>
                                    <li><Link className="dropdown-item textMenu" to="/dashBoardTarifas">DashBoard</Link></li>
                                    <li><Link className="dropdown-item textMenu" to="/costoPodaInfo">Costo Poda</Link></li>
                                </ul>
                          
                            </li>


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown" aria-expanded="false">
                                    Reporteador Sui
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item textMenu" to="/formatosFormularios">Formatos y Formularios</Link></li>
                                    <li><Link className="dropdown-item textMenu" to="/DashBoardSUI">DashBoard</Link></li>
                                    <li><Link className="dropdown-item textMenu" to="/resmunenFormatosFormularios">Resumen Formatos y Formularios</Link></li>
                                    <li><Link className="dropdown-item textMenu" to="/reversiones_sui">Reversiones</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown" aria-expanded="false">
                                    Proyecciones
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item textMenu" to="/crear">Crear</Link></li>
                        
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown" aria-expanded="false">
                                    Informes Proyecciones
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item textMenu" to="/informesProyecciones">Formatos y Formularios</Link></li>
                        
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown" aria-expanded="false">
                                    PGIRS
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item textMenu" to="/variablesPGIRS">Variables PGIRS</Link></li>
                                    <li><Link className="dropdown-item textMenu" to="/informePGIRS">Informe PGIRS</Link></li>
                                    <li><Link className="dropdown-item textMenu" to="/resumenPGIRS">Resumen Variables PGIRS</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown" aria-expanded="false">
                                    Reversiones
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item textMenu" to="/reversiones">Reversiones</Link></li>
                                    <li><Link className="dropdown-item textMenu" to="/auth_reversiones">Autorizacion Reversiones</Link></li>
                                    <li><Link className="dropdown-item textMenu" to="/detalles_reversiones">Detalles Reversiones</Link></li>
                                    <li><Link className="dropdown-item textMenu" to="/detalles_autorizacion">Detalles Autorizacion</Link></li>
                                </ul>
                            </li>

                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    )
}
