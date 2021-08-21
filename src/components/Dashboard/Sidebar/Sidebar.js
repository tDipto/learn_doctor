import {
  faBookOpen,
  faBraille,
  faCalendar,
  faCog,
  faSignOutAlt,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  const handleSignOut = () => {
    sessionStorage.setItem("admin", "");
    window.location.href = "/";
  };

  return (
    <div>
      <div
        className="py-5 pl-2"
        style={{
          backgroundColor: "#1CC7C1",
          height: "100%",
          width: "17%",
          position: "fixed",
          /* top: "0",
          left: "0", */
        }}
      >
        <ul
          className="sidebar d-flex flex-column  bg-transparent border-none mt-5"
          style={{ listStyle: "none" }}
        >
          <Link style={{ textDecoration: "none" }} to="/dashboard">
            <li className="font-weight-bold mb-4 text-white">
              <FontAwesomeIcon icon={faBraille} size="lg" /> &nbsp; Dashboard
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/dashboard/appointment">
            <li className="font-weight-bold mb-4 text-white">
              <FontAwesomeIcon icon={faCalendar} size="lg" /> &nbsp;Appointment
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/dashboard/patients">
            <li className="font-weight-bold mb-4 text-white">
              <FontAwesomeIcon icon={faUserFriends} size="lg" /> &nbsp;Patients
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/dashboard/doctors">
            <li className="font-weight-bold mb-4 text-white">
              <FontAwesomeIcon icon={faUserFriends} size="lg" /> &nbsp;Doctors
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/dashboard/prescription">
            <li className="font-weight-bold mb-4 text-white">
              <FontAwesomeIcon icon={faBookOpen} size="lg" />{" "}
              &nbsp;Prescriptions
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/dashboard/settings">
            <li className="font-weight-bold mb-4 text-white">
              <FontAwesomeIcon icon={faCog} size="lg" /> &nbsp;Settings
            </li>
          </Link>
          <Link onClick={handleSignOut} style={{ textDecoration: "none" }}>
            <li className="font-weight-bold mb-4 text-white mt-auto">
              <FontAwesomeIcon icon={faSignOutAlt} size="lg" /> &nbsp;Logout
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
