import React, { useState } from "react";
import { signup } from "../functions/auth";
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const handleCreateUser = () => {
    alert("ok")
    const userData = {
      firstName,
      lastName,
      email,
      password,
    };
      
    signup(email, password, userData);
    navigate('/dash');
  };

  return (
    <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto bg-slate-400 p-7 ">
      <input
        type="text"
        placeholder="first name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="last name"
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleCreateUser} className="bg-blue-400 text-white">Register</button>
    </div>
  );
};

export default CreateUser;
