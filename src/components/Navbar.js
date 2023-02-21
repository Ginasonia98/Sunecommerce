import "../App.css";
import { Link } from "react-router-dom";
import UserList from './UserList';
import React, { useState, useEffect } from "react";


function Header({ setToken }) {
  const logOutHandler = () => {
    setToken("");
    localStorage.clear();
  };
  const [users, setUsers] = useState([
    { name: 'mor_2314' },
  ]);

  return (
    <header className="header">
      <div className="header__logo">
        <div className="flex items-center">
          {/* <img className="img-fluid bg-transparent logo" src={sun} alt="e-commerce sun" /> */}
          <div className="self-center fw-bold white space-nowrap text-white ms-4 fs-5 ">
            Sun Shop
          </div>
        </div>
      </div>
      <nav className="header__nav me-5">
        <ul>
          <li className="text-white">Home</li>
          <li className="text-white">About</li>
          <li className="text-white">Contact</li>
          <li className="text-white"><UserList users={users} /> </li>
          <li className="text-white" onClick={() => logOutHandler()}>Logout</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;