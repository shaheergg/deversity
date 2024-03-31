// StudentRoute.js
import React from "react";
import { useAuthStore } from "../store/auth";
import { Navigate, Outlet } from "react-router-dom";

const StudentRoute = () => {
  const auth = useAuthStore((state) => state.auth);
  const role = useAuthStore((state) => state.role);

  if (auth && role === "student") {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
};

export default StudentRoute;
