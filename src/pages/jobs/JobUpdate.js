import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../axios_instance";

const JobUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(`api/jobs/${id}/`)
      .then((res) => {
        setJob(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!job) return <h3>Job Not Found</h3>;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);

    // const job = {
    //   title,
    //   category,
    //   job_level,
    //   no_of_vacancy,
    //   employment_type,
    //   job_location,
    //   salary_range,
    //   deadline,
    //   education_level,
    //   experience_required,
    //   skill_required,
    //   tasks,
    //   perks_and_benefits,
    // };
    axiosInstance
      .put(`api/jobs/${id}/update/`, formData)
      .then((res) => {
        console.log("Job updated:", res.data);
        navigate(`/jobs/${id}`);
      })
      .catch((error) => console.log("Form submit error:", error));
  };

  return (
    <div className="contianer m-5 p-5">
      <h2>Update job</h2>
      <form className="p-5 border border-5" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            autoFocus
            name="title"
            defaultValue={job.title}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            className="form-control"
            name="category"
            defaultValue={job.category}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="job_level">Job Level</label>
          <input
            type="text"
            className="form-control"
            name="job_level"
            defaultValue={job.job_level}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="no_of_vacancy">No of Vacancy</label>
          <input
            type="number"
            className="form-control"
            name="no_of_vacancy"
            defaultValue={job.no_of_vacancy}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="employment_type">Employment Type</label>
          <input
            type="text"
            className="form-control"
            name="employment_type"
            defaultValue={job.employment_type}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="job_location">Job Location</label>
          <input
            type="text"
            className="form-control"
            name="job_location"
            defaultValue={job.job_location}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="salary_range">Salary Range</label>
          <input
            type="text"
            className="form-control"
            name="salary_range"
            defaultValue={job.salary_range}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="deadline">Deadline</label>
          <input
            type="date"
            className="form-control"
            name="deadline"
            defaultValue={job.deadline}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="education_level">Education Level</label>
          <input
            type="text"
            className="form-control"
            name="education_level"
            defaultValue={job.education_level}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="experience_required">Experience Required</label>
          <input
            type="number"
            className="form-control"
            name="experience_required"
            defaultValue={job.experience_required}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="skill_required">Skill Required</label>
          <textarea
            className="form-control"
            name="skill_required"
            defaultValue={job.skill_required}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="tasks">Tasks</label>
          <textarea
            className="form-control"
            name="tasks"
            defaultValue={job.tasks}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="perks_and_benefits">Perks and Benefits</label>
          <textarea
            className="form-control"
            name="perks_and_benefits"
            defaultValue={job.perks_and_benefits}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Job
        </button>
      </form>
    </div>
  );
};

export default JobUpdate;
