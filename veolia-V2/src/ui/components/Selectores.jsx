import React from 'react';
import { ApsSelector } from './ApsSelector';
import { YearSelector } from './YearSelector ';
import { MonthSelector } from './MonthSelector';

export const Selectores = ({ selectorAps = false, selectorFecha = false, handleYearMonthChange }) => {

    const handleYearChange = (year) => {
        handleYearMonthChange(year, selectedMonth);
    };

    const handleMonthChange = (month) => {
        handleYearMonthChange(selectedYear, month);
    };

    return (
        <div className="col-12 d-flex justify-content-center">
            <div className="card col-10">
                <div className="card-body d-flex justify-content-between gap-3 align-items-start">
                    {selectorAps && <ApsSelector />}
                    {selectorFecha && <YearSelector onYearChange={handleYearChange} />}
                    {selectorFecha && <MonthSelector onMonthChange={handleMonthChange} />}
                    
                </div>
            </div>
        </div>
    );
};
