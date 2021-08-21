import React from "react";
import doctor from "../../../images/doctor.png";
import "./Services3.css";
const Services3 = () => {
  return (
    <div className="make-appointment ">
      <div className="container ">
        <div className="row">
          <div className="col-md-6">
            <img src={doctor} alt="" />
          </div>
          <div className="col-md-6 py-5 my-4">
            <h3>APPOINTMENT</h3>
            <h1>Make an appointmnet Today</h1>
            <p>
              It is a long established fact that a reader will be distractedby
              the readable content of a page when looing at its
            </p>
            <button class="btn" style={{ backgroundColor: "#1CC7C1" }}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services3;
