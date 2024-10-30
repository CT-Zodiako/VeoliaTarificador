 export const OpcionesMenu = ({opcionesRestantes, opcionesAsignadas, onSelectorAsignadas, onSelectorRestantes, onOpcionesAsignadas, onOpcionesRestantes, onMenuOpciones}) => {
    const inicio = opcionesRestantes && opcionesRestantes.find((menu) => menu.id === 100) ? true : false;
    const inicioMenu = opcionesAsignadas && opcionesAsignadas.find((menu) => menu.id === 100) ? true : false;
    return(
    <>
        <div>
            <div style={{ display: 'flex', margin: '1rem 0' }}>
                <div className="contenedor-opciones">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    {opcionesRestantes && inicio &&
                        (() => {
                            const inicio = opcionesRestantes.find((menu) => menu.id === 100);
                            return (
                            <li key={inicio.id} className="nav-item dropdown" style={{ display: 'flex', alignItems: 'center' }}>
                                <button
                                    className="menu-opciones"
                                    style={{
                                        background: inicio.checked ? 'rgb(0, 0, 0, 0.5)' : 'transparent',
                                        color: inicio.checked ? 'white' : 'black',
                                    }}
                                    onClick={() => onSelectorRestantes(inicio.id)}
                                >
                                    {inicio.checked ? '✓' : '✗'}
                                </button>
                                <a className="nav-link" href="#" role="button" onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown" aria-expanded="false" style={{ marginLeft: '0.5rem' }}>
                                    {inicio.label}
                                </a>
                            </li>
                            );
                        })()
                    }
                    {opcionesRestantes &&
                    opcionesRestantes.map((option)=> (
                        <li key={option.id} className="nav-item dropdown" style={{ display: 'flex', alignItems: 'center' }}>
                        {option.label !== 'Inicio' && (
                        <>
                                <button
                                    className="menu-opciones"
                                    style={{
                                        background: option.checked ? 'rgb(0, 0, 0, 0.5)' : 'transparent',
                                        color: option.checked ? 'white' : 'black',
                                    }}
                                    onClick={() => onSelectorRestantes(option.id)}
                                >
                                    {option.checked ? '✓' : '✗'}
                                </button>
                                <a className="nav-link dropdown-toggle" href="#" role="button" onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown" aria-expanded="false" style={{ marginLeft: '0.5rem' }}>
                                    {option.label}
                                </a>
                            {option.items && (
                                <ul className="dropdown-menu">
                                {option.items.map((item) => (
                                    <li key={item.id} className="dropdown-item">
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <button
                                            className="menu-opciones"
                                            style={{
                                                background: item.checked ? 'rgb(0, 0, 0, 0.5)' : 'transparent',
                                                color: item.checked ? 'white' : 'black',
                                            }}
                                            onClick={() => onSelectorRestantes(item.id, true)}
                                        >
                                            {item.checked ? '✓' : '✗'}
                                        </button>
                                            <a className="dropdown-item">{item.label}</a>
                                        </div>
                                    </li>
                                ))}
                                </ul>
                            )}
                        </>
                        )}
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="contenedor-acciones">
                    <div>
                        <button
                            className="boton-accion"
                            onClick={onOpcionesAsignadas}
                        >
                            {'>>'}
                        </button>
                    </div>
                    <div>
                        <button
                            className="boton-accion"
                            onClick={onOpcionesRestantes}
                        >
                            {'<<'}
                        </button>
                    </div>
                </div>
                <div className="contenedor-opciones">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    {opcionesAsignadas && inicioMenu &&
                        (() => {
                            const inicio = opcionesAsignadas.find((menu) => menu.id === 100);
                            return (
                            <li key={inicio.id} className="nav-item dropdown" style={{ display: 'flex', alignItems: 'center' }}>
                                <button
                                    className="menu-opciones"
                                    style={{
                                        background: inicio.checked ? 'rgb(0, 0, 0, 0.5)' : 'transparent',
                                        color: inicio.checked ? 'white' : 'black',
                                    }}
                                    onClick={() => onSelectorAsignadas(inicio.id)}
                                >
                                    {inicio.checked ? '✓' : '✗'}
                                </button>
                                <a className="nav-link" href="#" role="button" onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown" aria-expanded="false" style={{ marginLeft: '0.5rem' }}>
                                    {inicio.label}
                                </a>
                            </li>
                            );
                        })()
                    }
                    {opcionesAsignadas &&
                    opcionesAsignadas.map((option)=> (
                        <li key={option.id} className="nav-item dropdown" style={{ display: 'flex', alignItems: 'center' }}>
                        {option.label !== 'Inicio' && (
                        <>
                                <button
                                    className="menu-opciones"
                                    style={{
                                        background: option.checked ? 'rgb(0, 0, 0, 0.5)' : 'transparent',
                                        color: option.checked ? 'white' : 'black',
                                    }}
                                    onClick={() => onSelectorAsignadas(option.id)}
                                >
                                    {option.checked ? '✓' : '✗'}
                                </button>
                                <a className="nav-link dropdown-toggle" href="#" role="button" onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown" aria-expanded="false" style={{ marginLeft: '0.5rem' }}>
                                    {option.label}
                                </a>
                            {option.items && (
                                <ul className="dropdown-menu">
                                {option.items.map((item) => (
                                    <li key={item.id} className="dropdown-item">
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <button
                                            className="menu-opciones"
                                            style={{
                                                background: item.checked ? 'rgb(0, 0, 0, 0.5)' : 'transparent',
                                                color: item.checked ? 'white' : 'black',
                                            }}
                                            onClick={() => onSelectorAsignadas(item.id, true)}
                                        >
                                            {item.checked ? '✓' : '✗'}
                                        </button>
                                            <a className="dropdown-item">{item.label}</a>
                                        </div>
                                    </li>
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
            <div>
                <button
                    className="boton-guardar"
                    onClick={onMenuOpciones}
                >
                    Guardar
                </button>
            </div>
        </div>
    </>
  )
};