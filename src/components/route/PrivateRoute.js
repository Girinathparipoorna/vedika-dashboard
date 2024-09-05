import React from "react";
import { Navigate } from "react-router-dom";

// Function to check if the user is authenticated
const isAuthenticated = () => {
  // Check if a token exists in localStorage
  return localStorage.getItem("token") !== null;
};

// PrivateRoute component to handle authenticated access
const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

export default PrivateRoute;
