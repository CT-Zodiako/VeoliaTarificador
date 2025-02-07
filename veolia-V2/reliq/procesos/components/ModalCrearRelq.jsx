import { SelectDesdeHasta } from "./SelectDesdeHasta";
import { SelectorAno } from "./SelectorAno";
import { SelectorAps } from "./SelectorAps";
import { SelectorMes } from "./SelectorMes";

export const ModalCrearRelq = ({ show, cerrar }) => {
    const  [ formulario, setFormulario ] = useState({
        APSAID: null,
        RELQDESCRIPCION: '',
        RELQANNO: '',
        RELQMES: '',
        RELQANNOHAS: '',
        RELQMESHAS: '',
        RELQDESDE: '',
        RELQHASTA: ''
    });

    const onFormularioAps = (value) => {
        setFormulario({
            ...formulario,
            APSAID: value
        });
    };

    const onFormularioDesdes = (value) => {
        setFormulario({
            ...formulario,
            RELQDESDE: value
        });
    };

    const onFormularioHasta = (value) => {
        setFormulario({
            ...formulario,
            RELQHASTA: value
        });
    };

    return(
    <>
        <Modal show={show} onHide={cerrar}>
            <Modal.Header closeButton>
                <Modal.Title>Actualizar PROY</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div>
                        <SelectorAps onFormularioAps={onFormularioAps}/>
                    </div>
                    <div>
                        <SelectorAno />
                        <SelectorMes />
                        {/* <SelectDesdeHasta onFormulario={onFormularioDesdes}/> */}
                    </div>
                    <div>
                        <SelectorAno />
                        <SelectorMes />
                        {/* <SelectDesdeHasta onFormulario={onFormularioHasta}/> */}
                    </div>
                </div>
                <div>
                    <textarea 
                        name="" 
                        id=""
                    />
                </div>
                <div>
                    <input 
                        type="file" 
                    />
                </div>
                <div>

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