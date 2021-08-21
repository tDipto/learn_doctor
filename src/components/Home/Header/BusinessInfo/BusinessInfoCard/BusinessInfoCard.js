import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BusinessInfoCard = ({ information }) => {
  return (
    <div className="col-md-4 text-white" style={{ padding: "0 7px" }}>
      <div
        className="d-flex justify-content-around align-items-center  p-3 "
        style={{
          backgroundColor: information.background,
          height: "17vh",
        }}
      >
        <div className="">
          <FontAwesomeIcon size="2x" icon={information.icon}></FontAwesomeIcon>
        </div>
        <div className="">
          <p className="font-weight-bold">{information.title}</p>
          <small>{information.info}</small>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfoCard;
