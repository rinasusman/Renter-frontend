import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import PropTypes from 'prop-types';

const DateCalendar = ({ setSelectedRange }) => {
    const today = new Date();
    const [selectionRange, setSelectionRange] = useState({
        startDate: today,
        endDate: new Date(today.getTime() + 24 * 60 * 60 * 1000),
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
            minDate={today}
        />
    );
}
DateCalendar.propTypes = {
    setSelectedRange: PropTypes.func.isRequired,
};
export default DateCalendar;
