import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Pomocus from "./components/Pomocus/Pomocus";
import Home from "./components/Home/Home";
import Login from "./application/Nav/User/Login";
import Signup from "./application/Nav/User/Signup";
import ForgotPassword from "./application/Nav/User/ForgotPassword";
import { AuthProvider } from "./application/AuthContext";
import PrivateRoute from "././application/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/newpage"
            element={
              <PrivateRoute>
                <Pomocus />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
