import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DoctorsInfo = ({ doctor }) => {
  return (
    <div class="card border-white bg-white" style={{ width: "18rem" }}>
      <div className="card-img-top d-flex justify-content-center">
        <img
          src={`data:image/png;base64,${doctor.pic.img} `}
          className="img-fluid "
          alt=""
        />
      </div>
      <div class="card-body text-center">
        <h6>{doctor.name}</h6>
        <p>
          <FontAwesomeIcon icon={faEnvelope} color="#1CC7C1" />
          &nbsp;
          {doctor.email}
        </p>
      </div>
    </div>
  );
};

export default DoctorsInfo;
