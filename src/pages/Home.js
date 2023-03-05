import "./Home.css";
import { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import resumeIcon from "../components/resumeIcon.png";
import jobIcon from "../components/jobIcon.png";
import brandingIcon from "../components/brandingIcon.png";
import recommendationIcon from "../components/recommendationIcon.png";
import homeimg from "../components/home2.png";
import {motion, useAnimation} from 'framer-motion';
import { useInView } from "react-intersection-observer";

const Home = () => {

  let easeing = [0.6,-0.05,0.01,0.99];

  const stagger = {
    animate:{
      transition:{
        delayChildren:0.4,
        staggerChildren:0.2,
        staggerDirection:1
      }
    }
  }

  const fadeInUp = {
    initial:{
      y:-60,
      opacity:0,
      transition:{
        duration:0.6, ease:easeing
      }
    },
    animate:{
      y:0,
      opacity:1,
      transition:{
        duration:0.6,
        delay:0.5,
        ease:easeing
      }
    }
  };

  const transition = {duration:1.4,ease:[0.6,0.01,-0.05,0.9]};

  const firstName = {
    initial:{
      y:-20,
    },
    animate:{
      y:0,
      transition:{
        delayChildren:0.4,
        staggerChildren:0.04,
        staggerDirection:-1
      }
    }
  }

  const lastName = {
    initial:{
      y:-200,
    },
    animate:{
      y:0,
      transition:{
        delayChildren:0.4,
        staggerChildren:0.04,
        staggerDirection:1
      }
    }
  }

  const letter = {
    initial:{
      y:400
    },
    animate:{
      y:-400,
      transition:{duration:5}
    }
  };

  const {ref, inView}=useInView({threshold:0.2});
  const animation= useAnimation();

  useEffect(()=>{
    if(inView){
      animation.start({
        y:0,
        transition:{
          type:'spring',duration:1,bounce:0.3
        }
      })
    }
    if(!inView){
      animation.start({
        y:200
      })
    }
  },[inView])

  return (
    <div>
      <section id="hero" className="container">
        <motion.div className="row mt-5" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, ease:easeing}}>
          <div className="col-md-7 main-text">
            <motion.h1 className="fw-semibold display-3">
              <motion.span 
                initial={{y:-200}} 
                animate={{y:0}}
                transition={{
                  duration:5,
                  delayChildren:0.4,
                  staggerChildren:0.04,
                  staggerDirection:-1}
                }>
                  <motion.span variants={letter}>D</motion.span>
                  <motion.span variants={letter}>e</motion.span>
                  <motion.span variants={letter}>s</motion.span>
                  <motion.span variants={letter}>i</motion.span>
                  <motion.span variants={letter}>g</motion.span>
                  <motion.span variants={letter}>n</motion.span>
                  <motion.span variants={letter}>f</motion.span>
                  <motion.span variants={letter}>o</motion.span>
                  <motion.span variants={letter}>c</motion.span>
                  <motion.span variants={letter}>u</motion.span>
                  <motion.span variants={letter}>s</motion.span>
                  <motion.span variants={letter}>e</motion.span>
                  <motion.span variants={letter}>d</motion.span>
              </motion.span>
            </motion.h1>
            <h1 className="text-uppercase fw-semibold display-1 ">
              hire nepal
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
        </motion.div>
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
          <div ref={ref}>
            <motion.div 
              animate={animation} 
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
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
