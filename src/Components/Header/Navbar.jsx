import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <Link to="/">
        <li className="m-2">Home</li>
      </Link>
      <Link to="/readList">
        <li className="m-2">Read Books</li>
      </Link>
      <Link to="/pages-to-read">
        <li className="m-2">Listed Books</li>
      </Link>
      <Link to="/about">
        <li className="m-2">About</li>
      </Link>
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#FFFFFF]  text-[#131313] mt-4 w-[90%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-[#FFFFFF]  text-[#131313] rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links} 
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          <a className="btn border-0 bg-[#23BE0A] ">Sign In</a>
          <a className="btn border-0 bg-[#59C6D2]">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
