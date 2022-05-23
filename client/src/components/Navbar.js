import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./../css/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = (props) => {
  // let navigate = useNavigate();
  // const logout = () => {
  //   sessionStorage.removeItem("loggedin");
  //   props.setSession(props.__init_session);
  //   navigate("/");
  // };
  return (
    <>
      <nav className="navbar navbar-expand-lg __Navbar">
        {/* <span className="navbar-brand brand-name">Moodly</span> */}
        <span className="navbar-brand brand-name">
          <img src="https://moodly.app/assets/img/logo-white-1.0.png" />
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MenuIcon className="icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item">
              <Link"nav-link simple-nav-link active">
                Home
              </Link>
            </li> */}
          </ul>
          <div className="form-inline my-2 my-lg-0">
            <ul className="navbar-nav mr-auto">
              {!true ? (
                <>
                  <li className="nav-item">
                    <button className="Button-Custom-1 black">
                      <span className="content">
                        <span className="type">Log In</span>
                      </span>
                    </button>
                  </li>
                  <li className="nav-item signup">
                    <button className="Button-Custom-1 white">
                      <span className="content">
                        <span className="type">Register</span>
                      </span>
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <button className="Button-Custom-1 black">
                      <span className="content">
                        <span className="type">History</span>
                      </span>
                    </button>
                  </li>
                  <li className="nav-item signup">
                    <button className="Button-Custom-1 white">
                      <span className="content">
                        <span className="type">Profile</span>
                      </span>
                    </button>
                  </li>
                  {/* <li className="nav-item signup">
                    <button className="Button-Custom-1 white" onClick={logout}>
                      <span className="content">
                        <span className="type">Logout</span>
                      </span>
                    </button>
                  </li> */}
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
