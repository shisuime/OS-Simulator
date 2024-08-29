import React, { useState } from "react";
import Styles from "./Calendar.module.css";

const Calendar = ({ initialYear, initialMonth }) => {
  const [year, setYear] = useState(initialYear || new Date().getFullYear());
  const [month, setMonth] = useState(initialMonth || new Date().getMonth() + 1);

  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  const renderDays = () => {
    const numDays = getDaysInMonth(year, month);
    const days = [];

    for (let i = 1; i <= numDays; i++) {
      days.push(
        <div key={i} className={Styles.day}>
          {i}
        </div>
      );
    }

    return days;
  };

  const handleNextMonth = () => {
    if (month === 12) {
      setYear(year + 1);
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
  };

  const handlePrevMonth = () => {
    if (month === 1) {
      setYear(year - 1);
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  };

  return (
    <div className={Styles.Wholepage}>
      <div className={Styles.calendar}>
        <div className={Styles.header}>
          <button onClick={handlePrevMonth}>&lt;</button>
          <div className={Styles.Move}>{`${year}-${month}`}</div>
          <button onClick={handleNextMonth}>&gt;</button>
        </div>
        <div className={Styles.days}>{renderDays()}</div>
      </div>
    </div>
  );
};

export default Calendar;
