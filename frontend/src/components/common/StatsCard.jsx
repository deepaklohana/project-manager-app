import React from 'react'

const StatsCard = ({props}) => {
  return (
    <div className='bg-[#212529b6]  rounded-md p-2 text-[#ced4da]  shadow-[#212529b6] shadow-xs flex justify-between items-center'>
        <div className='bg-[#212529b6] flex flex-col items-center justify-center h-14 w-14 rounded'>{props.icon}</div>
        <div className='flex flex-col justify-between gap-3'>
            <h3>{props.title}</h3>
            <h1 className='text-end text-3xl font-semibold'>{props.stat}</h1>
        </div>
    </div>
  )
}

export default StatsCard
