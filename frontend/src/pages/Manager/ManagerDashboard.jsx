import React from 'react'
import { BsHourglassSplit } from 'react-icons/bs'
import { GoCheck } from "react-icons/go";
import StatsCard from '../../components/common/StatsCard'

const ManagerDashboard = () => {
  const statsCardDetails = [
    {
      title: "Tasks Pending ",
      icon: <BsHourglassSplit size={40} />,
      stat: 2,
    },
    {
      title: "Tasks Completed",
      icon: <GoCheck size={40}/>,
      stat: 2,
    },
  ]
  return (
      <div className="w-full pr-4  text-[#212529]">
      <h1 className="text-3xl font-semibold mb-6">Welcome, Manager</h1>
      <h1 className="text-2xl font-medium mb-4">PROJECT STATUS CARDS</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 min-h-25 w-full">
        {statsCardDetails.map((Card, idx) => (
          <StatsCard key={idx} props={Card} />
        ))}
      </div>
      
    </div>
  )
}

export default ManagerDashboard
