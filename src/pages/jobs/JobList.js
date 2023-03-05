import { useEffect, useState } from "react";
import axiosInstance from "../../axios_instance";
import { urls } from "../../config";
import JobItem from "./JobItem";
import Pagination from "./Pagination";
import Spinner from "../../components/Spinner"

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(10);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axiosInstance
      .get(urls.JOB_LIST)
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

  if (jobs.length === 0) return <Spinner />;

  return (
    <div className="container-fluid py-5 px-5">
      <h2 className="text-center mb-5 page-title">All Jobs List</h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter Job Title or Company Name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="icon-search"><i class="bi bi-search"></i></div>
      </div>
      {currentJobs.map((job, index) => (
        <JobItem key={index} job={job} />
      ))}
      <Pagination jobsPerPage={jobsPerPage} totalJobs={filteredJobs.length} paginate={paginate} />
    </div>
  );
};

export default JobList;
