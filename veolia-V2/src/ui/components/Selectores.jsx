import React from 'react';
import { ApsSelector } from './ApsSelector';
import { YearSelector } from './YearSelector ';
import { MonthSelector } from './MonthSelector';
import { SelectProyecciones } from './SelectProyecciones'

export const Selectores = ({ selectorAps = false, selectorFecha = false, selectorProy = false }) => {

    // const handleYearChange = (year) => {
    //     handleYearMonthChange(year);
    // };

    // const handleMonthChange = (month) => {
    //     handleYearMonthChange(month);
    // };

    return (
        <div className="col-12 d-flex justify-content-center">
            <div className="card col-10 componenSelect">
                <div className=" d-flex justify-content-around align-items-center gap-3">
                    {selectorAps && <ApsSelector />}
                    {selectorFecha && <YearSelector />}
                    {selectorFecha && <MonthSelector />}
                    {selectorProy && <SelectProyecciones />}
                </div>
            </div>
        </div>
    );
};
