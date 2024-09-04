 export const TablaCostos = ({data}) => {
    return(
    <>
        <div>
            {data.length === 0 ? (
                <h1>Tabla de Costos</h1>
            ) : (
            <>
                <div className="tabla-con-titulo">
                    <div className="tituloCosto">
                        {data.nombre}
                    </div>
                    <table className="tableCosto">
                        <thead className="theadCosto">
                            <tr>
                                {data &&
                                    data.columns.map((key, index) => (
                                        <th key={index}>{key}</th>
                                        ))
                                }
                            </tr>
                        </thead>
                        <tbody className="tbodyCosto">
                        {data &&
                            data.data.map((item, index) => (
                                <tr key={index}>
                                {item.map((value, idx) => (
                                    <td key={idx}>{value}</td>
                                ))}
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </>
            )}
        </div>
    </>
  )
};