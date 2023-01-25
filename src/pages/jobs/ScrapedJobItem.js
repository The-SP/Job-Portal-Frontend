const ScrapedJobItem = ({ job }) => {
  return (
    <div className="card mb-2">
      <div className="row no-gutters">
        <div className="col-md-3">
            <div className="p-5">
          <img
            src={job.logo_url}
            className="card-img img-fluid"
            alt="company"
            style={{ width: "150px", height: "150px" }}
          />
          </div>
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">{job.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {job.tags.map((tag, index) => {
                return <span className="badge bg-secondary mr-2" key={index}>{tag}</span>;
              })}
            </h6>
            <p className="card-text">Company: {job.company}</p>
            <p className="card-text">Location: {job.location}</p>
            {job.salary === "nan" ? (
              <p className="card-text">Deadline: {job.deadline}</p>
            ) : (
              <p className="card-text">Salary: {job.salary}</p>
            )}
            <a
              href={job.url}
              className="btn btn-outline-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Job
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrapedJobItem;
