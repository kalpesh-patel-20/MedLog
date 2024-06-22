import React, {useContext} from "react";
import { useNavigate} from "react-router-dom";
import "./Logout.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../App";

const Logout = () => {
  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      let response;
      fetch("/api/v1/Patient-Tracker/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          dispatch({ type: "USER", payload: false });
          toast.success("Logout Successfully", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/login");
        });
      console.log("Logout from account");
    } catch (error) {
      console.log("Logout : ", error);
    }
  };

  return (
    <button className="logout-button" onClick={handleLogout}>
      LOGOUT
    </button>
  );
};

export default Logout;
