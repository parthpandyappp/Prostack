import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  ProjectListing,
  UserListing,
  ProjectForm,
  UserProfile,
} from "../pages";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./private-route/PrivateRoute";

const EndPoints = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<PrivateRoute />}>
        <Route path="/listing/projects" element={<ProjectListing />} />
        <Route path="/listing/users" element={<UserListing />} />
        <Route path="/project-form" element={<ProjectForm />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default EndPoints;
