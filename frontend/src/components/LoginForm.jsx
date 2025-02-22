import React, { useState } from "react";
import "./LoginForm.css"; // Import the CSS file

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
<div
  className="LoginPage"
  style={{
    backgroundImage: "url('/background_for_login.png')",
    backgroundSize: "cover", // Ensures the image covers the entire page
    backgroundPosition: "top center", // Aligns the image properly
    backgroundRepeat: "no-repeat",
    filter: "brightness(0.75)",
    height: "100vh", // Ensures full screen
    width: "100vw",
  }}
>
<img className="image_for_login" src= "/stallion-logo.webp" alt="stallion logo"/>
    <img className="Inverted_image_for_login" src= "/inverted_logo.png" alt="stallion logo"/>
    <div className="login-box">
      <p>Login</p>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input 
            type="email" 
            required 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <label>Email</label>
        </div>

        <div className="user-box">
          <input 
            type="password" 
            required 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <label>Password</label>
        </div>

        <button type="submit" className="submit-button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>

      <p>
        Don't have an account? <a href="#" className="a2">Sign up!</a>
      </p>
    </div>
    </div>
  );
}

export default LoginForm;
