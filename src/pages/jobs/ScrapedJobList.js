import { useEffect, useState } from "react";
import axiosInstance from "../../axios_instance";
import ScrapedJobItem from "./ScrapedJobItem";
import { urls } from "../../config";

const ScrapedJobList = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(urls.JOB_SCRAPED)
      .then((res) => {
        console.table("Jobs:", res.data);
        setJobs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!jobs) return <></>;

  return (
    <div className="container-fluid py-5 px-5">
      <h2>Scraped Jobs</h2>
      {jobs.map((job, index) => {
        return <ScrapedJobItem key={index} job={job} />;
      })}
    </div>
  );
};

export default ScrapedJobList;
