import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const DashboardCalender = ({ dateValue, setDateValue }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        marginTop: "5rem",
        marginLeft: "5rem",
      }}
    >
      <Calendar onChange={setDateValue} value={dateValue} />
    </div>
  );
};

export default DashboardCalender;
