import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { urls } from "../../config";
import axiosInstance from "../../axios_instance";
import { MyTextInput, MySelect } from "../../components/Inputs";

const JobCreate = () => {
  const navigate = useNavigate();

  const JOB_LEVEL_CHOICES = [
    { value: "entry", label: "Entry" },
    { value: "intern", label: "Intern" },
    { value: "mid", label: "Mid" },
    { value: "senior", label: "Senior" },
  ];

  const EMPLOYMENT_TYPE_CHOICES = [
    { value: "full-time", label: "Full-time" },
    { value: "part-time", label: "Part-time" },
    { value: "contract", label: "Contract" },
    { value: "intern", label: "Intern" },
    { value: "freelance", label: "Freelance" },
  ];

  const JOB_LOCATION_CHOICES = [
    { value: "remote", label: "Remote" },
    { value: "work-from-home", label: "Work-from-home" },
    { value: "office", label: "Office" },
  ];
  const handleSubmit = (job) => {
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

      {/* Pass initial values, validation and submit funciton */}
      <Formik
        initialValues={{
          title: "",
          category: "",
          job_level: "",
          no_of_vacancy: 1,
          salary_range: "",
          deadline: "",
          employment_type: "",
          job_location: "",
          education_level: "",
          experience_required: 0,
          skill_required: "",
          tasks: "",
          perks_and_benefits: "",
        }}
        validationSchema={Yup.object({
          // Basic Information
          title: Yup.string().required("Required"),
          category: Yup.string().required("Required"),
          no_of_vacancy: Yup.number().min(1).required("Required"),
          salary_range: Yup.string().required("Required"),
          deadline: Yup.date().required("Required"),
          // Choice fields
          job_level: Yup.string().required("Job level is required"),
          // .oneOf(JOB_LEVEL_CHOICES.map((level) => level[0]), 'Invalid Job Level'),
          employment_type: Yup.string().required("Employment type is required"),
          // .oneOf(EMPLOYMENT_TYPE_CHOICES.map((type) => type[0]), 'Invalid Employment Type'),
          job_location: Yup.string().required("Job location is required"),
          // .oneOf(JOB_LOCATION_CHOICES.map((location) => location[0]), 'Invalid Job Location'),
          //   Specification
          education_level: Yup.string(),
          experience_required: Yup.number().min(0),
          skill_required: Yup.string(),
          //   Additional Description
          tasks: Yup.string(),
          perks_and_benefits: Yup.string(),
        })}
        onSubmit={(job) => {
          handleSubmit(job);
        }}
      >
        <Form className="p-4 border border-2">
          <MyTextInput
            label="Title"
            name="title"
            type="text"
            placeholder="Enter job title"
            required
          />
          <MyTextInput
            label="Category"
            name="category"
            type="text"
            placeholder="Enter the job category"
            required
          />
          <MySelect
            label="Job Level"
            name="job_level"
            options={JOB_LEVEL_CHOICES}
            required
          />

          <MySelect
            label="Employment Type"
            name="employment_type"
            options={EMPLOYMENT_TYPE_CHOICES}
            required
          />

          <MySelect
            label="Job Location"
            name="job_location"
            options={JOB_LOCATION_CHOICES}
            required
          />

          <MyTextInput
            label="no_of_vacancy"
            name="no_of_vacancy"
            type="number"
            placeholder="Enter number of vacant posts"
            required
          />
          <MyTextInput
            label="Salary Range"
            name="salary_range"
            type="text"
            placeholder="Enter salary range (eg: Rs.50000-Rs.75000)"
            required
          />
          <MyTextInput
            label="Deadline"
            name="deadline"
            type="date"
            placeholder="Doe"
            required
          />

          <MyTextInput
            label="Education Level"
            name="education_level"
            type="text"
            placeholder="Enter required education level (e.g. Bachelor's Degree, Master's Degree"
          />
          <MyTextInput
            label="Experience Required"
            name="experience_required"
            type="number"
            placeholder="Enter required experience in years(e.g. 3, 5)"
          />
          <MyTextInput
            label="Skills Required"
            name="skill_required"
            type="text"
            placeholder="Enter the skills required for the job, separated by commas"
          />
          <MyTextInput
            label="Tasks"
            name="tasks"
            type="text"
            placeholder="Enter the job tasks, separated by commas"
          />
          <MyTextInput
            label="Perks and Benefits"
            name="perks_and_benefits"
            type="text"
            placeholder="Enter the perks and benefits offered with the job, separated by commas"
          />

          <button type="submit" className="btn btn-success">
            Post
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default JobCreate;
