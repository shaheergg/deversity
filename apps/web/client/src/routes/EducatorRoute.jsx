// EducatorRoute.js
import React from "react";
import { useAuthStore } from "../store/auth";
import { Navigate, Outlet } from "react-router-dom";

const EducatorRoute = () => {
  const auth = useAuthStore((state) => state.auth);
  const role = useAuthStore((state) => state.role);

  if (auth && role === "educator") {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
};

export default EducatorRoute;
