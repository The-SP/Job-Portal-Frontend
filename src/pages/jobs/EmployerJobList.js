import { useEffect, useState } from "react";
import axiosInstance from "../../axios_instance";
import { urls } from "../../config";
import EmployerJobItem from "./EmployerJobItem";

const EmployerJobList = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(urls.EMPLOYER_JOBS)
      .then((res) => {
        console.table("Jobs:", res.data);
        setJobs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!jobs) return <></>;

  return (
    <div className="container-fluid py-5 px-5">
      <h2>Jobs posted by your Company</h2>
      {jobs.map((job, index) => {
        return <EmployerJobItem key={index} job={job} />;
      })}
    </div>
  );
};

export default EmployerJobList;
