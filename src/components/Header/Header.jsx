import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-orange-400 py-4">
      <div className="container mx-auto justify-between flex-wrap gap-3">
      <div>
        <a className="font-bold text-2xl ">MealDB</a>
      </div>
      <div className="flex items-center gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="rounded-full px-6 py-3 input"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/public/profile.jpg" />
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
