import { useHorizonteDesde, useHorizonteHasta } from "../../store/storeSelectors";

 export const SelectHorizontes = () => {
    const selecteHorizonteDesde = useHorizonteDesde(state => state.horizonteDesde);
    const selecteHorizonteHasta = useHorizonteHasta(state => state.horizonteHasta);

    return(
    <>
      <div className='mt-1'>
        <h6 className="label-select">Horizonte</h6>
        <div className="custom-form-group">
          <div className="label-horizonte">
            <label htmlFor="aps1" className="label-select">Desde:</label>
          </div>
          <input type="text" id="aps1" className="form-select-sm custom-input" value={selecteHorizonteDesde} readOnly/>
        </div>
        <div className="custom-form-group">
          <div className="label-horizonte">
            <label htmlFor="aps2" className="label-select">Hasta:</label>
          </div>
          <input type="text" id="aps2" className="form-select-sm custom-input" value={selecteHorizonteHasta} readOnly/>
        </div>
      </div>
    </>
  )
};