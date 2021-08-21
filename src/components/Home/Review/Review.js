import React from "react";
import comma from "../../../images/comma.png";
import p1 from "../../../images/p1.png";
import p2 from "../../../images/p2.png";
import p3 from "../../../images/p3.png";
import ReviewShow from "./ReviewShow/ReviewShow";

const reviews = [
  {
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi neque, possimus modi rerum placeat culpa incidunt quam sed doloremque aut expedita fuga qui quidem velit autem, eos optio aspernatur!",

    person: "Winson Herry",
    place: "Califonia",
    pic: p1,
  },
  {
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi neque, possimus modi rerum placeat culpa incidunt quam sed doloremque aut expedita fuga qui quidem velit autem, eos optio aspernatur!",

    person: "Winson Douson",
    place: "Califonia",
    pic: p2,
  },
  {
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi neque, possimus modi rerum placeat culpa incidunt quam sed doloremque aut expedita fuga qui quidem velit autem, eos optio aspernatur!",

    person: "Marry Herry",
    place: "Califonia",
    pic: p3,
  },
];

const Review = () => {
  return (
    <div className="mt-5 py-5">
      <div className="container  ">
        <div className="d-flex justify-content-between ">
          <div className="d-flex align-self-center">
            <div>
              <h3 style={{ color: "#1CC7C1" }}>TESTIMONAL</h3>
              <h1>What's Our Patients Says</h1>
            </div>
          </div>

          <div className="img">
            <img src={comma} alt="" />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="row">
            {reviews.map((pd) => (
              <ReviewShow reviews={pd}></ReviewShow>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
