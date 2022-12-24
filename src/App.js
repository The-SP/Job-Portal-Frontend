import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import ResetPasswordConfirm from "./pages/ResetPasswordConfirm";

const App = () => (
  <BrowserRouter>
    <Navbar />

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/reset-password" element={<ResetPassword />} />
      <Route
        exact
        path="/password/reset/confirm/:uid/:token"
        element={<ResetPasswordConfirm />}
      />
    </Routes>
  </BrowserRouter>
);

export default App;
