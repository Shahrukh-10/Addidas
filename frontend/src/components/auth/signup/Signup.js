import React, { useState } from "react";
import "./signup.css";
import { useNavigate,Link } from "react-router-dom";

const Signup = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({username:"", email: "", password: "" });
  const host = "http://localhost:5000";
  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username : credentials.username,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.token);
      localStorage.setItem("success", json.success);
      alert("Account created successfully ... ");
      navigate("/");
    } else {
      alert(json.error);
      navigate("/signup");
    }
    console.log(json);
  };
  return (
    <div className="login">
      <div className="loginHeader">
        <form onSubmit={handleSubmit}>
          <div className="innerLogin">
            <h1>Create Account</h1>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={credentials.username}
              onChange={onChange}
              required
              minLength={5}
              name="username"
              id="username"
            />
            <br />
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              value={credentials.email}
              onChange={onChange}
              required
              name="email"
              id="email"
            />
            <br />
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              minLength={8}
              required
              name="password"
              id="password"
              value={credentials.password}
              onChange={onChange}
            />
            <div className="receiveMail">
              <input
                type="checkbox"
                id="subscribe"
                name="subscribe"
                value="subscribe"
              />
              &nbsp;
              <label htmlFor="subscribe"> Want to receive mail ?</label>
            </div>
            <button type="submit">Login</button>
            <br />
            <Link to="/login">Already have account ? Login here :)</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
