import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context";

const PrivateRoute = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
