import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../App";
const Header = () => {
  const [loggedInUser, setLoggedInUser]= useContext(UserContext)
  const handleLogout=()=>{
      setLoggedInUser('')
  }
  return (
    <div className="d-flex justify-content-between  pl-5 pr-5 bg-light font-weight-bold text-dark">
      <div className="logo">
        <h2 className="text-dark h2 font-weight-bold" >BOOK BAZAR</h2>
      </div>
      <div className="pt-2">
        <NavLink className="mr-3 p-2 text-dark" to="/home">Home</NavLink>
        <NavLink className="mr-3 p-2 text-dark" to="/orders">Orders</NavLink>
        <NavLink className="mr-3 p-2 text-dark" to="/admin">Admin</NavLink>
        <NavLink className="mr-3 p-2 text-dark" to="/deals">Deals</NavLink>
        {
          !loggedInUser.email ? <NavLink className="mr-3 p-2 text-dark rounded btn-outline-primary" to="/login">Login</NavLink> :<span onClick={handleLogout} className="mr-3 p-2 text-dark rounded btn-outline-primary" >logout</span>
        }
        
        
      </div>
      
    </div>
  );
};

export default Header;
