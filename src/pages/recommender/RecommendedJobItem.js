const RecommendedJobItem = ({ job }) => {
  return (
    <div className="job-item p-4 mb-4">
      <div className="row g-4">
        <div className="col-sm-12 col-md-10 ps-4">
          <div className="text-start">
            <h5 className="mb-3">{job.jobtitle}</h5>
            <div className="mb-2">
              <span className="btn btn-sm btn-secondary">{job.company}</span>

            <span className="text-truncate mx-3">
              <i className="fa fa-map-marker-alt text-success me-2"></i>
              {job.joblocation_address}
            </span>
            </div>

          </div>

          <div className="my-3">
            <span className="fw-bold">Skills: </span>
            <span className="lead">{job.skills}</span>
          </div>
          <div className="mb-2">
            <p className="small text-muted">{job.jobdescription}</p>
          </div>
        </div>

        <div className="col-sm-12 col-md-2">
            <span className="btn btn-danger">{job.similarity_scores} %</span>
          </div>
        </div>
      </div>
  );
};

export default RecommendedJobItem;
