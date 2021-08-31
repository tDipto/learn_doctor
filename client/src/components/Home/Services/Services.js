import React from "react";
import tooth from "../../../images/tooth.png";
import tooth2 from "../../../images/tooth2.png";
import tooth3 from "../../../images/tooth3.png";
import ServicesInfo from "./ServicesInfo/ServicesInfo";
const services = [
  {
    title: "Fluoride Treatment",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium beatae harum deserunt illum. Saepe error delectus quasi eius alias accusantium!",
    icon: tooth,
  },
  {
    title: "Cavity Filling",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium beatae harum deserunt illum. Saepe error delectus quasi eius alias accusantium!",
    icon: tooth2,
  },
  {
    title: "Teath Whiteninig",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium beatae harum deserunt illum. Saepe error delectus quasi eius alias accusantium!",
    icon: tooth3,
  },
];

const Services = () => {
  return (
    <div
      className="text-center align-self-center pt-5 mt-5"
      style={{ height: "80vh" }}
    >
      <div>
        <h3 style={{ color: "#1CC7C1" }}>Our Services</h3>
        <h1>Services We Provide</h1>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <div className="row w-75 ">
          {services.map((pd) => (
            <ServicesInfo services={pd}></ServicesInfo>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
