import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// Auth
import Login from "./pages/user/Login";
import Logout from "./pages/user/Logout";
import Signup from "./pages/user/Signup";
import EmployerSignup from "./pages/user/EmployerSignup";
import ResetPassword from "./pages/user/ResetPassword";
import ResetPasswordConfirm from "./pages/user/ResetPasswordConfirm";
// Profile
import SeekerProfile from "./pages/profile/SeekerProfile";
import SeekerProfileUpdate from "./pages/profile/SeekerProfileUpdate";
import EmployerProfile from "./pages/profile/EmployerProfile";
import EmployerProfileUpdate from "./pages/profile/EmployerProfileUpdate";
// Jobs
import JobList from "./pages/jobs/JobList";
import JobDetail from "./pages/jobs/JobDetail";
import JobCreate from "./pages/jobs/JobCreate";
import EmployerJobList from "./pages/jobs/EmployerJobList";

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* user pages */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signup-employer" element={<EmployerSignup />} />
        <Route exact path="/reset-password" element={<ResetPassword />} />
        <Route
          exact
          path="/password/reset/confirm/:uid/:token"
          element={<ResetPasswordConfirm />}
        />
        {/* profile pages */}
        <Route exact path="/profile/seeker" element={<SeekerProfile />} />
        <Route exact path="/profile/seeker/update" element={<SeekerProfileUpdate />} />
        <Route exact path="/profile/employer" element={<EmployerProfile />} />
        <Route exact path="/profile/employer/update" element={<EmployerProfileUpdate />} />
        {/* Job pages */}
        <Route exact path="/jobs" element={<JobList />} />
        <Route exact path="/jobs/:id" element={<JobDetail />} />
        <Route exact path="/jobs/create" element={<JobCreate />} />
        <Route exact path="/jobs/employer" element={<EmployerJobList />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
