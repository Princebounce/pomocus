import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { MdWorkspacePremium } from "react-icons/md";
import Report from "../Nav/Report";
import Settings from "../Nav/Settings";
import pomocus from "../../assets/images/pomocus.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext"; // Assuming you have AuthContext
import { signOut } from "firebase/auth"; // Import signOut from firebase
import { auth } from "../../firebase"; // Import your Firebase authentication

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { currentUser } = useAuth(); // Get the current authenticated user
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout failed:", error.message);
      });
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex items-center justify-between p-4 shadow-md">
      <div className="flex items-center">
        <img src={pomocus} alt="Logo" />
        Pomocus
      </div>
      <div className="flex items-center space-x-4">
        <button>
          <Report />
        </button>
        <button>
          <Settings />
        </button>
        {/* Profile Dropdown */}
        <div className="relative">
          <button onClick={toggleDropdown} className="hover:bg-customPink focus:outline-none">
            <FaUser className="text-xl" />
          </button>
          {currentUser ? (
            <span className="ml-2">Welcome, {currentUser.email}</span> // Display current user
          ) : (
            <span className="ml-2">Welcome, Guest</span>
          )}

          {dropdownOpen && (
            <div className="absolute right-0 mt-8 w-48 bg-white text-teal-500 p-4 shadow-md rounded-md z-20">
              <ul className="text-left">
                <li className="py-2 hover:bg-gray-100 cursor-pointer">
                  <FaUser className="inline-block mr-2" />
                  Account
                </li>
                <li className="py-2 hover:bg-gray-100 cursor-pointer">
                  <MdWorkspacePremium className="inline-block mr-2" />
                  Premium
                </li>
                <li className="py-2 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>
                  <IoLogOut className="inline-block mr-2" />
                  Logout
                </li>
                <li className="py-2 hover:bg-gray-100 cursor-pointer">
                  <MdDelete className="inline-block mr-2" />
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
