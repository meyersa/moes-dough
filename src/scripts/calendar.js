"use strict";

const getMonthText = currentMonth => {
    if (currentMonth === 0) { return "January"; }
    else if (currentMonth === 1) { return "February"; }
    else if (currentMonth === 2) { return "March"; }
    else if (currentMonth === 3) { return "April"; }
    else if (currentMonth === 4) { return "May"; }
    else if (currentMonth === 5) { return "June"; }
    else if (currentMonth === 6) { return "July"; }
    else if (currentMonth === 7) { return "August"; }
    else if (currentMonth === 8) { return "September"; }
    else if (currentMonth === 9) { return "October"; }
    else if (currentMonth === 10) { return "November"; }
    else if (currentMonth === 11) { return "December"; }
};

const getLastDayofMonth = currentMonth => {
    const dt = new Date();
    dt.setMonth(currentMonth + 1);
    dt.setDate(0);
    return dt.getDate();
};

$(document).ready(() => {
    const today = new Date();
    const thisMonth = today.getMonth();

    // display month and year
    $("#month_year").text(`${getMonthText(thisMonth)} ${today.getFullYear()}`);

    const lastDayofMonth = getLastDayofMonth(thisMonth);
    let rows = $("#calendar").html();

    // loop through the number of days in the month
    for (var i = 0; i < lastDayofMonth; i++) {
        // add one to index and use that number as current date
        today.setDate(i + 1);

        // get the current date and day
        const date = today.getDate();   // the current date; eg, the 1st, the 22nd, etc
        const day = today.getDay();     // the day of the week; eg, Sat, Sun, etc

        // start a new row if it's the first of the month or the day is Sunday
        if (date === 1 || day === 0) {
            rows += "<tr>";
        }

        // add blank dates at the beginning of the calendar until
        // you get to the day of the week the month starts on
        let start = 0;
        if (date === 1) {
            while (start < day) {
                rows += "<td></td>";
                start++;
            }
        }

        // add the date to the calendar
        rows += `<td>${date}</td>`;

        // add blank dates at the end of the calendar until
        // you get to the last day of the week the month ends in
        if (date === lastDayofMonth) {
            start = day;
            while (start < 6) {
                rows += "<td></td>";
                start++;
            }
        }

        // end the row if it's the last of the month or the day is Saturday
        if (date === lastDayofMonth || day === 6) {
            rows += "</tr>";
        }
    }

    // display calendar rows
    $("#calendar").html(rows);
});