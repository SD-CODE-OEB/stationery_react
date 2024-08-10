import React from "react";
import "./cards.css";
import products from "./products.json";
import Btns from "./Btns";
import Container from "../../Container";
// import { useFetch } from "./useFetch";
// import { AppContext } from "../../context";
const Cards = () => {
  const PATH = process.env.REACT_APP_PATH;
  // const url = "http://localhost:3000/products";
  // const [data] = useFetch(url);

  return (
    <Container className="h-100 cards px-lg-5 pb-4">
      <div className="row m-lg-auto px-lg-4">
        {/* {cartItem} */}
        {products &&
          products.map((product) => (
            <div
              className="col-lg-4 col-md-6 gy-4 gx-5 px-sm-5"
              key={product.id}
            >
              <div className="card w-auto border-0">
                <img
                  src={`${PATH}${product.img}`}
                  alt=""
                  className="card-img rounded-top rounded-0"
                  height={200}
                />
                <div className="card-body p-0 py-2">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="card-title ps-2 fs-5 fw-bold">
                        {product.name}
                      </div>
                      <div className="px-2 card-price fw-bold fs-5">
                        Price:
                        <span className="fw-lighter fs-5">
                          ${product.price}
                        </span>
                      </div>
                    </div>
                    <div className="col-xl-6   text-center d-flex justify-content-center align-items-center">
                      <Btns id={product.id} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default Cards;
