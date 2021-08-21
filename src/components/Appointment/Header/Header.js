import React from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import "./Header.css";
import HeaderBody from "./HeaderBody/HeaderBody";

const Header = ({ dateValue, setDateValue }) => {
  return (
    <div className="headerAppointment">
      <NavBar></NavBar>
      <HeaderBody
        dateValue={dateValue}
        setDateValue={setDateValue}
      ></HeaderBody>
    </div>
  );
};

export default Header;
