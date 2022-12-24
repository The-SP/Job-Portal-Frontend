import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios_instance";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    axiosInstance.defaults.headers["Authorization"] = null;

    navigate("/login");
  });
  return null;
};

export default Logout;
