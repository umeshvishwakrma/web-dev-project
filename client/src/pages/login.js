import React, { useState} from "react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import "./login.css";
import email_icon from "../components/email.png";
import password_icon from "../components/password.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }
  
      // Save the user name
    const userData = {
      username: data.username,
      email:email,
    };

    // Save user globally (AuthContext)
    login(userData,data.token);

    console.log("Saved user →", userData);


      navigate("/"); // redirect home

    } catch (error) {
      console.log(error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="container">
      <div className="headerL">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="submit-container">
        <div
          className="submit"
          onClick={handleLogin}
        >
          Login
        </div>
      </div>

      <div className="User">
        <p>
          New user?{" "}
          <Link
            to="/signup"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
