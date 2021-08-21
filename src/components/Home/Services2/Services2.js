import React from "react";
import bg from "../../../images/Mask Group 3.png";

const Services2 = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4 offset-md-2 d-flex justify-content-center ">
          <img
            src={bg}
            alt=""
            className="img-fluid "
            style={{ width: "25vw" }}
          />
        </div>
        <div className="col-md-3 align-self-center">
          <h3 className="py-3">Exceptional Dental Care, on Your Terms</h3>
          <p className="py-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            omnis, perferendis nisi est amet architecto pariatur nesciunt hic
            cum quisquam explicabo rem voluptatibus quibusdam ea Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Beatae, asperiores
            unde? Itaque sint aspernatur rerum voluptatem quis, nihil, sunt
            sequi corporis accusantium eius, adipisci dolorum.
          </p>
          <button className="btn" style={{ backgroundColor: "#1CC7C1" }}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services2;
