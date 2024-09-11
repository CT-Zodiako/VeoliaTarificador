import React from 'react';
import { ApsSelector } from './ApsSelector';
import { YearSelector } from './YearSelector ';
import { MonthSelector } from './MonthSelector';
import { SelectProyecciones } from './SelectProyecciones'
import { SelectDescripcion } from './SelectDescripcion';
import { SelectHorizontes } from './SelectHorizontes';

export const Selectores = ({ selectorAps = false, selectorFecha = false, selectorProy = false, selectDrescripcion = false, selectHorizonte = false }) => {

    // const handleYearChange = (year) => {
    //     handleYearMonthChange(year);
    // };

    // const handleMonthChange = (month) => {
    //     handleYearMonthChange(month);
    // };

    return (
        <div className="col-12 d-flex justify-content-center">
            {/* <div className="card col-10 componenSelect-2"> */}
            <div className={`card col-10 ${selectDrescripcion === true ? 'componenSelect-2' : 'componenSelect'}`}>
                {/* <div className="d-flex-row-2"> */}
                <div className={`${selectDrescripcion === true ? 'd-flex-row-2' : 'd-flex-row' }`}>
                    {selectorAps && <div className={`${selectDrescripcion === true ? 'select-item-2' : 'select-item' }`}><ApsSelector /></div>}
                    {selectorFecha && <div className={`${selectDrescripcion === true ? 'select-item-2' : 'select-item' }`}><YearSelector /></div>}
                    {selectorFecha && <div className={`${selectDrescripcion === true ? 'select-item-2' : 'select-item' }`}><MonthSelector /></div>}
                    {selectorProy && <div className={`${selectDrescripcion === true ? 'select-item-2' : 'select-item' }`}><SelectProyecciones /></div>}
                </div>
                <div className={`${selectDrescripcion === true ? 'd-flex-rows-2' : 'd-flex-rows' }`}>
                    {selectDrescripcion && <div className={`${selectDrescripcion === true ? 'select-item-2' : 'select-item' } select-descripcion`}><SelectDescripcion /></div>}
                    {selectHorizonte && <div className={`${selectDrescripcion === true ? 'select-item-2' : 'select-item' } select-horizonte`}><SelectHorizontes /></div>}
                </div>
            </div>
        </div>
    );
};
