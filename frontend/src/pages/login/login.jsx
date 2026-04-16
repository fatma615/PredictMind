import React, { useState } from "react";
import "./Login.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const Login = () => {

  const [action, setAction] = useState("");

  const registerLink = (e) => {
    e.preventDefault();
    setAction("active");
  };

  const LoginLink = (e) => {
    e.preventDefault();
    setAction("");
  };

  return (
    <div className={`wrapper ${action}`}>
      
      <div className="form-box login">
        <form>
          <h1>Login</h1>

          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>

          <div className="remember-forget">
            <label>
              <input type="checkbox" /> Remember me  
            </label>
            <a href="#"> Forget password</a>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>
              Don't have an account  
              <a href="#" onClick={registerLink}> Register</a>
            </p>
          </div>
        </form>
      </div>

      <div className="form-box Register">
        <form>
          <h1>Registration</h1>

          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <FaEnvelope className="icon" />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>

          <div className="remember-forget">
            <label>
              <input type="checkbox" /> I agree to the terms and conditions
            </label>
          </div>

          <button type="submit">Register</button>

          <div className="register-link">
            <p>
              Already have an account  
              <a href="#" onClick={LoginLink}> Login</a>
            </p>
          </div>
        </form>
      </div>

    </div>
  );
};

export default Login;