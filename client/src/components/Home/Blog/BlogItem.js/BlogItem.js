import React from "react";

const BlogItem = ({ blogs }) => {
  return (
    <div className="col">
      <div
        class="card border-white mb-3 contaner-shadow bg-card text-dark"
        style={{
          maxWidth: "20rem",
          fontSize: "1rem",
          height: "50vh",
          backgroundImage: `url(${blogs.bg})`,
        }}
      >
        <div class="card-header bg-white border-white">
          <div className="d-flex justify-content-left ">
            <div className="img">
              <img src={blogs.pic} alt="" />
            </div>
            <div className="info ml-3">
              <p style={{ color: "#1CC7C1" }}>{blogs.person}</p>
              <p className="text-muted">{blogs.date}</p>
            </div>
          </div>
        </div>
        <div class="card-body ">
          <h5 class="card-title">{blogs.problem}</h5>
          <p class="card-text">{blogs.info}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
