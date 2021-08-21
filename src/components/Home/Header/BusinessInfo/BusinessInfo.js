import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import BusinessInfoCard from "./BusinessInfoCard/BusinessInfoCard.js";

const information = [
  {
    title: "Openning Hours",
    info: "We are opened 7 days",
    icon: faClock,
    background: "#1CC7C1",
  },
  {
    title: "Visit Our Location",
    info: "Mirpur - 15 , Dhaka",
    icon: faMapMarker,
    background: "#3A4256",
  },
  {
    title: "Contact Us",
    info: "+008012323232",
    icon: faPhone,
    background: "#1CC7C1",
  },
];

const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="row " style={{ width: "60vw" }}>
        {information.map((pd) => (
          <BusinessInfoCard information={pd}></BusinessInfoCard>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
