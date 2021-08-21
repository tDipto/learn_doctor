import React from "react";
import comma from "../../../images/comma.png";
import p1 from "../../../images/p1.png";
import p2 from "../../../images/p2.png";
import BlogItem from "./BlogItem.js/BlogItem";

const blogs = [
  {
    person: "Rashid Kabir",
    date: "22 Aug 2018",
    pic: "",
    bg: comma,
    problem: "Check at least a doctor in a year for your teeth",
    info: "",
  },
  {
    person: "Winson Douson",
    date: "24 Sep 2019",
    pic: p1,
    bg: "",
    problem: "2 times of brush in a day can keep you healthy",
    info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quod nisi rem modi deserunt officia natus nostrum quia? Illum, ipsam eaque labore ex et architecto!",
  },
  {
    person: "Marry Herry",
    date: "12 Aug 2016",
    pic: p2,
    bg: "",
    problem: "The tooth cancer is taking a challege",
    info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quod nisi rem modi deserunt officia natus nostrum quia? Illum, ipsam eaque labore ex et architecto!",
  },
];
const Blog = () => {
  return (
    <div className="mt-5 py-5" id="blogs">
      <div className="container  ">
        <div className="text-center">
          <h3 style={{ color: "#1CC7C1" }}>OUR BLOG</h3>
          <h1>From Our Blog News</h1>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <div className="row">
            {blogs.map((pd) => (
              <BlogItem blogs={pd}></BlogItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
