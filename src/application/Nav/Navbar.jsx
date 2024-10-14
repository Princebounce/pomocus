import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { MdWorkspacePremium } from "react-icons/md";
import SignIn from "../Nav/SignIn";
import Report from "../Nav/Report";
import Settings from "../Nav/Settings";
const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex items-center justify-between p-4 shadow-md">
      <div className="flex items-center">
        <span className="text-3xl text-indigo-600 mr-1 pt-2"></span>
        Pomocus
      </div>
      <div className="flex items-center space-x-4">
        <button><Report/></button>
        <button> <Settings/> </button>
        <div className="relative">
          <button onClick={toggleDropdown}><SignIn /></button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-8 w-48 bg-white text-teal-500 p-4 shadow-lg rounded-md z-20">
            <ul className="text-left">
              <li className="flex items-center py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200">
                <FaUser className="mr-2" />
                Account
              </li>
              <li className="flex items-center py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200">
                <MdWorkspacePremium className="mr-2" />
                Premium
              </li>
              <li className="flex items-center py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200">
                <IoLogOut className="mr-2" />
                Logout
              </li>
              <li className="flex items-center py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200">
                <MdDelete className="mr-2" />
                Delete Account
              </li>
            </ul>
          </div>
          
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
