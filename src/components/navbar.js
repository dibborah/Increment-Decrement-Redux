import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const amount = useSelector(state=>state.amount)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Increment & Decrement Media
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
          </div>
          <button>A/v Balance : {amount}</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
