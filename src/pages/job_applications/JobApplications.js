import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import './jobapplication.css'

import axiosInstance from "../../axios_instance";
import { urls } from "../../config";

const JobApplicationsList = () => {
  const [applications, setApplications] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axiosInstance
      .get(urls.JOB_APPLICATIONS_LIST.replace(":job_id", id))
      .then((res) => {
        console.table("Job applications:", res.data);
        setApplications(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!applications || applications.length === 0)
    return <div className="display-6 text-center my-5">No applications!</div>;

  return (
    <div className="whole-table">
    <div className="main-table container-fluid py-5 px-5">
      <div className="table-div">
      <div className="display-6 mb-4 text-center page-title fs-1">
        Job Applications for {applications[0].job_title}
      </div>
      <div className="table__body">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Applicant</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Message</th>
            <th>Applied Date</th>
            <th>Resume</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {" "}
                  <a href={`/profile/seeker/${application.seeker_id}`}>
                    {application.name}
                  </a>
                </td>{" "}
                <td>{application.email}</td>
                <td>{application.phone_number}</td>
                <td>
                  {application.message && application.message.substring(0, 15)}
                  ...
                </td>
                <td>{application.created_at.substring(0, 10)}</td>
                <td>
                  {application.resume ? (
                    <a
                      href={application.resume}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-success text-light"
                    >
                      Resume
                    </a>
                  ) : (
                    "None"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
      </div>
    </div>
    </div>
  );
};

export default JobApplicationsList;
