import React, { useEffect, useState } from "react";
import ShowDashboardPatient from "./ShowDashboardPatient/ShowDashboardPatient";

const DashboardPatients = ({ dateValue }) => {
  const [loading, setLoading] = useState(true);
  const [showPatients, setShowPatients] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(
      "http://localhost:3001/bookedAppointment?appointmentTime=" +
        dateValue.toDateString(),
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setShowPatients(data);
        setLoading(false);
      });
  }, [dateValue]);

  return (
    <div className="d-flex flex-column w-100 p-5">
      <div className="date d-flex justify-content-between mb-5">
        <div style={{ color: "#1CC7C1" }} className="heading font-weight-bold">
          Appointments
        </div>
        <div className="heading">{dateValue.toDateString()}</div>
      </div>
      <div className="appointmentList ">
        {!loading ? (
          showPatients.length ? (
            <ShowDashboardPatient
              patients={showPatients}
            ></ShowDashboardPatient>
          ) : (
            <h3>No Appointment</h3>
          )
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </div>
  );
};

export default DashboardPatients;
