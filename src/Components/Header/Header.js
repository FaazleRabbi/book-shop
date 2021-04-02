import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../App";
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handleLogout = () => {
    setLoggedInUser("");
  };
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <nav class=" text-dark font-weight-bold navbar navbar-expand-lg navbar-light bg-light rounded">
      <div className="logo mr-5 pr-5">
        <h2 className="text-dark h2 font-weight-bold ml-md-3 pr-md-5 mr-md-5">BOOK BAZAR</h2>
      </div>

      <button
        class="custom-toggler navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample09"
        aria-controls="navbarsExample09"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      {/* <div className="pt-2"> */}
      <div
        class={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
        id="navbarsExample09"
        className="ml-md-5 pl-md-5"
      >
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
      {/* </div> */}
    </nav>
  );
};

export default Header;
