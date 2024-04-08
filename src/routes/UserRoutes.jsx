import React from "react";
import UserDashboard from "../pages/UserDashboard";
import {Route,Routes} from "react-router-dom"
export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/user" element={<h1>user page</h1>} />
      <Route path="/dash" element={<UserDashboard />} />
    </Routes>
  );
}
