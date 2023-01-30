import './Home.css'

const Home = () => {

  return (
    <div>
        <div className="header-main">
          <h1 className="header-title">
              <p>FIND YOUR </p><p className="span">PERFECT</p><p> JOB EASILY</p>
          </h1>
        </div>
        <div className="search-wrapper">
            <div className="search-box">
                <div className="search-card">
                    <input type="text" className="search-input" placeholder="Job Title or Keywords"/>
                    <button className="search-button">Search</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Home;


