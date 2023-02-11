import { useEffect, useState } from "react";
import axiosInstance from "../../axios_instance";
import { urls } from "../../config";
import RecommendedJobItem from "./RecommendedJobItem";

const RecommendedJobList = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(urls.JOB_RECOMMENDED, {
        timeout: 30000 // 30sec as recommendation algo takes lot of time
      })
      .then((res) => {
        console.table("Jobs:", res.data);
        setJobs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!jobs) return <>Loading...</>;

  return (
    <div className="container-fluid py-5 px-5">
      <h2 className="text-center mb-5">Jobs Recommended For You</h2>
      {jobs.map((job, index) => {
        return <RecommendedJobItem key={index} job={job} />;
      })}
    </div>
  );
};

export default RecommendedJobList;
