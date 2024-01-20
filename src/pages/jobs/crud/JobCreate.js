import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { urls } from "../../../utils/config";
import axiosInstance from "../../../utils/axios_instance";
import { MyTextInput, MySelect, MyTextArea } from "../../../components/Inputs";
import {
  JOB_LEVEL_CHOICES,
  EMPLOYMENT_TYPE_CHOICES,
  JOB_NATURE_CHOICES,
} from "./Choices";

const JobCreate = () => {
  const navigate = useNavigate();

  const handleSubmit = (job) => {
    axiosInstance
      .post(urls.JOB_CREATE, job)
      .then((res) => {
        console.log("Job posted:", res.data);
        navigate("/jobs/employer");
      })
      .catch((error) => console.log("Form submit error:", error));
  };

  return (
    <div className="contianer mx-5 p-5">
      <h2 className="page-title text-center">Create new job</h2>

      {/* Pass initial values, validation and submit funciton */}
      <Formik
        initialValues={{
          title: "",
          location: "",
          no_of_vacancy: 1,
          salary_range: "",
          deadline: "",
          job_level: "",
          employment_type: "",
          job_nature: "",
          education_level: "",
          experience_required: 0,
          skill_required: "",
          description: "",
        }}
        validationSchema={Yup.object({
          // Basic Information
          title: Yup.string().required("Required"),
          location: Yup.string().required("Required"),
          no_of_vacancy: Yup.number().min(1).required("Required"),
          salary_range: Yup.string().required("Required"),
          deadline: Yup.date().required("Required"),
          // Choice fields
          job_level: Yup.string().required("Job level is required"),
          // .oneOf(JOB_LEVEL_CHOICES.map((level) => level[0]), 'Invalid Job Level'),
          employment_type: Yup.string().required("Employment type is required"),
          job_nature: Yup.string().required("Job location is required"),
          //   Specification
          education_level: Yup.string(),
          experience_required: Yup.number().min(0),
          skill_required: Yup.string(),
          //   Additional Description
          description: Yup.string(),
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
            label="Location"
            name="location"
            type="text"
            placeholder="Enter the job location"
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
            label="Job Nature"
            name="job_nature"
            options={JOB_NATURE_CHOICES}
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
          <MyTextInput label="Deadline" name="deadline" type="date" required />

          <MyTextInput
            label="Education Level"
            name="education_level"
            type="text"
            placeholder="Enter required education level (e.g. Bachelor's Degree, Master's Degree)"
          />
          <MyTextInput
            label="Experience Required"
            name="experience_required"
            type="number"
            placeholder="Enter required experience in years (e.g. 3, 5)"
          />
          <MyTextInput
            label="Skills Required"
            name="skill_required"
            type="text"
            placeholder="Enter the skills required for the job, separated by commas"
          />
          <MyTextArea
            label="Job Description"
            name="description"
            type="text"
            placeholder="Enter the job description in detail"
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
