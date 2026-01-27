import React from "react";

import { BsHourglassSplit } from "react-icons/bs";
import StatsCard from "../../components/common/StatsCard";
import { GoCheck } from "react-icons/go";

const EmployeeDashboard = () => {
  const statsCardDetails = [
      {
        title: "Tasks Pending ",
        icon: <BsHourglassSplit size={40} />,
        stat: 2,
      },
      {
        title: "Tasks Completed",
        icon: <GoCheck size={40}/>,
        stat: 12,
      },
    ]
  return (
  <div className="min-w-3/4 mx-auto pr-4  text-[#212529]">
      <h1 className="text-3xl font-semibold mb-6">Welcome, Employee</h1>
      <h1 className="text-2xl font-medium mb-4">STATS OVERVIEW</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 min-h-25">
        {statsCardDetails.map((Card, idx) => (
          <StatsCard key={idx} props={Card} />
        ))}
      </div>
      <div className="mt-30">
        <h1 className="text-2xl font-medium mb-4">MY TASK LIST</h1>
      </div>
  </div>
  );
};

export default EmployeeDashboard;
