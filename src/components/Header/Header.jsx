import React from "react";
import logo from "../../images/logo.png";
import profileImage from "../../images/profile.jpg"

const Header = ({handleChange, inputText}) => {

  return (
    <div className="navbar bg-gray-600 py-2">
      <div className="container mx-auto justify-between flex-wrap gap-3">
      <div className="flex items-center gap-2">
      <img className="w-20" src={logo} alt="" /> 
        <a className="font-bold text-2xl text-white"> MealDB</a>
      </div>
      <div className="flex items-center gap-2">
        <div className="form-control">
          <input
            onChange={handleChange}
            value={inputText}
            type="text"
            placeholder="Search"
            className="rounded-full px-6 py-3 input"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src= {profileImage}/>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Header;
