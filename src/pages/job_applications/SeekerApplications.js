import { useEffect, useState } from "react";
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
            {/* <th>Updated At</th> */}
            <th>Delete</th>
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
                <td>{application.cover_letter.substring(0, 15)}...</td>
                <td>{application.created_at.substring(0, 10)}</td>
                {/* <td>{application.updated_at.substring(0,10)}</td> */}
                <td>
                  {/* Button trigger modal  */}
                  <button
                    type="button"
                    class="btn btn-outline-danger"
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
