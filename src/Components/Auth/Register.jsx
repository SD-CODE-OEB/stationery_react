import React from "react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context";

const Register = (props) => {
  const PATH = process.env.REACT_APP_PATH;
  const Navigate = useNavigate();
  const { user, setUser, users, setUsers } = useContext(AppContext);
  const [res, setRes] = useState();
  const [errors, setErrors] = useState({});
  const handleSubmit = () => {
    const validationErrors = {};
    if (user.name.trim() === "") {
      validationErrors.name = "Name is required";
    } else if (users.find((u) => u.name === user.name)) {
      validationErrors.name = "User Already Exists";
    }
    if (user.email.trim() === "" || !user.email.includes("@")) {
      validationErrors.email = "Enter a valid email";
    } else if (users.find((u) => u.email === user.email)) {
      validationErrors.email = "Email already exists";
    }
    if (user.password.trim() === "") {
      validationErrors.password = "Password is required";
    } else if (user.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
    }
    if (Object.keys(validationErrors).length <= 0) {
      setUsers((prev) => [...prev, user]);
      setRes("User Registered Successfully");
      setErrors({});
      setTimeout(() => {
        Navigate(`${PATH}/login`);
      }, 1000);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container-fluid-lg">
      <div className="card bg-transparent text-light ">
        <h1 className="card-title text-center fs-2 text-white fw-bolder my-3">
          Sign up
        </h1>
        <p className="fs-5 fw-bold text-decoration-underline text-center py-2">
          {res}
        </p>
        <div className="card-body d-flex justify-content-center align-items-center flex-column">
          <p className="d-flex flex-column">
            <label htmlFor="name" className="label form-label d-block">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              onChange={(e) =>
                setUser((prev) => ({ ...prev, name: e.target.value }))
              }
              required
            />
            {errors.name && (
              <span className="opacity-75" style={{ color: "red" }}>
                {errors.name}
              </span>
            )}
          </p>
          <p className="d-flex flex-column">
            <label htmlFor="email" className="label form-label d-block">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
              required
            />
            {errors.email && (
              <span className="opacity-75" style={{ color: "red" }}>
                {errors.email}
              </span>
            )}
          </p>
          <p className="d-flex flex-column">
            <label htmlFor="password" className="label form-label d-block">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              onChange={(e) =>
                setUser((prev) => ({ ...prev, password: e.target.value }))
              }
              required
            />
            {errors.password && (
              <span className="opacity-75" style={{ color: "red" }}>
                {errors.password}
              </span>
            )}
          </p>
          <p className="my-0">
            <button
              type="button"
              className="btn btn-outline w-100 fw-bold"
              onClick={handleSubmit}
            >
              Register
            </button>
          </p>
          <h6 className="fw-bold my-1">
            Already a user ?{" "}
            <Link
              className="link link-danger link-offset-1-hover px-2 fw-bold link-underline-opacity-0-hover"
              to={`${PATH}/login`}
            >
              Sign in
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Register;
