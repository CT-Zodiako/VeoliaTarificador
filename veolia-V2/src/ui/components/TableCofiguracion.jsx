import React, { useMemo, useState } from 'react';

export const TableCofiguracion = ({ datos, acciones, tituloTabla }) => {
    const [filtro, setFiltro] = useState('')

    const onFiltroTabla = (e) => {
        setFiltro(e.target.value)
    }

    const filtroName = useMemo(() => {
        return filtro && filtro.length > 0 ?
        datos.datos.filter((item) => { 
            return item.APSA_NOMAPS.toLowerCase().includes(filtro.toLowerCase())
        })
        : datos.datos;
    }, [filtro, datos])
    
    return (
        <section className="container d-flex justify-content-center align-items-center">
            <div className="card rounded">
                <div className="card-body">
                    <h5 className="card-title">{tituloTabla}</h5>
                    <div className="table-responsive" style={{ maxHeight: '40rem', overflowY: 'auto' }}>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    {
                                        Object.keys(datos.formato).map((key, index) => (
                                            <th key={index} scope="col">
                                                {key}
                                            </th>
                                        ))
                                    }
                                    {acciones && <th>Acciones</th>}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {
                                        Object.entries(datos.formato).map(([key, value]) => (
                                            <td key={key} >
                                                {
                                                    value &&
                                                    <div className="input-group input-group-sm mb-3">
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            aria-label="Sizing example input" 
                                                            aria-describedby="inputGroup-sizing-sm" 
                                                            placeholder='Buscar'
                                                            value={filtro} 
                                                            onChange={onFiltroTabla}
                                                        />
                                                    </div>
                                                }
                                            </td>
                                        ))
                                    }
                                </tr>
                                {filtroName.length > 0 && filtroName.map((item, index) => (
                                    <tr key={index}>
                                        {Object.keys(item).map((key, index) => (
                                            <td
                                                className={typeof item[key] === 'number' ? 'text-end' : 'text-start'}
                                                key={index}
                                            >
                                                {item[key]}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};
