import React, { useContext } from "react";
import { AppContext } from "../../context";
import { BiSolidMinusCircle, BiSolidPlusCircle } from "react-icons/bi";

const Row = (props) => {
  const { products, id } = props;

  const { setCartItem, cartItem } = useContext(AppContext);
  const updateCart = (id, quantity) => {
    setCartItem((lastItem) => ({ ...lastItem, [id]: quantity }));
  };
  return (
    <div className="row my-lg-2 my-md-1 my-4">
      <div className="col-4">{products[id - 1].name}</div>
      <div className="col-4 d-flex">
        <button
          type="button"
          className="btn text-bg-danger p-0 px-1 border-0"
          onClick={() => updateCart(id, cartItem[id] - 1)}
        >
          <BiSolidMinusCircle />
        </button>
        <div className="quantity px-2">{cartItem[id]}</div>
        <button
          type="button"
          className="btn text-bg-success p-0 px-1 border-0"
          onClick={() => updateCart(id, cartItem[id] + 1)}
        >
          <BiSolidPlusCircle />
        </button>
      </div>
      <div className="col-4">{products[id - 1].price * cartItem[id]}</div>
    </div>
  );
};

export default Row;
