import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ShowAllPatients from "./ShowAllPatients/ShowAllPatients";

const AllPatients = () => {
  const [appointment, setAppointment] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    /*   console.log(sessionStorage.getItem("token")); */

    fetch("http://localhost:3001/bookedAllAppointment", {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAppointment(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col">
          {console.log(appointment)}
          {!loading ? (
            appointment.length ? (
              <ShowAllPatients appointment={appointment}></ShowAllPatients>
            ) : (
              <h1>No appointment</h1>
            )
          ) : (
            <h1>loading</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllPatients;
