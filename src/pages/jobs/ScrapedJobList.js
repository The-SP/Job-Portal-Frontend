import { useEffect, useState } from "react";
import axiosInstance from "../../axios_instance";
import ScrapedJobItem from "./ScrapedJobItem";
import Pagination from "./Pagination";
import { urls } from "../../config";

const ScrapedJobList = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(10);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axiosInstance
      .get(urls.JOB_SCRAPED)
      .then((res) => {
        console.log("Total jobs fetched:", (res.data).length);
        setJobs(res.data);
        setFilteredJobs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //Filter the jobs by searchTerm
  // useEffect(() => {
  //   setFilteredJobs(
  //     jobs.filter((job) => job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     job.company.toLowerCase().includes(searchTerm.toLowerCase())
  //     ) 
  //   );
  // }, [searchTerm]);

  const handleSearch = ()=>{
    setFilteredJobs(
      jobs.filter((job) => job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
      ) 
    );
  }

  //Get current posts
  const indexofLastJob = currentPage * jobsPerPage;
  const indexofFirstJob = indexofLastJob - jobsPerPage;
  const currentJobs = filteredJobs?filteredJobs.slice(indexofFirstJob, indexofLastJob):[];

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Handle search input change
  const handleSearchChange = (event) => setSearchTerm(event.target.value);

  if (!jobs) return <></>;

  return (
    <div className="container-fluid py-5 px-5">
      <h2 className="text-center mb-5">Scraped Jobs</h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter Job Title or Company Name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {currentJobs.map((job, index) => {
        return <ScrapedJobItem key={index} job={job} />;
      })}
      <Pagination jobsPerPage={jobsPerPage} totalJobs={filteredJobs.length} paginate={paginate} />
    </div>
  );
};

export default ScrapedJobList;
