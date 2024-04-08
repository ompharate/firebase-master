import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({children}) => {
  return (
    <div>
      <nav className="flex item-center gap-x-4 ">
        <Link to={"/" } className="text-blue-500 hover:text-blue-700">Home</Link>
        <Link to={"/login"} className="text-blue-500 hover:text-blue-700">Login</Link>
        <Link to={"create-user"} className="text-blue-500 hover:text-blue-700">Register</Link>
      </nav>
      {children}
    </div>
  );
};

export default NavBar;
