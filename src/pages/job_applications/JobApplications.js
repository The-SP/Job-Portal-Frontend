import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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

  if (!applications) return <>No applications!</>;

  return (
    <div className="container-fluid py-5 px-5">
      <div className="display-6 mb-4">
        Job Applications for {applications[0].job_title}
      </div>
      <table class="table table-xs table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Applicant</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Message</th>
            <th>Applied Date</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {" "}
                  <Link to={`/profile/seeker/${application.seeker_id}`}>
                    {application.name}
                  </Link>
                </td>{" "}
                <td>{application.email}</td>
                <td>{application.phone_number}</td>
                <td>
                  {application.message && application.message.substring(0, 15)}
                  ...
                </td>
                <td>{application.created_at.substring(0, 10)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default JobApplicationsList;
