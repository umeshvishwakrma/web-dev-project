import React, { useState } from "react";
import "./login.css";
import email_icon from "../components/email.png";
import person_icon from "../components/person.png";
import password_icon from "../components/password.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }
    if (emailError) {
      alert("Please enter a valid email.");
      return;
    }

    try {
      const result = await axios.post(
        "http://localhost:5000/api/auth/signup",   // <-- backend route
        { name, email, password }
      );

      console.log(result.data);

      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      console.log(err);
      alert("Signup failed! Check console for details.");
    }
  };

  return (
    <div className="container">
      <div className="headerL">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={person_icon} alt="" />
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input">
          <img src={email_icon} alt="" />
          <input
  type="email"
  placeholder="Email"
  onChange={(e) => {
    const value = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value.trim())) {
      setEmail(value);
      setEmailError("Invalid email format");
    } else {
      setEmail(value.trim());
      setEmailError(""); 
    }
  }}
/>
{emailError && <p className="error-text">{emailError}</p>}

        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="submit-container">
        <div className="submit" onClick={handleSubmit}>
          Sign Up
        </div>
      </div>

      <div className="User">
        <p>
          Already have an account?{" "}
          <Link
            to="/login"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
