import React from "react";
import "../Review.css";

const ReviewShow = ({ reviews }) => {
  return (
    <div className="col ">
      <div
        class="card border-light mb-3 contaner-shadow"
        style={{ maxWidth: "18rem" }}
      >
        <div class="card-body ">
          <p class="card-text">{reviews.info}</p>
        </div>
        <div class="card-footer bg-white border-light ">
          <div className="d-flex justify-content-around">
            <div>
              <img src={reviews.pic} alt="" />
            </div>
            <div>
              <p style={{ color: "#1CC7C1" }}>{reviews.person}</p>
              <p>{reviews.place}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewShow;
