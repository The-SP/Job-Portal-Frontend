import { Link } from "react-router-dom";
import "./jobs.css";

const JobItem = ({ job }) => {
  return (
    <div className="job-item p-4 mb-4">
      <div className="row g-4">
        <div className="col-sm-12 col-md-8 d-flex align-items-center">
          {/* <img
            className="flex-shrink-0 img-fluid border rounded"
            src={job.logo_url}
            alt="company"
            style={{ width: "100px", height: "100px" }}
          /> */}
          <div className="text-start ps-4">
            <h5 className="mb-3">{job.title}</h5>
            <div className="mb-2">
              <Link
                to={`/profile/employer/${job.posted_by}`}
                className="btn btn-sm btn-secondary"
              >
                {job.company}
              </Link>
            </div>
            <span className="text-truncate me-3">
              <i className="fa fa-solid fa-user-tie text-success me-2"></i>
              {job.job_level}
            </span>
            <span className="text-truncate me-3">
              <i className="fa fa-map-marker-alt text-success me-2"></i>
              {job.location}
            </span>
            <span className="text-truncate me-0">
              <i className="far fa-money-bill-alt text-success me-2"></i>
              {job.salary_range}
            </span>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
          <div className="d-flex mb-3">
            <Link to={`/jobs/${job.id}`} className="btn btn-outline-success">
              View Job
            </Link>
          </div>
          <small className="text-truncate">
            <i className="far fa-calendar-alt text-success me-2"></i>Deadline:{" "}
            {job.deadline_remaining}
          </small>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
