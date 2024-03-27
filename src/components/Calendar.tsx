import React from 'react'
import dayjs from 'dayjs'

export default function Calendar() {

    function getDateInMonth(year = dayjs().year(), month = dayjs().month()) {
        const startDate = dayjs().year(year).month(month).date(1);
        const endDate = startDate.endOf("month");

        const datesArray = [];

        for (let i = startDate.date(); i <= endDate.date(); i++) {
            datesArray.push(startDate.date(i).format("YYYY-MM-DD"))
        }
        
        return datesArray;
    }

    getDateInMonth();
    return (
        <div>Calendar</div>
    )
}
