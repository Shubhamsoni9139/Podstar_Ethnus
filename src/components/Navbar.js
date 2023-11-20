import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <Link to="/" className="navbar-brand text-light">
        PODSTAR
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/" className="nav-item nav-link active text-light">
            Dashboard
          </Link>
          <Link to="/all" className="nav-item nav-link text-light">
            All
          </Link>
          <Link to="/upload" className="nav-item nav-link text-light">
            Upload
          </Link>
          <Link to="/login" className="nav-item nav-link text-light">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
