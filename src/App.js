import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/user/Login";
import Logout from "./pages/user/Logout";
import Signup from "./pages/user/Signup";
import ResetPassword from "./pages/user/ResetPassword";
import ResetPasswordConfirm from "./pages/user/ResetPasswordConfirm";

import { AuthProvider } from "./context/AuthContext";

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/reset-password" element={<ResetPassword />} />
        <Route
          exact
          path="/password/reset/confirm/:uid/:token"
          element={<ResetPasswordConfirm />}
        />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
