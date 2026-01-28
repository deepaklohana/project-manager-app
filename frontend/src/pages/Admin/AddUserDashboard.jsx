import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const AddUserDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5005/api/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // Form data handle karne ke liye (Optional)
  const handleSaveUser = (e) => {
    e.preventDefault();
    // Yahan API call ya data save logic aayega
    console.log("User Saved!");
  };
  return (
    <div className="mt-6 w-full">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#212529] text-[#ced4da] py-2 px-8 rounded-md active:bg-[#212529b6]"
      >
        Add User
      </button>
      <h2 className="mt-20 text-2xl font-medium mb-4">User List</h2>
      <table className="w-3/4 mx-auto mt-6 border-gray-200 text-left ">
        <thead>
          <tr className="">
            <th className="w-1/6">Name</th>
            <th className="w-2/6">Email</th>
            <th className="w-1/6">Role</th>
            <th className="w-2/6">Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {users.map((user) => (
            <tr key={user._id} className="border-t border-b ">
              <td className="p-1">{user.name}</td>
              <td className="p-1">{user.email}</td>
              <td className="p-1">{user.role}</td>
              <td className="p-1">
                <div className="flex gap-2">
                  <button  className="bg-amber-400 text-md font-semibold py-2 px-8 rounded-md active:bg-amber-300">
                    Edit
                  </button>
                  <button className="bg-red-500 text-md font-semibold py-2 px-8 rounded-md active:bg-red-400">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="text-xl font-semibold mb-4">Add User</h2>
            <form
              className="flex flex-col gap-3"
              action=""
              onSubmit={handleSaveUser}
            >
              <input
                className="h-8 text-lg pl-2 border-[1.5px] rounded border-[#212529b6] "
                type="text"
                placeholder="Name"
                required
              />
              <input
                className="h-8 text-lg pl-2 border-[1.5px] rounded border-[#212529b6]"
                type="email"
                placeholder="E-mail"
                name=""
                id=""
                required
              />
              <select
                className="h-8 text-lg pl-2 border-[1.5px] rounded border-[#212529b6]"
                name="select"
                id="select"
              >
                <option value="manager"> Manager</option>
                <option value="employee">Employee</option>
              </select>
              <div className="flex justify-end">
                <div className="flex gap-2 mt-6">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-red-700 text-[#ced4da] py-2 px-8 rounded-md active:bg-red-500"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-700 text-[#ced4da] py-2 px-8 rounded-md active:bg-blue-500"
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
};

export default AddUserDashboard;
