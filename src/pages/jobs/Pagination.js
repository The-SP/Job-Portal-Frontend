import React, { useState } from "react";

const Pagination = ({jobsPerPage,totalJobs,paginate}) => {
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);

  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  const beforePaginate = (pageNumber) => {
    if (pageNumber === 0) {
      setCurrentPage(1);
      paginate(1);
      return;
    }
    if (pageNumber === Math.ceil(totalJobs / jobsPerPage) + 1) {
      setCurrentPage(pageNumber - 1);
      paginate(currentPage);
      return;
    }
    setCurrentPage(pageNumber);
    paginate(pageNumber);
  };

  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li
            className={
              "page-item" + (currentPage === 1 ? " disabled" : "")
            }
          >
            <a
              className="page-link"
              href="#"
              aria-label="Previous"
              onClick={() => beforePaginate(currentPage - 1)}
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={
                "page-item" + (currentPage === number ? " active" : "")
              }
            >
              <a
                className="page-link"
                href="#"
                onClick={() => beforePaginate(number)}
              >
                {number}
              </a>
            </li>
          ))}
          <li
            className={
              "page-item" +
              (currentPage === Math.ceil(totalJobs / jobsPerPage)
                ? " disabled"
                : "")
            }
          >
            <a
              className="page-link"
              href="#"
              aria-label="Next"
              onClick={() => beforePaginate(currentPage + 1)}
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
