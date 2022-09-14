import React, { useEffect, useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [userData, setUserData] = useState({})
  const [users, setUsers] = useState(localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [])
  const navigate = useNavigate()
  
  const onchangeHandler = (e) => {
    setUserData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const loginSubmitHandler =(e) => {
    e.preventDefault();
    if (userData.email === undefined || userData.password === undefined ) {
      toast.error("field can't be empty")
    }
    else{
      console.log(users)
      let found = users.find(item => item.userName === userData.email || item.email === userData.email )
      if(found && found.password === userData.password){
        localStorage.setItem('loggedInUser', JSON.stringify(userData))
        toast.success("Loggedin Successfull");
        navigate('/')
      }
      else{
        toast.error('userName or email or password is incorrect')
      }
    }
  }

  return (
    <main className="login-main">
      <div className="form-container">
        <h2>Login</h2>

        <form
          onSubmit={loginSubmitHandler}
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
