import React from "react";
import { BiDetail } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { FaTasks } from "react-icons/fa";  
import { Link } from "react-router-dom";
import AddUserDashboard from "../pages/Admin/AddUserDashboard";

const Sidebar = () => {
  const role= 'employee'
  let deshboardOption = [];
    if (role === "admin") {
      deshboardOption = [
        {
          icon: <BiDetail />,
          title: "Deshboard",
          link: "/dashboard",
        },
        {
          icon: <FaUsers />,
          title: "Users",
          link: "/dashboard/users",
          
        },
        {
          icon: <GrProjects />,
          title: "Projects",
          link: "/dashboard/projects",
        },
      ];
    } else if (role === "manager") {
      deshboardOption = [
        {
          icon: <BiDetail />,
          title: "Deshboard",
          link: "/dashboard",
        },
        {
          icon: <FaTasks />,
          title: "Tasks",
          link: "/dashboard/tasks",
        },
        {
          icon: <GrProjects />,
          title: "Projects (View)",
          link: "/dashboard/projects",
        },
      ];
    } else if (role === "employee") {
      deshboardOption = [
        {
          icon: <BiDetail />,
          title: "Deshboard",
          link: "/dashboard",
        },
        {
          icon: <FaTasks />,
          title: "My Tasks",
          link: "/dashboard/tasks",
        },
      ];
    }
  return (
    <div className=" w-[280px] h-screen   bg-[#ced4da] text-[#212529] rounded-r-lg pt-20 flex flex-col">
      {deshboardOption.map((option, idx) => (
        <div key={idx} >
          <Link className="flex items-center gap-3 p-3  hover:bg-[#212529b6] hover:text-[#ced4da]"  to={option.link}>
            <span className="text-xl">{option.icon}</span>
            <span>{option.title}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
