import "./Home.css";
import { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import resumeIcon from "../components/resumeIcon.png";
import jobIcon from "../components/jobIcon.png";
import brandingIcon from "../components/brandingIcon.png";
import recommendationIcon from "../components/recommendationIcon.png";
import homeimg from "../components/home2.png";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    observer.observe(componentRef.current);

    // Clean up the observer when the component unmounts
    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <>
      <section id="hero" className="container">
        <div className="row mt-5">
          <div className="col-md-7 main-text">
            <h1 className="text-uppercase fw-semibold display-1 ">
              Welcome to hire nepal
            </h1>
            <h5 className="text-uppercase mt-3 mb-4">
              Accelerate Your Tech Career with a World of Opportunities
            </h5>
            <div>
              <a href="/jobs" className="btn btn-dark">
                Get Started
              </a>
            </div>
          </div>
          <div className="col-md-5">
            <img src={homeimg} alt="" />
          </div>
        </div>
      </section>
      <section id="services" className="">
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="col-12 text-center">
              <div className="section-title">
                <h3 className="page-title">Our Services</h3>
                <div className="line"></div>
              </div>
            </div>
          </div>
          <div
            className={`my-component${isVisible ? " is-visible" : ""}`}
            ref={componentRef}
          >
            <div className="row g-4 text-center">
              <div className="col-lg-3 col-sm-6">
                <div className="service theme-shadow p-lg-5 p-4">
                  <div className="iconbox">
                    <img src={jobIcon} alt="" />
                  </div>
                  <h4 className="mt-4 mb-3">Apply For Jobs</h4>
                  <p>
                    Offer job seekers the ability to search for and apply to job
                    openings posted by employers.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="service theme-shadow p-lg-5 p-4">
                  <div className="iconbox">
                    <img src={resumeIcon} alt="" />
                  </div>
                  <h4 className="mt-4 mb-3">Build Your Resume</h4>
                  <p>
                    Provide tools for job seekers to create and upload their
                    resumes, making it easy for employers to find and review
                    them.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="service theme-shadow p-lg-5 p-4">
                  <div className="iconbox">
                    <img src={brandingIcon} alt="" />
                  </div>
                  <h4 className="mt-4 mb-3">Employer Branding</h4>
                  <p>
                    Help employers to showcase their company culture, mission,
                    and values to attract the right candidates.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="service theme-shadow p-lg-5 p-4">
                  <div className="iconbox">
                    <img src={recommendationIcon} alt="" />
                  </div>
                  <h4 className="mt-4 mb-3">Job Recommendation</h4>
                  <p>
                    Use machine learning algorithms to recommend job openings to
                    job seekers based on their skills and preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
