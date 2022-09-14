import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  
  return (
    <nav className="nav nav-boxshadow">
      <Link to="/" className="brand my-brand">
        <h1 className="brand-name">Welcome To Task</h1>
      </Link>
      
      <div className="nav-icons">
        
          <Link to="/signup">
            <i className="fa fa-user"></i>
            <span className="nav-icon-text">Register</span>
          </Link>
        
          <Link to="/login">
            <i className="fa fa-user"></i>
            <span className="nav-icon-text">Login</span>
          </Link>
        
      </div>
    </nav>
  );
};
