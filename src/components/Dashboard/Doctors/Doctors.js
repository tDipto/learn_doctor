import React from "react";
import Sidebar from "../Sidebar/Sidebar.js";
import DoctorAdd from "./DoctorAdd/DoctorAdd.js";
const Doctors = () => {
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col ">
          <div className="head text-center">
            <h1
              style={{
                backgroundColor: "#1CC7C1",
                borderLeft: "1px solid black",
              }}
              className=""
            >
              ADD Doctors
            </h1>
          </div>
          <div className="container d-flex justify-content-center">
            <DoctorAdd></DoctorAdd>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
