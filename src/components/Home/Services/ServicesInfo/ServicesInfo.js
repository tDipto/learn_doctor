import React from "react";

const ServicesInfo = ({ services }) => {
  return (
    <div className="col-md-4 text-center">
      <div>
        <img src={services.icon}></img>
        <p className="font-weight-bold mt-3">{services.title}</p>
        <p className="text-muted">{services.info}</p>
      </div>
    </div>
  );
};

export default ServicesInfo;
