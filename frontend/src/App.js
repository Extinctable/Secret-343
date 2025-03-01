import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar"; // The NavBar
import LoginForm from "./components/LoginForm"; // The LoginForm
import AboutUs from "./components/AboutUsPage/AboutUs";
import "./App.css"; // any global styles

function Home() {
  return <h2>Home Page balls</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}



/**
 * Renders the NavBar and Main Content
 */
function MainLayout() {
  const location = useLocation();

  // Hide NavBar on login page
  const hideNavOnLoginPage = location.pathname === "/login";

  return (
    <>
      {/* Show NavBar unless on the login page */}
      {!hideNavOnLoginPage && <NavBar />}

      {/* Main Content */}
      <div className="home">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Book-Session" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </>
  );
}

/**
 * The main application component.
 * Sets up routing and displays the appropriate components.
 */
function App() {
  return (
    <Router>
      <Routes>
        {/* MainLayout wraps most pages */}
        <Route path="/*" element={<MainLayout />} />

        {/* About Us is separate and renders on its own */}
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
