import { useHorizonteDesde, useHorizonteHasta } from "../../store/storeSelectors";

 export const SelectHorizontes = () => {
    const selecteHorizonteDesde = useHorizonteDesde(state => state.horizonteDesde);
    const selecteHorizonteHasta = useHorizonteHasta(state => state.horizonteHasta);

    return(
    <>
      <div className='mt-1'>
        <h6 className="labelSelect">Horizonte</h6>
        <div className="custom-form-group">
          <label htmlFor="aps1" className="labelSelect">Desde:</label>
          <input type="text" id="aps1" className="form-select-sm custom-input" value={selecteHorizonteDesde} readOnly/>
        </div>
        <div className="custom-form-group">
          <label htmlFor="aps2" className="labelSelect">Hasta:</label>
          <input type="text" id="aps2" className="form-select-sm custom-input" value={selecteHorizonteHasta} readOnly/>
        </div>
      </div>
    </>
  )
};