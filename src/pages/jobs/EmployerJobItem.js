import { Link } from "react-router-dom";

const EmployerJobItem = ({ job }) => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{job.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          <span className="text-danger">{job.category}</span>
        </h6>
        <p className="card-text">Job Level: {job.job_level}</p>
        <p className="card-text">Salary Range: {job.salary_range}</p>
        <p className="card-text">Posted by: {job.posted_by}</p>
        <p className="card-text">Deadline: {job.deadline}</p>
        <Link to={`/jobs/${job.id}`} className="btn btn-outline-primary">
          View Job
        </Link>{" "}
        <Link to={`/jobs/${job.id}/update`} className="btn btn-outline-info">
          Update Job
        </Link>{" "}
        <Link to={`/jobs/${job.id}/delete`} className="btn btn-outline-danger">
          Delete Job
        </Link>
      </div>
    </div>
  );
};

export default EmployerJobItem;
