import React from "react";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNav">
        <ul class="navbar-nav ml-auto mr-5  mt-3">
          <li class="nav-item active mr-5 text-warning">
            <a class="nav-link " href="/home">
              Home
            </a>
          </li>
          <li class="nav-item active mr-5">
            <a class="nav-link" href="/dashboard">
              Dashboard
            </a>
          </li>
          <li class="nav-item active mr-5">
            <a class="nav-link" href="/appointment#showServices">
              Dental Services
            </a>
          </li>
          <li class="nav-item active mr-5">
            <a class="nav-link text-white" href="#">
              Reviews
            </a>
          </li>
          <li class="nav-item active mr-5">
            <a class="nav-link text-white" href="/home#blogs">
              Blog
            </a>
          </li>
          <li class="nav-item active mr-5">
            <a class="nav-link text-white" href="#">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
