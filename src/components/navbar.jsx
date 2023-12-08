import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
        <div className="navbar bg-orange-400">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#ff6c22] rounded-box w-52"
              >
                <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-xl text-gray-100">SpareCycle</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
          </div>
          <div className="navbar-end text-gray-100">
            <div>
                <MdOutlineShoppingCart className="text-3xl"/>
            </div>
            <div >
                <ul className="flex menu menu-horizontal px-1 text-lg gap-2 items-center hidden lg:flex">
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                </ul>
            </div>
          </div>
        </div>
    </>
  );
};
export default Navbar;
