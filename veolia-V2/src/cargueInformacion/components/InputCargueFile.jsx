import { useState } from "react";

export const InputCargueFile = ({ file, procesar }) => {
    const [filemonthActive, setFilemonthActive] = useState(false);
    const [fileName, setFileName] = useState('Archivo sin seleccionar...');

    const filemonthSelected = (event) => {
        const files = event.target.files || event.dataTransfer.files;
        file(files);
    
        if (!files || files.length === 0) {
          setFilemonthActive(false);
          file(null);
        } else {            
          setFilemonthActive(true);
          setFileName(event.target.files[0].name);
        }
    };

    const cancelarArchivo = () => {
        setFilemonthActive(false);
        file('')
        setFileName('Archivo sin seleccionar...');
    };

    return(
    <>
        <div className="archivo-cargue" style={{ width: '60rem' }}>
            <div className={`file-upload ${filemonthActive ? 'active' : ''}`}>
                <div className="file-select">
                    <div
                        className="file-select-button"
                        onClick={() => document.getElementById('chooseFilemonth').click()}
                    >
                        Seleccionar archivo .csv
                    </div>
                    <div className="file-select-name" id="noFile">
                        {fileName}
                    </div>
                    <input
                        type="file"
                        name="choosemonthFile"
                        id="chooseFilemonth"
                        accept=".csv"
                        onChange={filemonthSelected}
                    />
                </div>
            </div>
            <div>
                <button 
                    className='cancelarCargue'
                    onClick={cancelarArchivo}
                    disabled={!filemonthActive}
                >
                    Cancelar
                </button>
                <button 
                    className='procesarCargue'
                    onClick={procesar}
                    disabled={!filemonthActive}
                >
                    Procesar
                </button>
            </div>
        </div>
    </>
  )
};