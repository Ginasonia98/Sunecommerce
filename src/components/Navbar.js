import React from "react";
import "../App.css";

const Navbar = ({ setToken }) => {
  const logOutHandler = () => {
    setToken("");
    localStorage.clear();
  };
  return (
    <div className="topnav ">
      <div className="content-navbar">
        <img
          src="https://img.icons8.com/fluency/1x/e-commerce.png"
          alt="EcommerceApp"
          className="ecommerce-icon"
          style={{ maxWidth: "50px", height: "50px" }}
        />
        <div className="ecommerce-text">Shop Sun</div>
        <div className="topnav-right">
          <button className="log-out-btn" onClick={() => logOutHandler()}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
