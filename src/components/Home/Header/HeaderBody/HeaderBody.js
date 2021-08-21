import React from "react";
import { Link } from "react-router-dom";
import chair from "../../../../images/headerDiv.png";
const HeaderBody = () => {
  return (
    <div style={{ height: "70vh" }} className="row  d-flex align-items-center ">
      <div className="col-md-3 offset-md-1 ">
        <h1>Your New Smile Starts Here</h1>
        <p className="text-muted my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          nihil, sapiente, eius aut id exercitationem perspiciatis est et quasi
          repellat assumenda laborum autem illo ratione.
        </p>
        <Link to="/appointment">
          <button style={{ backgroundColor: "#1CC7C1" }} className="btn">
            GET APPOINTMENT
          </button>
        </Link>
      </div>
      <div className="col-md-5 offset-md-2">
        <img src={chair} className="img-fluid " alt="chair" />
      </div>
    </div>
  );
};

export default HeaderBody;
