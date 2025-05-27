import React from "react";
import './Calendar.css';

const Calendar = () => {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const dates = [
    "", "", "", "", 1, 2, 3,
    4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31
  ];

  return (
    <div className="cal">
      <div className="calendar-container">
        <div className="calendar-header">
          <span className="calendar-title">May 2025</span>
          <span className="calendar-arrow">&gt;</span>
        </div>

        <div className="calendar-days">
          {days.map((day, index) => (
            <div key={index}>{day}</div>
          ))}
        </div>

        <div className="calendar-dates">
          {dates.map((date, index) => (
            <div
              key={index}
              className={`calendar-date${date === 22 ? " selected" : ""}${
                date === "" ? " empty" : ""
              }`}
            >
              {date}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;