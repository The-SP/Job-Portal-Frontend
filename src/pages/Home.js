import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../context/AuthContext";

const Home = () => {
    const { user } = useContext(AuthContext);

  return (
    <div className="container">
      <div className="jumbotron mt-5">
        {user && <h1 className="display-4">Welcome {user.name}</h1>}

        {!user && (
          <Link className="btn btn-primary btn-lg" to="/login" role="button">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
