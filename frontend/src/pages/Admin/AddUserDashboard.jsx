import React, { useState } from "react";
import { useEffect } from "react";
import { deleteUser, getUser, postUser } from "../../api/UserApi";
const AddUserDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [addUser, setAddUser] = useState({
    name: "",
    email: '',
    password: '',
    role: '',

  });

  useEffect(() => {
    getUserData();
  }, []);

  //get users data
  const getUserData = async () => {
    const res = await getUser();
    setUsers(res.data);
    console.log("Check");
  };



  //delete user
  const handleDeleteUser = async (id) => {
    try {
      const res = await deleteUser(id);
      if (res.status === 200) {
        const remainUsers = users.filter((user) => user._id !== id);
        setUsers(remainUsers);
      } else {
        console.log("failed to delete the user");
      }
    } catch (error) {
      console.log("Delete Failed: ", error);
    }
  };

  // Form data handle karne ke liye (Optional)
  const inputFieldChange= (e)=>{
    const name= e.target.name
    const value= e.target.value

    setAddUser(prev=>({
      ...prev,
      [name]:value
    }))
  }

  const addUserData  =async()=>{
    const res =  await addUser(postUser)
    if((res.status=200)){
      setUsers([...user,res.user])
    }
  }
    //Form submit karne ke liye
  const handleSaveUser = (e) => {
    e.preventDefault();
    addUserData()
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
                  <button className="bg-amber-400 text-md font-semibold py-2 px-8 rounded-md active:bg-amber-300">
                    Edit
                  </button>
                  {user.role !== "admin" && (
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="bg-red-500 text-md font-semibold py-2 px-8 rounded-md active:bg-red-400"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* add user form */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="text-xl font-semibold mb-4">Add User</h2>
            <form
              className="flex flex-col gap-3"
              action=""
              onSubmit={handleSaveUser}
            >
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-black/70 ">
                  Enter Full Name
                </label>
                <input
                  className="h-8 text-lg pl-2 border-[1.5px] rounded border-[#212529b6] "
                  type="text"
                  placeholder="Name"
                  required
                  name="name"
                  id="name"
                  value={addUser.name}
                  onChange={inputFieldChange}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="role" className="text-black/70 ">
                  Select Role:
                </label>
                <select
                  className="h-8 text-lg pl-2 border-[1.5px] rounded border-[#212529b6]"
                  name="role"
                  id="role"
                  value={addUser.role}
                  onChange={inputFieldChange}
                >
                  <option value="manager"> Manager</option>
                  <option value="employee">Employee</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Enter Email</label>
                <input
                  className="h-8 text-lg pl-2 border-[1.5px] rounded border-[#212529b6]"
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  id="email"
                  value={addUser.email}
                  onChange={inputFieldChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="password">Enter Password</label>
                <input
                  className="h-8 text-lg pl-2 border-[1.5px] rounded border-[#212529b6]"
                  type="password"
                  onChange={inputFieldChange}
                  value={addUser.password}
                  placeholder="Password"
                  name="password"
                  id="password"
                  required
                />
              </div>
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
