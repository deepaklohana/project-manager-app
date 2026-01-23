import React, { useState } from 'react'
import Logo from '../assets/logo/logo.png'
import Login from '../pages/login'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate()
    const handleNavigate =()=>{
        navigate('/')
    }
  return (
    <div className='h-16 text-[#212529] bg-[#ced4da] flex items-center justify-between px-4 '>
      <img className='w-16' src={Logo} alt="" />
      <button onClick={handleNavigate} className=' bg-[#212529] text-[#ced4da] py-2 px-8 rounded-md active:bg-[#212529b6]'>Logout</button>
    </div>


  )
}

export default Navbar
