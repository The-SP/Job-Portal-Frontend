import './Home.css'
import Footer from '../components/Footer';
import resumeIcon from '../components/resumeIcon.png'
import jobIcon from '../components/jobIcon.png'
import brandingIcon from '../components/brandingIcon.png'
import recommendationIcon from '../components/recommendationIcon.png'

const Home = () => {

  return (
    <>
    <section id="hero" className="min-vh-100 d-flex align-items-center text-center">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-uppercase text-white fw-semibold display-1">Welcome to hire nepal</h1>
                    <h5 className="text-uppercase text-white mt-3 mb-4">Accelerate Your Tech Career with a World of Opportunities</h5>
                    <div>
                        <a href="/jobs" className="btn btn-dark">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    <section id="services" className="section-padding border-top">
    <div className="container">
        <div className="row mt-5">
            <div className="col-12 text-center">
                <div className="section-title">
                    <h1 className="display-4 fw-semibold">Our Services</h1>
                    <div className="line"></div>
                </div>
            </div>
        </div>
        <div className="row g-4 text-center">
            <div className="col-lg-3 col-sm-6">
                <div className="service theme-shadow p-lg-5 p-4">
                    <div className="iconbox">
                        <img src={jobIcon} alt="" />
                    </div>
                    <h4 className="mt-4 mb-3">Apply For Jobs</h4>
                    <p>Offer job seekers the ability to search for and apply to job openings posted by employers.</p>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="service theme-shadow p-lg-5 p-4">
                    <div className="iconbox">
                      <img src={resumeIcon} alt="" />
                    </div>
                    <h4 className="mt-4 mb-3">Build Your Resume</h4>
                    <p>Provide tools for job seekers to create and upload their resumes, making it easy for employers to find and review them.</p>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="service theme-shadow p-lg-5 p-4">
                    <div className="iconbox">
                        <img src={brandingIcon} alt="" />
                    </div>
                    <h4 className="mt-4 mb-3">Employer Branding</h4>
                    <p>Help employers to showcase their company culture, mission, and values to attract the right candidates.</p>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="service theme-shadow p-lg-5 p-4">
                    <div className="iconbox">
                        <img src={recommendationIcon} alt="" />
                    </div>
                    <h4 className="mt-4 mb-3">Job Recommendation</h4>
                    <p>Use machine learning algorithms to recommend job openings to job seekers based on their skills and preferences.</p>
                </div>
            </div>
        </div>
    </div>
    </section> 
    <Footer/>
    </> 
  );
};

export default Home;


