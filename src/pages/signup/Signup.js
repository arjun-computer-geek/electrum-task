import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate , Link} from "react-router-dom";

export const Signup = () => {
    const navigate = useNavigate()
    const [users, setUsers] = useState(localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [])
    const [userData, setUserData] = useState({})

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
      if (found) {
        toast.error('Email or userName is already Registered')
      }
      else {
        setUsers(prev => ([...prev, { ...userData }]))
        console.log(users)
        localStorage.setItem('users', JSON.stringify([...users, {...userData}]))
        toast.success("user registered Successfull")
        navigate('/login')
      }
    }
  };
    return (
        <main className="login-main">
            <div className="form-container">
                <h2>Register</h2>
                <form
                    onSubmit={registerSubmitHandler}
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
                    <Link to="/login">login</Link>
                </form>
            </div>
        </main>
    )
}
