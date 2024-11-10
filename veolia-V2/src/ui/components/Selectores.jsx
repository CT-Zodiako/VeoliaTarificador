import React from 'react';
import { 
    ApsSelector, YearSelector, MonthSelector, SelectProyecciones, 
    SelectDescripcion, SelectHorizontes, SemestreSelect
} from './';
import '../styles/selectoresGestores.css';

export const Selectores = ({ selectorAps = false, selectorFecha = false, selectorProy = false, selectDrescripcion = false, selectHorizonte = false, selectorSemestre = false }) => {
    const activeSelectors = [
        selectorAps,
        selectorFecha,
        selectorProy,
        selectorSemestre
    ].filter(Boolean).length;

    const containerHeaders = 
        activeSelectors >= 3 ? 'componen-opcion-2' : 'componen-opcion';
    const containerSelects = 
        activeSelectors >= 3 ? 'container-selects-2' : 'container-selects';
    const containerDescrit = 
        activeSelectors >= 3 ? 'container-descripcion' : 'container-selects';

    return (
        <div className="col-12 d-flex justify-content-center" style={{ maxHeight: '18rem' }}>
            <div className={`headers-components col-10 ${selectDrescripcion === true ? `${containerHeaders}` : 'componen-opcion'}`} >
                <div className={`${selectDrescripcion === true ? `${containerSelects}` : 'container-selects' }`}>
                    {selectorAps && <div className={`${selectDrescripcion === true ? 'select-item-2' : 'select-item' }`}><ApsSelector /></div>}
                    {selectorFecha && <div className={`${selectDrescripcion === true ? 'select-item-2' : 'select-item' }`}><YearSelector /></div>}
                    {selectorFecha && <div className={`${selectDrescripcion === true ? 'select-item-2' : 'select-item' }`}><MonthSelector /></div>}
                    {selectorProy && <div className={`${selectDrescripcion === true ? 'select-item-2' : 'select-item' }`}><SelectProyecciones /></div>}
                    {selectorSemestre && <div className={`${selectDrescripcion === true ? 'select-item-2' : 'select-item' }`}><SemestreSelect /></div>}
                </div>
                <div className={`${containerDescrit}`}>
                    {selectDrescripcion && <div className={`${selectDrescripcion === true ? 'select-item-2' : 'select-item' } select-descripcion`}><SelectDescripcion /></div>}
                    {selectHorizonte && <div className={`${selectDrescripcion === true ? 'select-item-2' : 'select-item' } select-horizonte`}><SelectHorizontes /></div>}
                </div>
            </div>
        </div>
    );
};
