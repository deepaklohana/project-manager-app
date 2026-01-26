import React from "react";
import Login from "./pages/login";
import Deshboard from "./pages/Deshboard";
import { Route, Routes } from "react-router-dom";
import AddUserDashboard from "./pages/Admin/AddUserDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AddProjects from "./pages/Admin/AddProjects";
const App = () => {
  const role = "admin"
  return (
    <div className="h-screen">
      {role==='admin'&&(
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Deshboard />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<AddUserDashboard />} />
          <Route path="projects" element={<AddProjects/>}/>
        </Route>
      </Routes>
      )}
    </div>
  );
};

export default App;
