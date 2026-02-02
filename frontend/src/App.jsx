import React from "react";
import Login from "./pages/login";
import Deshboard from "./pages/Deshboard";
import { Route, Routes } from "react-router-dom";
import AddUserDashboard from "./pages/Admin/AddUserDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AddProjects from "./pages/Admin/AddProjects";
import ManagerDashboard from "./pages/Manager/ManagerDashboard";
import AddTasks from "./pages/Manager/AddTasks";
import EmployeeDashboard from "./pages/Employee/EmployeeDashboard";
import ManagerProjects from "./pages/Manager/ManagerProjects";
const App = () => {
  const role = "admin";
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Deshboard />}>
          {role === "admin" && (
            <>
              <Route index element={<AdminDashboard />} />
              <Route path="users" element={<AddUserDashboard />} />
              <Route path="projects" element={<AddProjects />} />
            </>
          )}
          {role === "manager" && (
            <>
              <Route index element={<ManagerDashboard />} />
              <Route path="tasks" element={<AddTasks />} />
              <Route path="projects" element={<ManagerProjects />} />
            </>
          )}
          {role === "employee" && (
            <>
              <Route index element={<EmployeeDashboard />} />
            </>
          )}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
