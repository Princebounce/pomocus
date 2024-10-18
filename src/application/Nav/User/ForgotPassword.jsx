import React, { useState } from "react";
import { auth } from "../../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent!", {
          autoClose: 3000,
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to send reset email. Please check the email address.", {
          autoClose: 3000,
        });
      });
  };

  return (
    <div className="auth-form-container flex justify-center items-center min-h-screen bg-customPink">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800">Forgot Password</h2>
      <form onSubmit={handleForgotPassword}>
        <label className="block text-sm font-medium text-gray-700" htmlFor="email">Enter your email address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@gmail.com"
          required
          className="mt-1 block w-full p-3 border border-customGray rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-customPink focus:border-transparent"
                  />
        <button className="w-full px-4 py-2 text-white bg-customPink rounded-md hover:bg-customTeal focus:outline-none focus:ring-2 focus:ring-customPink focus:ring-opacity-50"
             type="submit">Send Reset Email</button>
      </form>
      <ToastContainer />
      </div>
    </div>
  );
};

export default ForgotPassword;
