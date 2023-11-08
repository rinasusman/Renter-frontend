import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DateCalendar = ({ setSelectedRange }) => {
    const today = new Date();
    const [selectionRange, setSelectionRange] = useState({
        startDate: today,
        endDate: new Date(today.getTime() + 24 * 60 * 60 * 1000), // Set an initial end date (1 day later)
        key: 'selection',
    });
    console.log(selectionRange, "rangeeeeeeeeeeeeeeeee")
    const handleSelect = (ranges) => {
        setSelectionRange(ranges.selection);
        setSelectedRange(ranges.selection);
    };

    return (
        <DateRange
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate={today} // Prevent selecting dates earlier than today
        />
    );
}

export default DateCalendar;
