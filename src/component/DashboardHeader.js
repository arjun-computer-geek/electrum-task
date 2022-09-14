import React, { useEffect, useState } from "react";
import { Link , useNavigate} from "react-router-dom";

export const DashboardHeader = () => {
    const [currentUser,setCurrentUser] = useState(localStorage.getItem("loggedInUser")
    ? JSON.parse(localStorage.getItem("loggedInUser"))
    : null);
    const navigate = useNavigate()
    useEffect(() => {
        if(!currentUser){
            return navigate("/login")
        }
    },[currentUser])
    
    const logoutHandler = () => {
        localStorage.removeItem("loggedInUser")
        setCurrentUser(null)
    }
  return (
    <nav className="nav nav-boxshadow">
      <Link to="/dashboard" className="brand my-brand">
        <h1 className="brand-name">Hi! {currentUser?.firstName} {currentUser?.lastName}</h1>
      </Link>
      
      <div className="nav-icons">
          <button className="btn btn-primary" onClick={logoutHandler}>
            <span className="nav-icon-text">Logout</span>
          </button>
      </div>
    </nav>
  );
};
