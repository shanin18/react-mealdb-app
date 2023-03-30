import React from "react";
import logo from "../../images/logo.png";
import profileImage from "../../images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = ({ handleChange, inputText, handleCartBtn, totalQuantity }) => {
  return (
    <div className="navbar bg-gray-600 py-2">
      <div className="container mx-auto justify-between flex-col md:flex-row">
        <div className="flex items-center gap-2">
          <img className="w-20" src={logo} />
          <a className="font-bold text-2xl text-white"> MealDB</a>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="form-control">
            <input
              onChange={handleChange}
              value={inputText}
              type="text"
              placeholder="Search"
              className="rounded-full px-6 py-3 input"
            />
          </div>
          <div className="mx-4 relative">
            <button
              onClick={handleCartBtn}
              className="text-2xl relative text-black"
            >
              <FontAwesomeIcon className="ml-2" icon={faShoppingCart} />
            </button>
            <small className="bg-yellow-400 font-semibold px-2 rounded-full absolute -top-2 left-5">
              {totalQuantity}
            </small>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={profileImage} />
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
