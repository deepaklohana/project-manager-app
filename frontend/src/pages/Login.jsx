import React from 'react'
import Logo from '../assets/logo/logo.png'
import Register from './Register'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    const [showRegister,setShowRegister] = useState(false)

    const openRegisterForm = ()=>{
        setShowRegister(true)
    } 
    if(showRegister){
        return <Register/>
    }
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='bg-[#ced4da]  flex flex-col items-center rounded-xl py-10 w-sm'>
        <img className='max-w-28 ' src={Logo} alt="" />
        <div>
            <form className='flex flex-col' action="">
                <label className='text-xs mb-1' htmlFor="">Email</label>
                {/* <br /> */}
                <input type="email" name="" id="" className='border rounded-lg h-8  w-66 text-sm font-medium  border-[#212529b6] text-[#212529] px-2 mb-2' />
                <label className='text-xs mb-1' htmlFor="">Password</label>
                {/* <br /> */}
                <input type="text" className='border rounded-lg h-8 text-sm font-medium  border-[#212529b6] text-[#212529] px-2'/>
                {/* <br /> */}
                <button  className='mt-8 mb-2 bg-[#212529] text-[#ced4da] py-2 px-8 rounded-md active:bg-[#212529b6] '>Login</button>
            </form>
            <p className='text-sm text-center'>Don't have account? <span className='underline cursor-pointer' onClick={openRegisterForm}>Register</span> </p>
        </div>
      </div>
    </div>
  )
}

export default Login
