// src/components/Logout.js

import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase"; // Assuming firebase config is in src/firebase.js
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const Logout = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out successfully");
        navigate("/"); // Redirect to login page after successful logout
      })
      .catch((error) => {
        toast.error("Failed to logout: " + error.message);
      });
  };

  return (
    <>
      {currentUser && (
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      )}
    </>
  );
};

export default Logout;
