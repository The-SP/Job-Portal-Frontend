import { useEffect, useState } from "react";
import axiosInstance from "../../axios_instance";
import Spinner from "../../components/Spinner";
import { urls } from "../../config";
import Pagination from "../jobs/Pagination";
import RecommendedJobItem from "./RecommendedJobItem";

const RecommendedJobList = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(10);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    axiosInstance
      .get(urls.JOB_RECOMMENDED, {
        timeout: 30000, // 30sec as recommendation algo takes lot of time
      })
      .then((res) => {
        console.table("Jobs:", res.data);
        setJobs(res.data);
        setFilteredJobs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //Get current posts
  const indexofLastJob = currentPage * jobsPerPage;
  const indexofFirstJob = indexofLastJob - jobsPerPage;
  const currentJobs = filteredJobs?filteredJobs.slice(indexofFirstJob, indexofLastJob):[];

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Handle search input change
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
  
    if (searchTerm === "") {
      setFilteredJobs(jobs);
    } else {
      setFilteredJobs(
        jobs.filter(
          (job) =>
            job.title.toLowerCase().includes(searchTerm) ||
            job.company.toLowerCase().includes(searchTerm)
        )
      );
    }
  };
  

  if (!jobs)
    return (
      <div className="text-center">
        Running Recommender Engine...
        <Spinner />
      </div>
    );

  return (
    <div className="container-fluid py-5 px-5">
      <h2 className="text-center mb-5">Jobs Recommended for you</h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter Job Title or Company Name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      {currentJobs.map((job, index) => {
        return <RecommendedJobItem key={index} job={job} />;
      })}
      <Pagination jobsPerPage={jobsPerPage} totalJobs={filteredJobs.length} paginate={paginate} />
    </div>
  );
};

export default RecommendedJobList;
