import { useState } from "react";

 export const TablaEditarLinTiemp = ({data, onEditarLineaTiempo, fetchData}) => {
    const [editar, setEditar] = useState(null);
    const [lianeasTiempEdit, setLianeasTiempEdit] = useState({
        isNEw: false,
        DELTIPC: '',
        DELTIPCC: '',
        DELTSMLV: '',
        DELTIOEXP: '',
        DELTFACPRODUC: '',
        DELTINDIPCC: '',
        DELTIPCCS: '',
        PROYID: '',
        APS: '',
        PROYANNO: '',
        PROYMES: '',
    });

    const onLineasTiempo = (index) => {
        setLianeasTiempEdit({
            ...lianeasTiempEdit,
            DELTIPC: data[index].DELTIPC,
            DELTIPCC: data[index].DELTIPCC,
            DELTSMLV: data[index].DELTSMLV,
            DELTIOEXP: data[index].DELTIOEXP,
            DELTFACPRODUC: data[index].DELTFACPRODUC,
            DELTINDIPCC: data[index].DELTINDIPCC,
            DELTIPCCS: data[index].DELTIPCCS,
            PROYID: data[index].PROYID,
            APS: data[index].APS,
            PROYANNO: data[index].PROYANNO,
            PROYMES: data[index].PROYMES,
        });
        console.log('lineasTiempo: ', lianeasTiempEdit);
        
        setEditar(index);
    }

    const onEditarlineasTiempo = (event) => {
        const {name, value} = event.target;
        setLianeasTiempEdit({
            ...lianeasTiempEdit,
            [name]: value
        })
    }

    const onEditarLineasTiempo = async() => {
        try {
            await onEditarLineaTiempo(lianeasTiempEdit);
            await fetchData();
            setEditar(null);
        }
        catch (error) {
            console.error(error);
        }
    }

    return(
    <>
        <table>
            <thead>
                <tr>
                    <th>AÑO</th>
                    <th>MES</th>
                    <th>IPC</th>
                    <th>IPCC</th>
                    <th>SMLV</th>
                    <th>IOEXP</th>
                    <th>FACT PROD</th>
                    <th>IND IPCC</th>
                    <th>ACCION</th>
                </tr>
            </thead>
            <tbody>
                {data &&
                    data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.PROYANNO}</td>
                            <td>{item.PROYMES}</td>
                            {
                                editar === index ? (
                                    <>
                                        <td>
                                            <input 
                                                type="number"
                                                name='DELTIPC'
                                                value={lianeasTiempEdit.DELTIPC}
                                                onChange={onEditarlineasTiempo} 
                                            />
                                        </td>
                                        <td>
                                            <input 
                                                type="number"
                                                name='DELTIPCC'
                                                value={lianeasTiempEdit.DELTIPCC}
                                                onChange={onEditarlineasTiempo} 
                                            />
                                        </td>
                                        <td>
                                            <input 
                                                type="number"
                                                name='DELTSMLV'
                                                value={lianeasTiempEdit.DELTSMLV}
                                                onChange={onEditarlineasTiempo} 
                                            />
                                        </td>
                                        <td>
                                            <input 
                                                type="number"
                                                name='DELTIOEXP'
                                                value={lianeasTiempEdit.DELTIOEXP}
                                                onChange={onEditarlineasTiempo} 
                                            />
                                        </td>
                                        <td>
                                            <input 
                                                type="number"
                                                name='DELTFACPRODUC'
                                                value={lianeasTiempEdit.DELTFACPRODUC}
                                                onChange={onEditarlineasTiempo} 
                                            />
                                        </td>
                                        <td>
                                            <input 
                                                type="number"
                                                name='DELTINDIPCC'
                                                value={lianeasTiempEdit.DELTINDIPCC}
                                                onChange={onEditarlineasTiempo}
                                            />
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td>{item.DELTIPC}</td>
                                        <td>{item.DELTIPCC}</td>
                                        <td>{item.DELTSMLV}</td>
                                        <td>{item.DELTIOEXP}</td>
                                        <td>{item.DELTFACPRODUC}</td>
                                        <td>{item.DELTINDIPCC}</td>
                                    </>
                                )
                            }
                            <td>
                            {
                                editar === index ? (
                                    <div>
                                        <button
                                            className="btn btn-success"
                                            onClick={onEditarLineasTiempo}
                                        >
                                            Guardar
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => setEditar(null)}
                                        >
                                            Cancelar
                                        </button>
                                    </div>
                                )
                                : (
                                    <div>
                                        <button
                                            className="btn btn-warning"
                                            onClick={() => onLineasTiempo(index)}
                                        >
                                            Editar
                                        </button>
                                    </div>
                                )
                            }
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>
  )
};