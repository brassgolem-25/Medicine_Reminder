import React, { useState, useEffect } from "react";
import "./custom.css";

function DateBar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const getFormattedDate = (date) => {
    const day = weekdays[date.getDay()];
    const month = months[date.getMonth()];
    const dateNum = date.getDate();
    return { day, month, dateNum };
  };

  const renderDateBar = () => {
    const { day, month, dateNum } = getFormattedDate(currentDate);
    const dateList = [];

    for (let i = -2; i <= 3; i++) {
      const newDate = new Date();
      newDate.setDate(currentDate.getDate() + i);
      const { day: d, month: m, dateNum: dn } = getFormattedDate(newDate);
      const isActive = i === 0 ? "active" : "";
      const hasMedicineDue = i === 0 ? true : false;
      dateList.push(
        <li key={i} className={isActive}>
          <div>
          {hasMedicineDue && <span className="dot"></span>}

            <span className="date">{dn}</span>
            <span className="day">{d}</span>
            <span className="month">{m}</span>
          </div>
        </li>
      );
    }
    return dateList;
  };

  return (
    <section id="mra_date_bar" className="col-12">
      <div className="row">
        <div className="col-12">
          <ul className="date-bar-scroll ">
        
            {renderDateBar()}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default DateBar;
