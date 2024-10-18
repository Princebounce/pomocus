import React, { useState } from "react";
import { auth } from "../../../firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import googlelogo from "../../../assets/images/web_light_sq_na.svg";

// Initialize Google provider
const googleProvider = new GoogleAuthProvider();

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  // Handle email/password signup
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      showErrorToast("Passwords do not match!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        showSuccessToast("Account created successfully!");
        setTimeout(() => {
          navigate("/"); // Redirect after signup
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
        showErrorToast("Signup failed!");
      });
  };

  // Handle Google sign-up
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        showSuccessToast("Google sign-in successful!");
        navigate("/"); // Redirect after Google sign-in
      })
      .catch((error) => {
        console.error(error);
        showErrorToast("Google sign-in failed!");
      });
  };

  const showSuccessToast = (message) => {
    toast.success(message, { autoClose: 2000 });
  };

  const showErrorToast = (message) => {
    toast.error(message, { autoClose: 2000 });
  };

  return (
    <>
      <div className="auth-form-container flex justify-center items-center min-h-screen bg-customPink">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Signup
          </h2>
          <form
            className="signup-form space-y-6"
            noValidate
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="example@gmail.com"
                id="email"
                name="email"
                className="mt-1 block w-full p-3 border border-customGray rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-customPink focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="********"
                id="password"
                name="password"
                className="mt-1 block w-full p-3 border border-customGray rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-customPink focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="********"
                id="confirm-password"
                name="confirm-password"
                className="mt-1 block w-full p-3 border border-customGray rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-customPink focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-customPink rounded-md hover:bg-customPink focus:outline-none focus:ring-2 focus:ring-customPink focus:ring-opacity-50"
            >
              Sign Up
            </button>
          </form>

          {/* Google Signup Button */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full mt-6 flex justify-center items-center px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 focus:outline-none"
          >
            <img src={googlelogo} alt="Google logo" className="w-5 h-5 mr-2" />
            Sign Up with Google
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signup;
