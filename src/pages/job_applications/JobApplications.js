import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <h2>Job Applications</h2>
      <table class="table table-xs table-striped table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>User</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Cover Letter</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, index) => {
            return (
              <tr key={index}>
                <td>{application.id}</td>
                <td>{application.user}</td>
                <td>{application.email}</td>
                <td>{application.phone_number}</td>
                <td>{application.cover_letter.substring(0, 15)}...</td>
                <td>{application.created_at.substring(0, 10)}</td>
                <td>{application.updated_at.substring(0, 10)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default JobApplicationsList;
