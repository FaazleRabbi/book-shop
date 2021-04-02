import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../App";

const Headers = () => {
  const [classNames, setClassNames] = useState("d-block");

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handleLogout = () => {
      if (classNames === "d-block") {
    setLoggedInUser("d-none");
      }
      if(classNames === "d-none"){
        setLoggedInUser("d-block");
      }
  };
  const handleClapsBtn = () => {
    setClassNames("d-none");
    console.log("clicked");
  }
 console.log("classnames",classNames)
  return (
    <div>
      <nav className="navbar navbar-light bg-white navbar-expand-md">
        <div className="container col-12">
          <a className="navbar-brand" href="/">
            <b>TestSite</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-controls="navbarNav"
            aria-expanded="true"
            aria-label="Toggle navigation"
            onClick={handleClapsBtn}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={` p-2 ${classNames}`}>
            <NavLink className="mr-3 p-2 text-dark" to="/home">
              Home
            </NavLink>
            <NavLink className="mr-3 p-2 text-dark" to="/orders">
              Orders
            </NavLink>
            <NavLink className="mr-3 p-2 text-dark" to="/admin">
              Admin
            </NavLink>
            <NavLink className="mr-3 p-2 text-dark" to="/deals">
              Deals
            </NavLink>
            {!loggedInUser.email ? (
              <NavLink
                className="mr-3 p-2 text-dark rounded btn-outline-primary"
                to="/login"
              >
                Login
              </NavLink>
            ) : (
              <span
                onClick={handleLogout}
                className="mr-3 p-2 text-dark rounded btn-outline-primary"
              >
                logout
              </span>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Headers;
