import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../screens/home/Home";
import ProjectForm from "../screens/project-form/ProjectForm";

const EndPoints = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project-form" element={<ProjectForm />} />
    </Routes>
  );
};

export default EndPoints;
