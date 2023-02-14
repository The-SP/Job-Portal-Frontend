import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../axios_instance";
import { urls } from "../../config";
import ApplicationDelete from "./ApplicationDelete";

const SeekerApplicationsList = () => {
  const [applications, setApplications] = useState(null);
  const [activeID, setActiveID] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(urls.USER_APPLICATIONS)
      .then((res) => {
        console.table("Job applications:", res.data);
        setApplications(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!applications) return <h3 className="text-center">No applications!</h3>;

  return (
    <div className="container-fluid py-5 px-5">
      <h2>Your Job Applications</h2>
      <table className="table table-xs table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Job</th>
            <th>Company</th>
            <th>Applied Date</th>
            <th>Resume</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {" "}
                  <Link to={`/jobs/${application.job_id}`}>
                    {application.job_title}
                  </Link>
                </td>
                <td>{application.company}</td>
                <td>{application.created_at}</td>
                <td>
                  {application.resume ? (
                    <a
                      href={application.resume}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-success"
                    >
                      Resume
                    </a>
                  ) : (
                    "None"
                  )}
                </td>
                <td>
                  {/* Button trigger modal  */}
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#delApplicationModal"
                    onClick={() => setActiveID(application.id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* This creates the modal when delete button is clicked */}
      {<ApplicationDelete applicationID={activeID} />}
    </div>
  );
};

export default SeekerApplicationsList;
