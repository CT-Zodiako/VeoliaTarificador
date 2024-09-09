 export const TablaCostos = ({data}) => {

    const onPorcentaje = (value) => {
        if (value.includes('%')) {
            const percentage = parseFloat(value.replace('%', '').replace(',', '.'));
            const clampedPercentage = Math.max(0, Math.min(100, percentage));
            return (
                <div className="progress-bar-container">
                    <span className="progress-bar-text">
                            {`${clampedPercentage}%`}
                    </span>
                    <div
                        className="progress-bar"
                        style={{ width: `${clampedPercentage}%` }}
                    >
                    </div>
                </div>
            );
        } else {
            return <div>
                {!isNaN(value.replace(",", "."))
                    ? formateoMiles(value)
                    : value}
            </div>
        }
    }

    const isNumericType = (value) => {
        return !isNaN(value.replace(',', '.')) || (value.includes("%")) ? "NumericValue" : "StringValue"
    }

    const formateoMiles = (numeroSinFormatear) => {
      let arrayNumeros = numeroSinFormatear.replace(',', '.').split('.')
      let enteroFormateado = arrayNumeros[0]
      enteroFormateado =  new Intl.NumberFormat('es-MX').format(Number(enteroFormateado))
      return arrayNumeros[1] ? `${enteroFormateado}.${arrayNumeros[1]}`: `${enteroFormateado}`
    }

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
                                    <td 
                                        key={idx}
                                        className={isNumericType(value)}
                                    >
                                        {
                                            onPorcentaje(value)
                                        }
                                    </td>
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