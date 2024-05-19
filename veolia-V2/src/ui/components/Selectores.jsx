import React from 'react';
import { ApsSelector } from './ApsSelector';
import { YearSelector } from './YearSelector ';
import { MonthSelector } from './MonthSelector';

export const Selectores = ({ selectorAps = false, selectorFecha = false }) => {

    // const handleYearChange = (year) => {
    //     handleYearMonthChange(year);
    // };

    // const handleMonthChange = (month) => {
    //     handleYearMonthChange(month);
    // };

    return (
        <div className="col-12 d-flex justify-content-center">
            <div className="card col-10">
                <div className="card-body d-flex justify-content-between gap-3 align-items-start">
                    {selectorAps && <ApsSelector />}
                    {selectorFecha && <YearSelector />}
                    {selectorFecha && <MonthSelector />}
                    
                </div>
            </div>
        </div>
    );
};
