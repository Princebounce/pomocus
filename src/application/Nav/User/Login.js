import React, { useState } from "react";
import { auth, googleProvider } from "../../../firebase"; // Import the Google Provider
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"; // Import signInWithPopup for Google login
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import googlelogo from "../../../assets/images/web_light_sq_na.svg"



const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticate, setAuthenticate] = useState(false);

  const navigate = useNavigate(); // Initialize the navigate hook

  const handleLoginClick = () => {
    navigate("/signup"); // This will navigate to the signup page
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        showSuccessToast();
        setTimeout(() => {
          navigate("/newpage");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        showErrorToast();
      });

    setAuthenticate(true);
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider) // Google login with popup
      .then((result) => {
        const user = result.user;
        console.log("Google User:", user);
        showSuccessToast();
        setTimeout(() => {
          navigate("/newpage"); // Redirect on successful login
        }, 3000);
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error);
        showErrorToast();
      });
  };

  const showSuccessToast = () => {
    toast.success("Success", { autoClose: 2000 });
  };

  const showErrorToast = () => {
    toast.error("Invalid email and password!", { autoClose: 2000 });
  };

  return (
    <>
      <div className="auth-form-container flex justify-center items-center min-h-screen bg-customPink">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Login
          </h2>
          <form
            className="space-y-6"
            noValidate
            authenticate={authenticate}
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
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-customPink rounded-md hover:bg-customPink focus:outline-none focus:ring-2 focus:ring-customPink focus:ring-opacity-50"
            >
              Log In
            </button>
          </form>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full mt-6 flex justify-center items-center px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 focus:outline-none"
          >
            <img src={googlelogo}
               alt="Google logo"
               className="w-5 h-5 mr-2"
             />
             Sign in with Google
          </button>

          <NavLink className=" " to="/signup">
            <button
              className="w-full mt-6 text-center text-customPink hover:underline focus:outline-none"
              onClick={handleLoginClick}
            >
              Don't have an account? Signup.
            </button>
          </NavLink>
          <NavLink to="/forgot-password">
            <button className="w-full mt-6 text-center text-customPink hover:underline focus:outline-none">
              Forgot Password?
            </button>
          </NavLink>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
