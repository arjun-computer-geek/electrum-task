import React, { useEffect, useState } from "react";
import "./login.css";
import { toast } from "react-toastify";

export const Login = () => {
  // toggling UI
  const [regTransform, setRegTransform] = useState("translateX(0)");
  const [loginTransform, setLoginTransform] = useState("translateX(0)");
  const [indicatorTransform, setIndicatorTransform] = useState(
    "translateX(6.25rem)"
  );
  const [users, setUsers] = useState(localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [])

  const [userData, setUserData] = useState({})

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])


  const toggleLogin = () => {
    setRegTransform("translateX(0)");
    setLoginTransform("translateX(0)");
    setIndicatorTransform("translateX(6.25rem)");
  };

  const toggleRegister = () => {
    setRegTransform("translateX(18.75rem)");
    setLoginTransform("translateX(18.75rem)");
    setIndicatorTransform("translateX(0px)");
  };
  const onchangeHandler = (e) => {
    setUserData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // RegisForm submit Handler function
  const registerSubmitHandler = (e) => {
    e.preventDefault();
    if (userData.firstName === undefined || userData.lastName === undefined || userData.email === undefined || userData.password === undefined || userData.confirmPassword === undefined) {
      toast.error("field can't be empty")
    }
    else if (userData.password !== userData.confirmPassword) {
      toast.error('password and confirm password are not same')
    }
    else {
      let found = users.some(item => item.userName === userData.userName || item.email === userData.email)
      if(found){
        toast.error('Email or userName is already Registered')
      }
      else{
        setUsers(prev => ([...prev, { ...userData }]))
        toast.success("user registered Successfull")
      }
    }
  };
  return (
    <main className="login-main">
      <div className="form-container">
        <div className="form-btn">
          <span id="register-toggler" onClick={toggleRegister}>
            Register
          </span>
          <span id="login-toggler" onClick={toggleLogin}>
            Login
          </span>
          <hr id="indicator" style={{ transform: indicatorTransform }} />
        </div>

        <form
          // onSubmit={loginSubmitHandler}
          id="loginForm"
          style={{ transform: loginTransform }}
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

        {/* signup form */}

        <form
          onSubmit={registerSubmitHandler}
          id="regForm"
          style={{ transform: regTransform }}
        >
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={userData?.firstName}
            onChange={onchangeHandler}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={userData?.lastName}
            onChange={onchangeHandler}
          />
          <input
            type="text"
            placeholder="User Name"
            name="userName"
            value={userData?.userName}
            onChange={onchangeHandler}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
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
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={userData?.confirmPassword}
            onChange={onchangeHandler}
          />
          <button type="submit" className="btn">
            Register
          </button>
        </form>
      </div>
    </main>
  );
};
