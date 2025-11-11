import React, { useState, useContext } from "react";
import "./login.css";
import email_icon from "../components/email.png";
import password_icon from "../components/password.png";
import person_icon from "../components/person.png";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [action, setAction] = useState("Sign Up");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); // mark user as logged in
    navigate("/"); // redirect to home page
  };

  return (
    <div className="container">
      <div className="headerL">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <img src={person_icon} alt="" />
            <input type="text" placeholder="username" />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="password" />
        </div>
      </div>

      {action === "Sign Up" ? null : (
        <div className="forgot-password">
          Forgot Password? <span>Click here</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={handleLogin}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
