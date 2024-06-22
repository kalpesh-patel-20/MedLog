import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import Logout from "../Logout/Logout";
import { UserContext } from "../../App";
import { role } from "../Login/LoginForm";

function Nav() {
  const { state } = useContext(UserContext);

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
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={profileRoute}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              PROFILE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bloodsearch"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              BLOOD SEARCH
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={({ isActive }) => (isActive ? "active" : "")}
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
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              LOGIN
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              REGISTER
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <div className="navigation">
      <ul>
        <RenderMenu />
      </ul>
    </div>
  );
}

export default Nav;
