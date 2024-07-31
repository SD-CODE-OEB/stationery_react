import React, { useContext } from "react";
import "./btns.css";
import { BiPlus } from "react-icons/bi";
import { HiMiniMinus } from "react-icons/hi2";
import { AppContext } from "../../context";

const Btns = (props) => {
  const { cartItem, setCartItem } = useContext(AppContext);
  function addToCart(id) {
    setCartItem((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    // here we are setting the cartItem state with the previous state and adding the new item to the cart using id as key for the item
  }
  function updateCart(id, quantity) {
    setCartItem((prev) => ({ ...prev, [id]: quantity }));
  }
  if (!cartItem[props.id]) {
    return (
      <div className="container d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => addToCart(props.id)}
        >
          Add to Cart
        </button>
      </div>
    );
  } else {
    return (
      <div className="container d-flex justify-content-around align-items-center py-3">
        <button
          type="button"
          className="btn btn-warning border-0"
          onClick={() => updateCart(props.id, cartItem[props.id] - 1)}
        >
          <HiMiniMinus />
        </button>
        <div className="">{cartItem[props.id]}</div>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => updateCart(props.id, cartItem[props.id] + 1)}
        >
          <BiPlus />
        </button>
      </div>
    );
  }
};

export default Btns;
