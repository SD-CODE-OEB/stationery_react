import React from "react";
import "./cards.css";
import products from "./products.json";
import Btns from "./Btns";
// import { useFetch } from "./useFetch";
// import { AppContext } from "../../context";
const Cards = () => {
  const PATH = process.env.REACT_APP_PATH;
  // const url = "http://localhost:3000/products";
  // const [data] = useFetch(url);

  return (
    <div className="container h-100 cards px-lg-5">
      <div className="row m-auto px-4">
        {/* {cartItem} */}
        {products &&
          products.map((product) => (
            <div className="col-4 gy-4 gx-5">
              <div className="card w-auto border-0">
                <img
                  src={`${PATH}${product.img}`}
                  alt=""
                  className="card-img rounded-top rounded-0"
                  height={200}
                />
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-6">
                      <div className="card-title px-2 fs-6 fw-bold">
                        {product.name}
                      </div>
                      <div className="px-2">Price: ${product.price}</div>
                    </div>
                    <div className="col-6 text-center d-flex justify-content-center align-items-center">
                      <Btns id={product.id} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cards;
