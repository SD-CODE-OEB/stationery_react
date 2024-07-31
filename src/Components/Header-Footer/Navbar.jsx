import React, { useContext } from "react";
import "./HFstyles.css";
import { BiStore } from "react-icons/bi";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";
import { AppContext } from "../../context";

const Navbar = () => {
  const PATH = process.env.REACT_APP_PATH;
  const { user, logged } = useContext(AppContext);
  return (
    <nav className="nav navbar-expand-lg d-flex justify-content-between shadow-sm">
      <h1 className="px-4">
        <Link to={`${PATH}/`} className="btn btn-outline-dark">
          <BiStore />
          Store
        </Link>
      </h1>
      <h3>{user.name === "" ? "" : `Welcome ${user.name}`}</h3>
      <ul className="navbar nav pe-lg-4">
        <li className="nav-item">
          <Link to={`${PATH}/cart`} className="nav-link">
            Cart
          </Link>
        </li>
        <li className="nav-item">
          <Link to={`${PATH}/orders`} className="nav-link">
            Orders
          </Link>
        </li>
        <li className="nav-item">
          {logged ? (
            <Link to={`${PATH}/logout`} className="nav-link">
              Logout
              <LuLogOut />
            </Link>
          ) : (
            <Link to={`${PATH}/login`} className="link nav-link">
              Login
              <LuLogIn />
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
