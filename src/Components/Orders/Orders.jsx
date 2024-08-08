import React, { useContext } from "react";
import Container from "../../Container";
import products from "../Products/products.json";
import { AppContext } from "../../context";

const Orders = () => {
  const { cartItem } = useContext(AppContext);
  const total = products.reduce((val, add) => val + add.price, 0);
  return (
    <Container>
      <p>Your order of {total}</p>
    </Container>
  );
};

export default Orders;
