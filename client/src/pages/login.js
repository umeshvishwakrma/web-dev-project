import React,{useState} from "react";
import './login.css';
import email_icon from '../components/email.png';
import password_icon from '../components/password.png';
import person_icon from '../components/person.png';
const Login=()=>{
    const [action,setAction]=useState("Sign UP");
    return(
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className='inputs'>
                {action==="Login" ? <div></div> :
                <div className='input'>
                    <img src={person_icon} alt="" />
                    <input type="text" placeholder='username' />
                </div>}
                <div className='input'>
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='email' />
                </div>
                <div className='input'>
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='password' />
                </div>
            </div>
            {action==="Sign Up" ?<div></div> :
            <div className="forgot-password">Forgot Password? <span>Click here</span></div>}
            <div className='submit-container'>
                <div className={action==="Login" ? "submit gray":"submit" } onClick={()=>{setAction("Sign Up")}} >Sign Up</div>
                <div className={action==="Sign Up" ? "submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    )
}
export default Login;