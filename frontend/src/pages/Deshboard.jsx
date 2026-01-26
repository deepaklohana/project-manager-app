import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import AdminDashboard from './Admin/AdminDashboard'
import ManagerDashboard from './Manager/ManagerDashboard'
import EmployeeDashboard from './Employee/EmployeeDashboard'
import { Outlet } from 'react-router-dom'

  
import AddUserDashboard from './Admin/AddUserDashboard'

const Deshboard = () => {
   const role= 'admin'
  return (
    <div className='flex flex-col  text-[#212529]'>
        <Navbar/>
      <div className='flex mt-6 gap-6'>
        <Sidebar/>
        <Outlet />
      </div>
    </div>
  )
}

export default Deshboard
