import { useEffect, useState } from "react";
import axiosInstance from "../../axios_instance";
import ScrapedJobItem from "./ScrapedJobItem";
import Pagination from "./Pagination";
import { urls } from "../../config";

const ScrapedJobList = () => {
  const [jobs, setJobs] = useState(null);
  const [currentPage,setCurrentPage]=useState(1);
  const jobsPerPage=10

  useEffect(() => {
    axiosInstance
      .get(urls.JOB_SCRAPED)
      .then((res) => {
        console.log("Total jobs fetched:", (res.data).length);
        setJobs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //Get current posts
  const indexofLastJob = currentPage * jobsPerPage;
  const indexofFirstJob= indexofLastJob - jobsPerPage;
  const currentJobs = jobs? jobs.slice(indexofFirstJob,indexofLastJob):[];

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (!jobs) return <></>;

  return (
    <div className="container-fluid py-5 px-5">
      <h2 className="text-center mb-5">Scraped Jobs</h2>
      {currentJobs.map((job, index) => {
        return <ScrapedJobItem key={index} job={job} />;
      })}
      <Pagination jobsPerPage={jobsPerPage} totalJobs={jobs.length} paginate={paginate}/>
    </div>
  );
};

export default ScrapedJobList;
