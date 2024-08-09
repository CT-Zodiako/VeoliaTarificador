 export const TablaProyecciones = ({ datos, colums }) => {    
    console.log('datos tabla: ', datos);
    
    return(
    <>
        <div className="container">
            <div style={{ overflowX: 'auto', overflowY: 'auto', maxHeight: '40rem' }}>
                <table>
                    <thead>
                        <tr>
                            {colums &&
                                colums.map((item, index) => (
                                    <th key={index}>{item.head}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        { datos &&
                            datos.map((item, index) => (
                                <tr key={index}>
                                    {colums.map((body, indexBody) => (
                                        <td key={indexBody}>{item[body.body]}</td>
                                    ))}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
};