import React, { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex items-center justify-between p-4 shadow-md">
      <div className="flex items-center">
        <span className="text-3xl text-indigo-600 mr-1 pt-2">
          
        </span>
        Pomocus
      </div>
      <div className="flex items-center space-x-4">
        <button>Report</button>
        <button>Settings</button>
        <div className="relative">
          <button onClick={toggleDropdown}>User</button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-8 bg-white p-4 shadow-md">
              <ul>
                <li>Account</li>
                <li>Logout</li>
                <li>Delete Account</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
