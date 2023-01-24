import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios_instance";
import { urls } from "../../config";

const JobCreate = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [job_level, setJobLevel] = useState("");
  const [no_of_vacancy, setNoOfVacancy] = useState("");
  const [employment_type, setEmploymentType] = useState("");
  const [job_location, setJobLocation] = useState("");
  const [salary_range, setSalaryRange] = useState("");
  const [deadline, setDeadline] = useState("");
  const [education_level, setEducationLevel] = useState("");
  const [experience_required, setExperienceRequired] = useState("");
  const [skill_required, setSkillRequired] = useState("");
  const [tasks, setTasks] = useState("");
  const [perks_and_benefits, setPerksAndBenefits] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const job = {
      title,
      category,
      job_level,
      no_of_vacancy,
      employment_type,
      job_location,
      salary_range,
      deadline,
      education_level,
      experience_required,
      skill_required,
      tasks,
      perks_and_benefits,
    };
    axiosInstance
      .post(urls.JOB_CREATE, job)
      .then((res) => {
        console.log("Job posted:", res.data);
        navigate("/jobs");
      })
      .catch((error) => console.log("Form submit error:", error));
  };

  return (
    <div className="contianer m-5 p-5">
      <h2>Create new job</h2>
      <form className="p-5 border border-5" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            autoFocus
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="job_level">Job Level</label>
          <input
            type="text"
            className="form-control"
            id="job_level"
            value={job_level}
            onChange={(e) => setJobLevel(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="no_of_vacancy">No of Vacancy</label>
          <input
            type="number"
            className="form-control"
            id="no_of_vacancy"
            value={no_of_vacancy}
            onChange={(e) => setNoOfVacancy(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="employment_type">Employment Type</label>
          <input
            type="text"
            className="form-control"
            id="employment_type"
            value={employment_type}
            onChange={(e) => setEmploymentType(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="job_location">Job Location</label>
          <input
            type="text"
            className="form-control"
            id="job_location"
            value={job_location}
            onChange={(e) => setJobLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="salary_range">Salary Range</label>
          <input
            type="text"
            className="form-control"
            id="salary_range"
            value={salary_range}
            onChange={(e) => setSalaryRange(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="deadline">Deadline</label>
          <input
            type="date"
            className="form-control"
            id="deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="education_level">Education Level</label>
          <input
            type="text"
            className="form-control"
            id="education_level"
            value={education_level}
            onChange={(e) => setEducationLevel(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="experience_required">Experience Required</label>
          <input
            type="number"
            className="form-control"
            id="experience_required"
            value={experience_required}
            onChange={(e) => setExperienceRequired(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="skill_required">Skill Required</label>
          <textarea
            className="form-control"
            id="skill_required"
            value={skill_required}
            onChange={(e) => setSkillRequired(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="tasks">Tasks</label>
          <textarea
            className="form-control"
            id="tasks"
            value={tasks}
            onChange={(e) => setTasks(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="perks_and_benefits">Perks and Benefits</label>
          <textarea
            className="form-control"
            id="perks_and_benefits"
            value={perks_and_benefits}
            onChange={(e) => setPerksAndBenefits(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobCreate;
