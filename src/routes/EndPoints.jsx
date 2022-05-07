import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, ProjectListing, UserListing } from "../screens";
import ProjectForm from "../screens/project-form/ProjectForm";
import UserProfile from "../screens/user-profile/UserProfile";

const EndPoints = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listing/projects" element={<ProjectListing />} />
      <Route path="/listing/users" element={<UserListing />} />
      <Route path="/project-form" element={<ProjectForm />} />
      <Route path="/userprofile" element={<UserProfile />} />
    </Routes>
  );
};

export default EndPoints;
