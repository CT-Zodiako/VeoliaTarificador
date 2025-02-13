import { useDescripcion } from "../../store/storeSelectors";

 export const SelectDescripcion = () => {
    const selecteDescripcion = useDescripcion(state => state.descripcion);

    return(
    <>
        <div className="custom-container">
            <label htmlFor="descripcion" className='label-select'>Descripción:</label>
            <textarea
                style={{ fontSize: '0.8rem', width: '15rem', height: '5rem' }}
                id="descripcion"
                value={selecteDescripcion}
                className="form-control custom-textarea"
                rows="3"
                readOnly   
            />
        </div>
    </>
  )
};