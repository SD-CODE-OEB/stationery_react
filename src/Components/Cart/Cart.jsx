import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "../Products/products.json";
import { AppContext } from "../../context";
import Container from "../../Container";
import Row from "./Rows";
import "./cart.css";

const Cart = () => {
  const PATH = process.env.REACT_APP_PATH;
  const { cartItem, logged, user, setOrders, setCartItem } =
    useContext(AppContext);
  // store itemname, quantity, total price and useremail
  const [item, setItem] = useState({});
  const orderUpdate = () => {
    item.email = user.email;
    item.things = cartItem;
    setItem((prev) => ({ ...prev, item }));
    setOrders((prev) => [...prev, item]);
    setCartItem(() => []);
  };
  const Navigate = useNavigate();
  return (
    <Container className="cart-container">
      <h1 className="px-lg-4 heading fw-bolder text-start">Cart</h1>
      <div className="container">
        {Object.values(cartItem).every((val) => val === 0) ? (
          <div className="container-fluid  d-flex flex-column justify-content-center align-items-center m-0 p-0 overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/22/16/42/icon-1001596_1280.png"
              alt="empty cart"
              className="img img-fluid"
            />
            <p className="fs-1 w-100 text-center ps-5 fw-bolder empty">
              Cart is Empty!
            </p>
          </div>
        ) : (
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-4 row-heads fs-5">Name</div>
                <div className="col-4 row-heads fs-5">Quantity</div>
                <div className="col-4 row-heads fs-5">Price</div>
              </div>
              {Object.keys(cartItem).map((id) =>
                !cartItem[id] ? (
                  <></>
                ) : (
                  <Row products={products} id={id} key={id} />
                )
              )}
            </div>
            <div className="col-lg-4">
              <div className="h3">Submit Your Order</div>
              {logged ? (
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => {
                    orderUpdate();
                    Navigate(`${PATH}/orders`);
                  }}
                >
                  Submit Order
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => Navigate(`${PATH}/login`)}
                >
                  Log In
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Cart;
