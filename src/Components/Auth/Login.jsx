import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { AppContext } from "../../context";

const Login = () => {
  const PATH = process.env.REACT_APP_PATH;
  const { user, users, setLogged, setUser } = useContext(AppContext);
  const Navigate = useNavigate();
  const HandleLogin = () => {
    if (
      users.find((u) => u.email === user.email && u.password === user.password)
    ) {
      setLogged(true);
      const current_user = users.find((u) => u.email === user.email);
      setUser((prev) => ({ ...prev, name: current_user.name }));
      Navigate(`${PATH}/`);
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <div className="container-fluid-lg m-0 py-4">
      <div className="card bg-transparent text-light w-100 ">
        <h1 className="card-title text-center fs-2 text-white fw-bolder my-3">
          Sign In
        </h1>
        <div className="card-body d-flex justify-content-center align-items-center flex-column">
          <p className="my-3">
            <label htmlFor="email" className="label form-label d-block">
              Email
            </label>
            <input type="email" id="email" placeholder="Enter email" />
          </p>
          <p className="my-3">
            <label htmlFor="password" className="label form-label d-block">
              Password
            </label>
            <input type="password" id="password" placeholder="Enter Password" />
          </p>
          <p className="my-3">
            <button
              type="button"
              className="btn btn-outline w-100 fw-bold"
              onClick={HandleLogin}
            >
              Login
            </button>
          </p>
          <h6 className="fw-bold my-3">
            Create an account ??{" "}
            <Link
              className="link link-danger link-offset-1-hover px-2 fw-bold link-underline-opacity-0-hover"
              to={`${PATH}/register`}
            >
              Sign up
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Login;
