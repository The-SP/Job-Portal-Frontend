import { useEffect, useState } from "react";
import axiosInstance from "../../axios_instance";
import { urls } from "../../config";

const SeekerApplicationsList = () => {
  const [applications, setApplications] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(urls.USER_APPLICATIONS)
      .then((res) => {
        console.table("Job applications:", res.data);
        setApplications(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!applications) return <>No applications!</>;

  return (
    <div className="container-fluid py-5 px-5">
      <h2>Your Job Applications</h2>
      <table className="table table-xs table-striped table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Job</th>
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
                <td>{application.job}</td>
                <td>{application.email}</td>
                <td>{application.phone_number}</td>
                <td>{application.cover_letter.substring(0,15)}...</td>
                <td>{application.created_at.substring(0,10)}</td>
                <td>{application.updated_at.substring(0,10)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SeekerApplicationsList;
