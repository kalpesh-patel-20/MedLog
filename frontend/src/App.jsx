import React, { createContext, useReducer } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import OTPForm from "./components/Otp/OTPForm";
import Nav from "./components/Navigation/Nav";
import RegistrationForm from "./components/Register/RegistrationForm";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Bloodsearch from "./components/BloodSearch/Bloodsearch";
import Home from "./components/Home/Home";
import Admin from "./components/AdminDashboard/Admin";
import Patient from "./components/PatientDashboard/Patient";
import Hospital from "./components/HospitalDashboard/Hospital";
import Logout from "./components/Logout/Logout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initialState, reducer } from "./reducer/UseReducer";

export const UserContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
      
    <div className="App">
      <UserContext.Provider value={{state, dispatch}}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Admin />} />
          <Route path="/patientprofile" element={<Patient />} />
          <Route path="/adminprofile" element={<Admin />} />
          <Route path="/hospitalprofile" element={<Hospital />} />
          <Route path="/bloodsearch" element={<Bloodsearch />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
      </UserContext.Provider>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default App;
