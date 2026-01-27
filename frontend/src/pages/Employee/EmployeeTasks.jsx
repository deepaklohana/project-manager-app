import React from 'react'
import { BsHourglassSplit } from 'react-icons/bs';
import { FaTasks, FaUsers } from 'react-icons/fa';
import { GrProjects } from 'react-icons/gr';
import StatsCard from '../../components/common/StatsCard';

const EmployeeTasks = () => {
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
    <div>
        
    </div>
  );
}

export default EmployeeTasks
