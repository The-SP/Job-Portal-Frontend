import { useState } from "react";
import { useNavigate} from "react-router-dom";
import axiosInstance from "../../axios_instance";
import { auth_urls } from "../../config";
import signupSvg from './signup.svg'
import './user.css'

const EmployerSignup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      setError("Please fill out all fields.");
      return;
    }
    axiosInstance
      .post(auth_urls.SIGNUP, {
        email: email,
        password: password,
        re_password: password,
        name: name,
        is_employer: true,
      })
      .then((res) => {
        navigate("/login");
        console.log("Employer account created:", name, email);
        setError("");
      })
      .catch((err) => {
        // console.log(err.request.responseText);
        // console.log(err.response.data.email, err.response.data.password);

        let newErrorMessage = "Email or Password is invalid.";
        if (err.response.data.email)
          newErrorMessage = err.response.data.email[0];
        else if (err.response.data.password)
          newErrorMessage = err.response.data.password[0];
        setError(newErrorMessage);
      });
    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <section>
      <div className="main-container1 container-fluid">
        <div className="row d-flex justify-content-center align-items-center py-2">
          <div className="panel col-6 px-0">
            <div className="description">
              <div className="mb-4">
                <p>
                  Already have an account?{" "}
                </p>
                <button className="btn btn-outline-dark btn-lg px-5 text-white fw-bold"
                 onClick={()=> {navigate('/login')}}>
                    Login
                </button>
              </div>
              <div>
                <img src={signupSvg} alt="Not Found" />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 px-0 mx-auto">
            <div
              className="signin bg-light text-black"
              style={{ borderRadius: 0.5 + "rem" }}
            >
              <div className="card-body p-4 text-center">
                <div className="pb-3">
                  <h2 className="fw-bold mb-2 text-uppercase">
                    Employer Sign Up
                  </h2>
                  <p className="text-black-50 mb-5">
                    Please enter your login and password!
                  </p>

                  <div className="form-outline form-white mb-4">
                    <input
                      autoFocus
                      type="email"
                      id="typeEmailX"
                      className="form-control form-control-lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="form-label" htmlFor="typeEmailX">
                      Email
                    </label>
                  </div>

                  <div className="form-outline form-black mb-3">
                    <input
                      type="text"
                      id="typeUsernameX"
                      className="form-control form-control-lg"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label className="form-label" htmlFor="typeUsernameX">
                      Company Name
                    </label>
                  </div>

                  <div className="form-outline form-black mb-3">
                    <input
                      type="password"
                      id="typePasswordX"
                      className="form-control form-control-lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="form-label" htmlFor="typePasswordX">
                      Password
                    </label>
                  </div>

                  <div className="error text-danger fw-bold mb-3">{error}</div>

                  <button
                    className="btn btn-outline-dark btn-lg px-5"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerSignup;
