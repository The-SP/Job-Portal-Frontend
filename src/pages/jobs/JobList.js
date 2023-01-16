import { useEffect, useState } from "react";
import axiosInstance from "../../axios_instance";
import JobItem from "./JobItem";

const JobList = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    axiosInstance
      .get("api/jobs/")
      .then((res) => {
        console.table("Jobs:", res.data);
        setJobs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!jobs) return <></>;

  return (
    <div className="container-fluid py-5 px-5">
      <h2>All Jobs List</h2>
      {jobs.map((job, index) => {
        return <JobItem key={index} job={job} />;
      })}
    </div>
  );
};

export default JobList;
