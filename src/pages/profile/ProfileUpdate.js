import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "../../axios_instance";

const ProfileUpdate = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axiosInstance
      .get("user/profile/detail/")
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    let profileData = {};
    for (let [key, value] of formData.entries()) {
      // If the value is not null, insert to profileData
      if (value) profileData[key] = value;
      // If the value is empty, insert as null. Otherwise it is ignored by put request.
      else if (value === "") profileData[key] = null;
    }
    // first_name is a required field, so if it is empty just use previous value
    if (!profileData.first_name) profileData.first_name = profile.first_name;

    axiosInstance
      .put("user/profile/detail/", profileData)
      .then((res) => {
        navigate("/profile");
      })
      .catch((err) => console.log(err));
  };

  if (!profile) return <></>;

  return (
    <div className="container-fluid py-5 px-5">
      <div className="row">
        <div className="col-4 d-flex align-items-center">
          <div className="card text-center p-2" style={{ width: "18rem" }}>
            <img
              src="https://via.placeholder.com/30"
              className="card-img-top rounded-circle"
              alt="Profile Pic"
            />
            <div className="card-body">
              <h5 className="card-title">{profile.first_name}</h5>
              <p className="card-text">
                Full Stack Developer
                <br />
                Kathmandu, Nepal
              </p>
              <Link to="/profile" className="btn btn-primary">
                Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="col-8">
          <form className="mt-5 p-4 container bg-dark" onSubmit={handleSubmit}>
            {/* Loop through the profile response */}
            {Object.entries(profile).map(([key, value]) => (
              <div key={key} className="col mb-3">
                <div className={"form-floating"}>
                  {/* Set name and defaultValue of each input fields */}
                  <input
                    type="text"
                    className="form-control"
                    name={key}
                    defaultValue={value}
                  />
                  <label>{key}</label>
                </div>
              </div>
            ))}
            <button className="btn btn-outline-success">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
