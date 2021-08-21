import React from "react";

const FooterService = ({ services }) => {
  return (
    <div className="col-6">
      <h6 className="" style={{ color: "#1CC7C1" }}>
        {services.title}
      </h6>
      <ul style={{ listStyle: "none" }} className="list-group bg-transparent">
        {services.arrayOfServices.map((pd) => (
          <li className="list-group-item border-transparent pl-0 bg-transparent">
            {pd}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterService;
