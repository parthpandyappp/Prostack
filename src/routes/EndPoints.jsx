import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, ProjectListing, UserListing } from "../screens";

const EndPoints = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listing/projects" element={<ProjectListing />} />
      <Route path="/listing/users" element={<UserListing />} />
    </Routes>
  );
};

export default EndPoints;
