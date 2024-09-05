import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PowerBIDashboard from "./components/dashboard/powerBIDashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./components/signIn/signIn";
import PrivateRoute from "./components/route/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <PowerBIDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
