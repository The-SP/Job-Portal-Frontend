import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const authLinks = () => (
    <>
      <Link className="nav-link" to="/jobs/create">
        CreateJob
      </Link>
      <Link className="nav-link" to="/jobs/employer">
        YourJobs
      </Link>
      <Link className="nav-link" to="/profile/seeker">
        SeekerProfile
      </Link>
      <Link className="nav-link" to="/profile/employer">
        EmployerProfile
      </Link>
      <Link className="nav-link" to="/logout">
        Logout
      </Link>
    </>
  );
  const guestLinks = () => (
    <>
      <Link className="nav-link" to="/signup">
        Seeker
      </Link>
      <Link className="nav-link" to="/signup-employer">
        Employer
      </Link>
      <Link className="nav-link" to="/login">
        Login
      </Link>
    </>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Job Hunter
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/jobs">
              Jobs
            </Link>
            {isLoggedIn ? authLinks() : guestLinks()}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
