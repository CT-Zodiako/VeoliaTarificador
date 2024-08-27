 export const CampoDescripcionReversion = ({onEstadoReversion, guardar, textBoton}) => {
    return(
    <>
        <div className='componenTable'>
            <div>
                <textarea 
                    // name="" 
                    // id=""
                    style={{ width: '50%'}}
                    rows={10}
                    onChange={onEstadoReversion}
                >

                </textarea>
            </div>
            <div>
                <button
                    onClick={guardar}
                >
                    {textBoton}
                </button>
            </div>
        </div>
    </>
  )
};