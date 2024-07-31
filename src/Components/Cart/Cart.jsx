import React, { useContext } from "react";
import products from "../Products/products.json";
import { AppContext } from "../../context";

const Cart = () => {
  const { cartItem } = useContext(AppContext);
  return (
    <>
      <h1>Cart</h1>
      <div className="container">
        <div className="row">
          {Object.keys(cartItem).map((id) => (
            <div className="col-4">
              <div className="card">
                <img
                  src={products[id].img}
                  alt=""
                  className="card-img-top"
                  height={200}
                />
                <div className="card-body">
                  <h5 className="card-title">{products[id].name}</h5>
                  <p className="card-text">Price: ${products[id].price}</p>
                  <p className="card-text">Quantity: {cartItem[id]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
