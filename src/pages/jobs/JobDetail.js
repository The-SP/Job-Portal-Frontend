import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import AuthContext from "../../context/AuthContext";

import axiosInstance from "../../axios_instance";
import { urls } from "../../config";

const JobDetail = () => {
  const { user } = useContext(AuthContext);
  const [job, setJob] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axiosInstance
      .get(urls.JOB_DETAIL.replace(":id", id))
      .then((res) => {
        // console.table("Res:", res.data);
        setJob(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!job) return <></>;

  return (
    <div className="container-fluid py-5 px-5">
      <h2>Job Detail</h2>
      <div className="row">
        {/* Loop through the job response */}
        {Object.entries(job).map(([key, value]) => (
          <div key={key}>
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">{key}</h6>
              </div>
              <div className="col-sm-9 text-secondary">{value}</div>
            </div>{" "}
            <hr />
          </div>
        ))}
        {user && user.is_employer ? null : (
          <Link to={`/jobs/${id}/apply`} className="btn btn-outline-primary">
            Apply
          </Link>
        )}
      </div>
    </div>
  );
};

export default JobDetail;
