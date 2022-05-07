import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../screens/home/Home";

const EndPoints = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default EndPoints;
