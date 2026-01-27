import React from 'react'

const ManagerProjects = () => {
  return (
    <div className="mt-6 w-full text-[#212529]">
      <h2 className="mt-10 w-3/4 mx-auto text-2xl font-medium mb-20"><span className='text-red-500 font-bold'>*</span> You can view projects but contact Admin to edit.</h2>
      <h2 className="mt-20 w-3/4 mx-auto text-2xl font-medium mb-4">Project List</h2>
      <table className="w-3/4 mx-auto mt-6 border-gray-200 text-left ">
        <thead>
          <tr className="">
            <th className="w-2/4 p-1">Name</th>
            <th className="w-1/4 p-1">Start Date</th>
            <th className="w-1/4 p-1">Status</th>
            {/* <th className="w-2/6">Actions</th> */}
          </tr>
        </thead>
        <tbody className="">
            <tr className="border-t border-b ">
                <td className="p-1">Project 1</td>
                <td className="p-1">12 Jan 2026</td>
                <td className="p-1">Active</td>
                 
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ManagerProjects
