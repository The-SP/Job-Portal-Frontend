import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../axios_instance";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axiosInstance
      .get("user/profile/detail/")
      .then((res) => {
        console.table("Res:", res.data);
        setProfile(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!profile) return <></>;

  return (
    <div className="container-fluid py-5 px-5">
      <div className="row">
        <div className="col-4 d-flex align-items-center">
          <div className="card text-center" style={{ width: "18rem" }}>
            <img
              src="https://via.placeholder.com/50"
              className="card-img-top rounded-circle"
              alt="Profile Pic"
            />
            <div className="card-body">
              <h5 className="card-title">{profile && profile.first_name}</h5>
              <p className="card-text">
                Full Stack Developer
                <br />
                Kathmandu, Nepal
              </p>
              <Link to="#" className="btn btn-primary">
                Update
              </Link>
            </div>
          </div>
        </div>
        <div className="col-8">
          {Object.entries(profile).map(([key, value]) => (
            <div key={key}>
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">{key}</h6>
                </div>
                <div className="col-sm-9 text-secondary">{value}</div>
              </div>{" "}
              <hr />
            </div>
          ))}
        <Link to="#" className="btn btn-outline-primary">
          Update
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
