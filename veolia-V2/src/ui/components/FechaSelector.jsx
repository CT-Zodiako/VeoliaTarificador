import React, { useState } from 'react';

export const FechaSelector = () => {
    const [selectedMonth, setSelectedMonth] = useState('');

    const onMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };

    return (

        <div className='col mt-2'>
            <input
                type="month"
                value={selectedMonth}
                onChange={onMonthChange}
                min="mm-yyyy"
                max="mm-yyyy"
            />
        </div>

    );
};
