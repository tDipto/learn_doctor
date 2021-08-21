import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import chair from "../../../../images/headerDiv.png";
import "./HeaderBody.css";
const HeaderBody = ({ dateValue, setDateValue }) => {
  /*  console.log(value); */
  return (
    <div style={{ height: "70vh" }} className="row  d-flex align-items-center ">
      <div className="col-md-3 offset-md-1 ">
        <h1>Appointmnet</h1>
        <Calendar
          className="calendar-design"
          onChange={setDateValue}
          value={dateValue}
        />
      </div>
      <div className="col-md-5 offset-md-2">
        <img src={chair} className="img-fluid " alt="chair" />
      </div>
    </div>
  );
};

export default HeaderBody;
