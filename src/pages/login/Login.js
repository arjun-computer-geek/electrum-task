import React, { useEffect, useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [userData, setUserData] = useState({})

  const onchangeHandler = (e) => {
    setUserData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <main className="login-main">
      <div className="form-container">
        <h2>Login</h2>

        <form
          // onSubmit={loginSubmitHandler}
        >
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={userData?.email}
            onChange={onchangeHandler}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData?.password}
            onChange={onchangeHandler}
          />
          <button type="submit" className="btn">
            Login
          </button>
          <a className="forgot-password" href="">
            Forgot Password
          </a>
        </form>
      </div>
    </main>
  );
};
