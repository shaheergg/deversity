// AdminRoute.js
import React from "react";
import { useAuthStore } from "../store/auth";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const auth = useAuthStore((state) => state.auth);
  const role = useAuthStore((state) => state.role);

  if (auth && role === "admin") {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
};

export default AdminRoute;
