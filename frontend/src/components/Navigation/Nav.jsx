import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import Logout from "../Logout/Logout";
import { UserContext } from "../../App";
import { role } from "../Login/LoginForm";

function Nav() {
  const { state } = useContext(UserContext);
  const [menuActive, setMenuActive] = useState(false);

  const RenderMenu = () => {
    if (state) {
      let profileRoute;
      switch (role) {
        case "Patient":
          profileRoute = "/patientprofile";
          break;
        case "Hospital":
          profileRoute = "/hospitalprofile";
          break;
        case "Admin":
          profileRoute = "/adminprofile";
          break;
        default:
          profileRoute = "/profile";
      }

      return (
        <>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuActive(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={profileRoute}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuActive(false)}
            >
              PROFILE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bloodsearch"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuActive(false)}
            >
              BLOOD SEARCH
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuActive(false)}
            >
              ABOUT US
            </NavLink>
          </li>
          <Logout />
        </>
      );
    } else {
      return (
        <>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuActive(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuActive(false)}
            >
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuActive(false)}
            >
              LOGIN
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuActive(false)}
            >
              REGISTER
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <nav className="navigation">
      <div className="topnav">
        <div className={`menu-links ${menuActive ? "active" : ""}`}>
          <ul>
            <RenderMenu />
          </ul>
        </div>
        <div className="hamburger" onClick={() => setMenuActive(!menuActive)}>
          <div className={`bar ${menuActive ? "animate" : ""}`}></div>
          <div className={`bar ${menuActive ? "animate" : ""}`}></div>
          <div className={`bar ${menuActive ? "animate" : ""}`}></div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
