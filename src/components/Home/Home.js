import React from "react";
import Footer from "../Shared/Footer/Footer.js";
import Blog from "./Blog/Blog";
import Doctors from "./Doctors/Doctors";
import GetInfo from "./GetInfo/GetInfo";
import Header from "./Header/Header";
import Review from "./Review/Review";
import Services from "./Services/Services";
import Services2 from "./Services2/Services2";
import Services3 from "./Services3/Services3";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <Services2></Services2>
      <Services3></Services3>
      <Review></Review>
      <Blog></Blog>
      <Doctors></Doctors>
      <GetInfo></GetInfo>
      <Footer></Footer>
    </div>
  );
};

export default Home;
