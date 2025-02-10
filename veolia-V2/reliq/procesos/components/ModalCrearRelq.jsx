import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { SelectDesdeHasta } from "./SelectDesdeHasta";
import { SelectorRelq } from "./SeletorRelq";
import { selectorService } from "../../../src/ui/services/selectorService";
import { SelectorCalendario } from "./SelectorCalendario";

export const ModalCrearRelq = ({ show, cerrar }) => {
    const token = localStorage.getItem('token');
    const tokenData = token.split(".")[1];
    const decodedToken = JSON.parse(atob(tokenData));

    const usuarioCorreo = decodedToken.usuaCorreo;

    const  [ formulario, setFormulario ] = useState({
        apsaid: '',
        relqdescrip: '',
        relqdesde: '',
        relqhasta: '',
        relqususolicita: '',
        relqusuaprueba: '',
    });

    // {
    //     "relqid": 3,
    //     "apsaid": 1006,
    //     "relqnombre": "Liquidación 1",
    //     "relqdescrip": "Descripción de la liquidación 1",
    //     "relqdesde": "202301",
    //     "relqhasta": "202312",
    //     "relqususolicita": 456,
    //     "relqestado": 1,
    //     "relqidatt": 0,
    //     "relqusuaprueba": 789
    //   }
    // console.log(formulario);
    const [ dataAps, setDataAps ] = useState([]);
    const [ dataCorreos, setDataCorreos ] = useState([]);    

    const onFormulario = (event) => {
        const { name, value } = event.target;
        setFormulario({
            ...formulario,
            [name]: value
        });
    };

    const onFormularioDesdes = (value) => {
        setFormulario(prevFormulario => ({
            ...prevFormulario,
            RELQDESDE: value
        }));
    };
    
    const onFormularioHasta = (value) => {
        setFormulario(prevFormulario => ({
            ...prevFormulario,
            RELQHASTA: value
        }));
    };
    
    const onDataAps = async() => {
        try {
            const result = await selectorService();
            setDataAps(result);
        } catch (error) {
            console.error(error);
        }
    };

    const onDataCorreos = async() => {  
        try {
            const correos = await selectorService();
            setDataCorreos(correos);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        onDataAps();
        onDataCorreos();
    }, []);
    
    return(
    <>
        <Modal show={show} onHide={cerrar} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Actualizar PROY</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ padding: '1rem'}}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '1rem'
                    }}
                >
                    <div>
                        <SelectorRelq onFormulario={onFormulario} data={dataAps} label={'Aps'}/>
                    </div>
                    <div>
                        <SelectDesdeHasta 
                            onFormulario={onFormularioDesdes} 
                            label={'Desde'}
                            name={'RELQDESDE'}
                            value={formulario.RELQDESDE}
                        />
                    </div>
                    <div>
                        <SelectDesdeHasta 
                            onFormulario={onFormularioHasta} 
                            label={'Hasta'}
                            value={formulario.RELQHASTA}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="motivo">Motivo</label>
                    <textarea 
                        style={{ width: '100%' }}
                        name="" 
                        id="motivo"
                        cols="50"
                        rows="10"
                    />
                </div>
                <div>
                    <input
                        style={{ width: '100%', height: '2rem'}}
                        type="file"
                        id="fileUpload"
                        className="file-input"
                        // onChange={handleFileChange}
                        accept=".pdf"
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '1rem'
                    }}
                >
                    <div>
                        <SelectorRelq onFormulario={onFormulario} data={dataCorreos} label={'Solicitado'}/>
                    </div>
                    <div>
                        {/* <SelectorCalendario /> */}
                    </div>
                    <div>
                        <label htmlFor="autoriza">Autoriza</label>
                        <input 
                            type="text" 
                            id="autoriza"
                            className="form-control"
                            value={usuarioCorreo}
                            readOnly 
                        />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button 
                    className="btn btn-primary" 
                    // onClick={onAccionModal}
                > 
                    Guardar
                </button>
                <button 
                    className="btn btn-secondary" 
                    onClick={cerrar}
                >
                    Cerrar
                </button>
            </Modal.Footer>
        </Modal>
    </>
  )
};
