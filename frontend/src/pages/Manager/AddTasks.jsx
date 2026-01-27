import React, { useState } from 'react'

const AddTasks = () => {
  const [isOpen, setIsOpen] = useState(false);
    // Form data handle karne ke liye (Optional)
    const handleSaveUser = (e) => {
      e.preventDefault();
      // Yahan API call ya data save logic aayega
      console.log("Task Created!");
    };
    return (
      <div className="mt-6 w-full">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#212529] text-[#ced4da] py-2 px-8 rounded-md active:bg-[#212529b6]"
        >
          Create New task
        </button>
        <h2 className="mt-20 text-2xl font-medium mb-4">Task List</h2>
        <table className="w-3/4 mx-auto mt-6 border-gray-200 text-left ">
          <thead>
            <tr className="">
              <th className="w-1/6">Title</th>
              <th className="w-2/6">Assigned To</th>
              <th className="w-1/6">Priority</th>
              <th className="w-2/6">Status</th>
            </tr>
          </thead>
          <tbody className="">
              <tr className="border-t border-b ">
                  <td className="p-1">Fix Login Bug</td>
                  <td className="p-1">Sara (Emp)</td>
                  <td className="p-1">High</td>
                  <td className="p-1">Pending</td>
              </tr>
          </tbody>
        </table>
        {isOpen && (
          <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
            <div className="bg-white p-6 rounded-md w-96">
              <h2 className="text-xl font-semibold mb-4">Add Task</h2>
              <form
                className="flex flex-col gap-3"
                action=""
                onSubmit={handleSaveUser}
              >
                {/* <input
                  className="h-8 text-lg pl-2 border-[1.5px] rounded border-[#212529b6] "
                  type="text"
                  placeholder="Name"
                  required
                /> */}
                <select className="h-8 text-lg pl-2 border-[1.5px] rounded border-[#212529b6]" name='select' id='select'>
                    <option value="">Select Project</option>
                    <option value=""> Project 1</option>
                    <option value="">Project 2</option>
                    <option value="">Project 3</option>
                </select>
                <select className="h-8 text-lg pl-2 border-[1.5px] rounded border-[#212529b6]" name='select' id='select'>
                    <option value="">Select Employee</option>
                    <option value=""> Employee 1</option>
                    <option value="">Employee 2</option>
                    <option value="">Employee 3</option>
                </select>
                <select className="h-8 text-lg pl-2 border-[1.5px] rounded border-[#212529b6]" name='select' id='select'>
                    <option value="">Select Priority</option>
                    <option value="">Low</option>
                    <option value="">Medium</option>
                    <option value="">High</option>
                </select>
                <div className="flex justify-end">
                  <div className="flex gap-2 mt-6">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="bg-red-700 text-white py-2 px-8 rounded-md active:bg-red-500"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-700 text-white py-2 px-8 rounded-md active:bg-blue-500"
                    >
                      Save User
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
}

export default AddTasks
