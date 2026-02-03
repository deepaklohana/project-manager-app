import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "sonner";
import { deleteUser, getUser, postUser, updatedUser } from "../../api/UserApi";
const AddUserDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [addUser, setAddUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "manager",
  });
  const [editUser, setEditUser] = useState({});
  
  const isEmpty = Object.keys(editUser).length === 0;

/* ================= FETCH USERS ================= */
//get users data
useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const res = await getUser();
    setUsers(res.data);
    console.log("Check");
  };
  
  /* ================= INPUT CHANGE ================= */
  const inputFieldChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  
    setAddUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  useEffect(() => {
    if (editUser && Object.keys(editUser).length > 0) {
      setAddUser({
        name: editUser.name || "",
        email: editUser.email || "",
        password: "",
        role: editUser.role || "",
      });
    }
  }, [editUser]);


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

  // Add (Post) User

  const addUserData = async () => {
    try {
      const res = await postUser(addUser);

      if (res.status === 200 || res.status === 201) {
        // OPTION 1 (RECOMMENDED): backend se fresh list
        await getUserData();

        // modal close
        setIsOpen(false);

        // form reset
        setAddUser({
          name: "",
          email: "",
          password: "",
          role: "manager",
        });
      }
    } catch (error) {
      console.log("User add failed:", error);
    }
  };

  const handleSaveUser = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;

    if (action === "Save User") {
      addUserData();
      toast.success("User has been created");
    } else if (action === "Update") {
      editUserData();
      
    }
    console.log("User Saved!");
  };
  //Update User(patch)
  const handleeditUser = (user) => {
    setEditUser(user);
    setIsOpen(true);
  };
  const closeModelBox = () => {
    setIsOpen(false);
    setEditUser({})
    setAddUser({
      name: "",
      email: "",
      password: "",
      role: "manager",
    });
  };

  const editUserData = async () => {
    try {
      const payload = { ...addUser };
      delete payload.password; // 🔒 REMOVE PASSWORD
      const res = await updatedUser(editUser._id, payload);
      if (res.status === 200) {
        await getUserData();
        setEditUser({});
        setIsOpen(false);
        toast.success("User updated");
      }
    } catch (error) {
      console.log(error);
      toast.error("Update failed");
    }
  };

  return (
    <div className="mt-6 w-full">
      <button
        onClick={() => {
          setIsOpen(true)
          setEditUser({})
          setAddUser({
            name: "",
            email: "",
            password: "",
            role: "manager",
          });
        }}
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
                  <button
                    className="bg-amber-400 text-md font-semibold py-2 px-8 rounded-md active:bg-amber-300"
                    variant="outline"
                    onClick={() => {
                      handleeditUser(user);
                    }}
                  >
                    Edit
                  </button>
                  {user.role !== "admin" && (
                    <button
                      onClick={() => {
                        handleDeleteUser(user._id);
                        toast.success("User Deleted");
                      }}
                      variant="outline"
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

      {/* add user & update user form */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="text-xl font-semibold mb-4">{isEmpty ? "Add User" : "Update User"}</h2>
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
                  required
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
                <label htmlFor="password">{isEmpty ? "Create Password" : ""}</label>
                {isEmpty && (
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
                )}
              </div>
              <div className="flex justify-end">
                <div className="flex gap-2 mt-6">
                  <button
                    type="button"
                    onClick={closeModelBox}
                    className="bg-red-700 text-[#ced4da] py-2 px-8 rounded-md active:bg-red-500"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-700 text-[#ced4da] py-2 px-8 rounded-md active:bg-blue-500"
                    variant="outline"
                    value={isEmpty ? "Save User" : "Update"}
                  >
                    {isEmpty ? "Save User" : "Update"}
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