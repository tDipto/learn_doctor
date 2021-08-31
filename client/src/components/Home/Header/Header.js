import React from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import BusinessInfo from "./BusinessInfo/BusinessInfo";
import "./Header.css";
import HeaderBody from "./HeaderBody/HeaderBody";
const Header = () => {
  return (
    <div className="header">
      <NavBar></NavBar>
      <HeaderBody></HeaderBody>
      <BusinessInfo></BusinessInfo>
    </div>
  );
};

export default Header;
