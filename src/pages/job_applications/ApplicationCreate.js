import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../axios_instance";
import { urls } from "../../config";

const ApplicationCreate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      job: +id,
      name,
      email,
      phone_number: phoneNumber,
      cover_letter: coverLetter,
    };
    axiosInstance
      .post(urls.JOB_APPLICATION_CREATE, formData)
      .then((res) => {
        console.log("Application sent:", res.data);
        navigate(-1);
      })
      .catch((error) => console.log("Form submit error:", error));
  };

  return (
    <>
      <div className="container">
        <div className="row h-100">
          <div className="col-sm-12 my-auto">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                    required
                      type="text"
                      className="form-control"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                    />
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                    required
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                    />
                    <label htmlFor="email">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="phoneNumber"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Enter your phone number"
                    />
                    <label htmlFor="phoneNumber">Phone Number</label>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      id="coverLetter"
                      value={coverLetter}
                      onChange={(e) => setCoverLetter(e.target.value)}
                      placeholder="Enter your cover letter"
                      style={{ height: "150px" }}
                    ></textarea>
                    <label htmlFor="coverLetter">Cover Letter</label>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="resume">Resume</label>

                    <input
                      type="file"
                      className="form-control"
                      id="resume"
                      onChange={(e) => setResume(e.target.files[0])}
                    />
                  </div>
                  <button type="submit" className="btn btn-lg btn-primary">
                    Apply
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationCreate;
