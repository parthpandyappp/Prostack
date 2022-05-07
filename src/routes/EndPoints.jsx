import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../screens/home/Home";
import UserProfile from "../screens/user-profile/UserProfile";

const EndPoints = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userprofile" element={<UserProfile />} />
    </Routes>
  );
};

export default EndPoints;
