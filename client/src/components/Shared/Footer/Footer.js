import {
  faFacebook,
  faGooglePlusG,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";
import FooterService from "./FooterService/FooterService";
const services = [
  {
    title: "All Services",
    arrayOfServices: ["Emergency", "Check up", "treatment"],
  },
  {
    title: "Oral",
    arrayOfServices: ["Emergency", "Check up", "treatment"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-container-img ">
      <div className="d-flex justify-content-center pb-5">
        <div className="row w-75 h-75 ">
          <div className="col-md-3 col-1 align-self-center pt-4">
            <div className="item">
              <ul className="list-group " style={{ listStyle: "none" }}>
                <li className="list-group-item border-transparent bg-transparent">
                  Emergency
                </li>
                <li className="list-group-item border-transparent bg-transparent">
                  Checkup
                </li>
                <li className="list-group-item border-transparent bg-transparent">
                  Delivery
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-2 align-self-center">
            <div className="row" style={{ listStyle: "none" }}>
              {services.map((pd) => (
                <FooterService services={pd}></FooterService>
              ))}
            </div>
          </div>
          <div className="col-md-3 col-3">
            <ul
              className="list-group bg-transparent"
              style={{ listStyle: "none" }}
            >
              <li
                className="list-group-item border-transparent bg-transparent"
                style={{ color: "#1CC7C1" }}
              >
                <h6>Our Address</h6>
              </li>
              <li className="list-group-item bg-transparent border-transparent pt-0 ">
                New York
              </li>
              <li
                style={{ color: "#1CC7C1" }}
                className="list-group-item bg-transparent border-transparent "
              >
                <FontAwesomeIcon className="mx-1" icon={faFacebook} size="2x" />
                <FontAwesomeIcon
                  className="mx-1"
                  icon={faGooglePlusG}
                  size="2x"
                />
                <FontAwesomeIcon className="mx-1" icon={faTwitter} size="2x" />
              </li>
              <li className="list-group-item bg-transparent border-transparent ">
                <p className="">Call Now</p>
                <h6
                  className="d-inline-block p-3"
                  style={{ backgroundColor: "#1CC7C1" }}
                >
                  +8017237283
                </h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
