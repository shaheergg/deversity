import React from "react";
import Navbar from "../components/Navbar";
import { useAuthStore } from "../store/auth";

const RootLayout = ({ children }) => {
  const auth = useAuthStore((state) => state.auth);
  return (
    <div>
      {!auth && <Navbar />}
      <div>{children}</div>
    </div>
  );
};

export default RootLayout;
