import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axiosInstance from "../../axios_instance";
import { urls } from "../../config";
import Spinner from "../../components/Spinner";

const ResumeRanking = () => {
  const [resumeRankings, setResumeRankings] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axiosInstance
      .get(urls.APPLICANT_RANKING.replace(":job_id", id), {
        timeout: 30000, // 30sec as resume ranking algorithm takes a lot of time
      })
      .then((res) => {
        console.table("Resume Rankings:", res.data);
        setResumeRankings(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (resumeRankings.length === 0) {
    return (
      <div className="text-center mt-5">
        <p>Running resume parser and ranker algorithm..</p>
        <Spinner />
      </div>
    );
  }

  return (
    <div className="whole-table">
      <div className="main-table container-fluid py-5 px-5">
        <div className="table-div">
          <div className="display-6 mb-4 text-center page-title fs-1">
            Applicant Rankings
          </div>
          <div className="table__body">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Filename</th>
                  <th>Description Score</th>
                  <th>Education Score</th>
                  <th>Experience Score</th>
                  <th>Projects Score</th>
                  <th>Skills Score</th>
                  <th>Total Score</th>
                </tr>
              </thead>
              <tbody>
                {resumeRankings.map((resume, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{resume.Filename.substr(0,10)}</td>
                    <td>{Math.round(resume.description_score * 100)}</td>
                    <td>{Math.round(resume.education_score * 100)}</td>
                    <td>{Math.round(resume.experience_score * 100)}</td>
                    <td>{Math.round(resume.projects_score * 100)}</td>
                    <td>{Math.round(resume.skills_score * 100)}</td>
                    <td>{Math.round(resume.total_score * 100)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeRanking;
