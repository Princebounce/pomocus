import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Auth = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        e;
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    // signout func
    signOut(auth)
      .then(() => {
        console.log("Sign out Sucessfull");
        // success
        toast.success("Signing Out", {
          autoClose: 2000,
        });

        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="user">
        {authUser && (
          <>
            <p> {`Signed In as ${authUser.email}`}</p>
            <button className="btn btn-primary" onClick={userSignOut}>
              Sign out
            </button>
          </>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default Auth;
