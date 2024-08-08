import React, { useContext, useState } from "react";
import "./HFstyles.css";
import { BiMenu, BiStore, BiX } from "react-icons/bi";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";
import { AppContext } from "../../context";

const Navbar = () => {
  const PATH = process.env.REACT_APP_PATH;
  const [toggle, setToggle] = useState(false);
  const { user, logged } = useContext(AppContext);
  return (
    <nav className="nav navbar-expand-lg d-flex shadow-sm">
      <h1 className="px-4">
        <Link to={`${PATH}/`} className="btn btn-outline-dark">
          <BiStore />
          Store
        </Link>
      </h1>
      {!toggle ? (
        <button
          type="button"
          className="navbar-toggler fs-2 bg-dark p-1 me-3 rounded-2 toggle"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setToggle(!toggle)}
        >
          <BiMenu />
        </button>
      ) : (
        <button
          type="button"
          className="navbar-toggler fs-2 bg-dark p-1 me-3 rounded-2 toggle"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setToggle(!toggle)}
        >
          <BiX />
        </button>
      )}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
      </div>
      {logged ? <h3 className="me-3">Welcome {user.name}</h3> : ""}
    </nav>
  );
};

export default Navbar;
