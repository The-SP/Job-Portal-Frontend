import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Menu } from "react-feather";

import AuthContext from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const seekerLinks = () => (
    <ul>
      <li>
        <Link to="/profile/seeker">Profile</Link>
      </li>
      <li>
        <Link to="/jobs/applications">History</Link>
      </li>
      <li>
        <Link to="/logout">Logout</Link>
      </li>
    </ul>
  );
  const employerLinks = () => (
    <ul>
      <li>
        <Link to="/jobs/create">CreateJob</Link>
      </li>
      <li>
        <Link to="/jobs/employer">YourJobs</Link>
      </li>
      <li>
        <Link to="/profile/employer">Profile</Link>
      </li>
      <li>
        <Link to="/logout">Logout</Link>
      </li>
    </ul>
  );

  const authLinks = () => (
    <>{user.is_employer ? employerLinks() : seekerLinks()}</>
  );
  const guestLinks = () => (
    <ul>
      <li>
        <Link to="/signup">Seeker</Link>
      </li>
      <li>
        <Link to="/signup-employer">Employer</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <div className="heroNav">
      <nav className="mainNav">
        <div className="logoNav">
          <Link to="/">
            Hire <span>Nepal</span>
          </Link>
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>

            <li>
              <Link to="/jobs/explore">Explore</Link>
            </li>
          </ul>
          {user ? authLinks() : guestLinks()}
        </div>
        <div className="hamburger-menu">
          <a href="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <Menu />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
