 export const CampoDescripcionReversion = ({onEstadoReversion, guardar, textBoton}) => {
    return(
    <>
        <div className='componenTable'>
            <div className="text-area-rev">
                <textarea 
                    className="form-text-area"
                    rows={10}
                    onChange={onEstadoReversion}
                >

                </textarea>
            </div>
            <div className="text-area-rev">
                <button
                    className="boton-area"
                    onClick={guardar}
                >
                    {textBoton}
                </button>
            </div>
        </div>
    </>
  )
};