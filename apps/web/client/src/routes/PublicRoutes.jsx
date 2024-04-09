// PublicRoute.js
import React from "react";
import { useAuthStore } from "../store/auth";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const auth = useAuthStore((state) => state.auth);
  const role = useAuthStore((state) => state.role);

  if (auth) {
    if (role === "admin") return <Navigate to="/admin/dashboard" />;
    if (role === "educator") return <Navigate to="/educator/dashboard" />;
    if (role === "student") return <Navigate to="/student/dashboard" />;
  }

  return <Outlet />;
};

export default PublicRoute;
