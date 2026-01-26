import React from "react";
import { FaTasks, FaUsers } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { BsHourglassSplit } from "react-icons/bs";
import StatsCard from "../../components/common/StatsCard";
const AdminDashboard = () => {
  const statsCardDetails = [
    {
      title: "Total Users",
      icon: <FaUsers size={40} />,
      stat: 12,
    },
    {
      title: "Total Projects",
      icon: <GrProjects size={40} />,
      stat: 4,
    },
    {
      title: "Actice Tasks",
      icon: <FaTasks size={40} />,
      stat: 34,
    },
    {
      title: "Pending Requests",
      icon: <BsHourglassSplit size={40} />,
      stat: 2,
    },
  ];
  return (
    <div className="w-full pr-4  text-[#212529]">
      <h1 className="text-3xl font-semibold mb-6">Welcome, Admin</h1>
      <h1 className="text-2xl font-medium mb-4">STATS OVERVIEW</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 min-h-50">
        {statsCardDetails.map((Card, idx) => (
          <StatsCard key={idx} props={Card} />
        ))}
      </div>
      {/* <hr className="mt-4 border-dashed"/> */}
      {/* <h1 className="mt-10 text-3xl font-semibold mb-6">Recent Activity</h1> */}
    </div>
  );
};

export default AdminDashboard;
