import { useEffect, useState } from "react";
import './jobapplication.css'
import axiosInstance from "../../axios_instance";
import { urls } from "../../config";
import ApplicationDelete from "./ApplicationDelete";
import trash from './trash-2.svg'

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
    <div className="whole-table">
    <div className="main-table container-fluid py-5 px-5">
      <div className="table-div">
      <div className="table-header">
      <h2>Your Job Applications</h2>
      </div>
      <div className="table__body">
      <table>
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
                  <a href={`/jobs/${application.job_id}`}>
                    {application.job_title}
                  </a>
                </td>
                <td>{application.company}</td>
                <td>{application.created_at.substring(0, 10)}</td>
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
                    <img src={trash} alt="" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
      </div>
      
    </div>
    {/* This creates the modal when delete button is clicked */}
    {<ApplicationDelete applicationID={activeID} />}
    </div>
  );
};

export default SeekerApplicationsList;
