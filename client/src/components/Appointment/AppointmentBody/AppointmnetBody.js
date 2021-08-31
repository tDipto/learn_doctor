import React from "react";
import AppointmentShow from "./AppointmentShow/AppointmentShow";

const appointments = [
  {
    title: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
  {
    title: "Cosmetic Dentistry",
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
  {
    title: "Teeth Cleaining",
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
  {
    title: "Cavity Protection",
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
  {
    title: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
  {
    title: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
];

const AppointmnetBody = ({ dateValue }) => {
  return (
    <div id="showServices">
      <h1 className="text-center text-brand m-5" style={{ color: "#1CC7C1" }}>
        Available Appointments on{" "}
        <span className="text-dark">
          {dateValue.toDateString().split(" ")[1]}&nbsp;
          {dateValue.toDateString().split(" ")[2]},
          {dateValue.toDateString().split(" ")[3]}
        </span>
      </h1>
      <div className="d-flex justify-content-center my-5">
        <div style={{ width: "60vw" }} className="row">
          {appointments.map((pd) => (
            <AppointmentShow
              appointments={pd}
              time={dateValue}
            ></AppointmentShow>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmnetBody;
