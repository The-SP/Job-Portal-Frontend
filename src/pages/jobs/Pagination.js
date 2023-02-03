import React, { useState } from "react";

const Pagination = ({jobsPerPage,totalJobs,paginate}) => {
    const pageNumbers =[];

    for(let i=1; i<=Math.ceil(totalJobs/jobsPerPage);i++){
        pageNumbers.push(i);
    }

    return(
        <div className="d-flex justify-content-center text-center">
            <nav>
                <ul className="pagination">
                    {pageNumbers.map(number=>(
                        <li key={number} className="page-item">
                            <a onClick={()=> (
                                paginate(number)
                                )} href="#" className="page-link">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Pagination