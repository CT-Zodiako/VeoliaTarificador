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
            <div className="card col-10 componenSelect">
                <div className="d-flex-row">
                    {selectorAps && <div className="select-item"><ApsSelector /></div>}
                    {selectorFecha && <div className="select-item"><YearSelector /></div>}
                    {selectorFecha && <div className="select-item"><MonthSelector /></div>}
                    {selectorProy && <div className="select-item"><SelectProyecciones /></div>}
                </div>
                <div className="d-flex-rows">
                    {selectDrescripcion && <div className="select-item select-descripcion"><SelectDescripcion /></div>}
                    {selectHorizonte && <div className="select-item select-horizonte"><SelectHorizontes /></div>}
                </div>
            </div>
        </div>
    );
};
