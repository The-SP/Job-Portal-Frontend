import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

import AuthContext from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const seekerLinks = () => (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/profile/seeker">
          Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/jobs/applications">
          History
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/logout">
          Logout
        </Link>
      </li>
    </ul>
  );

  const seekerMiddleLinks = () => (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/jobs/recommendations">
          Recommendations
        </Link>
      </li>
    </>
  );

  const employerLinks = () => (
    <ul className="navbar-nav">
      <li className="nav-item dropdown">
        <span
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Hire
        </span>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to="/jobs/create">
              Create Job
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/jobs/employer">
              Your Jobs
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/profile/employer">
          Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/logout">
          Logout
        </Link>
      </li>
    </ul>
  );

  const authLinks = () => (
    <>{user.is_employer ? employerLinks() : seekerLinks()}</>
  );

  const guestLinks = () => (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
      <li className="nav-item dropdown">
        <span
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sign Up
        </span>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to="/signup">
              Seeker
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/signup-employer">
              Employer
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-body-tertiary navbar-fixed fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt="Navbar Logo"
            className="mb-1"
            style={{ width: "60px", height: "30px" }}
          />
          <span className="navbar-title h4">
            Hire <span className="text-danger"> Nepal</span>
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/jobs">
                Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jobs/explore">
                Explore
              </Link>
            </li>
            {user && !user.is_employer && seekerMiddleLinks()}
            <li className="nav-item">
              <Link className="nav-link" to="/resume">
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cover-letter">
                Cover Letter
              </Link>
            </li>{" "}
          </ul>
          {user ? authLinks() : guestLinks()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
