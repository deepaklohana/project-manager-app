import React from "react";
import { BiDetail } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const role = "admin";
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
        title: "Uers",
        link: "/uers",
      },
      {
        icon: <GrProjects />,
        title: "Projects",
        link: "/projects",
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
        link: "/admin/tasks",
      },
      {
        icon: <GrProjects />,
        title: "Projects (View)",
        link: "/admin/projects",
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
        link: "/employee/tasks",
      },
    ];
  }
  return (
    <div className=" mt-6 w-80 h-100 bg-[#ced4da] text-[#212529] rounded-r-lg pt-20 ">
      {deshboardOption.map((option, idx) => (
        <div key={idx} >
          <Link className="flex items-center gap-3 p-3" to={option.link}>
            <span className="text-xl">{option.icon}</span>
            <span>{option.title}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
