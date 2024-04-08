import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { logout } from "../functions/auth";
import { updateData } from "../functions/curd";

const UserDashboard = () => {

  

  const { user } = UserAuth();
  const [newFirstName, setnewFirstName] = useState();
  // console.log("user is",user)
  const handleLogout = () => {
    logout();
  };

  function handleUpdate() {
    updateData("users",user.uid,{firstName:newFirstName})
  }

  return (
    <>
      <div>welcome {user?.firstName}</div>
      <button onClick={handleLogout}>logout</button>
      <input type="text" placeholder="new first name" onChange={(e)=>setnewFirstName(e.target.value)}/>
      <button onClick={handleUpdate}>update data</button>
    </>
  );
};

export default UserDashboard;
