import React, { useContext } from "react";
import { AppContext } from "../../context";
import Container from "../../Container";
import OrderItem from "./OrderItem";
import "./orders.css";

const Orders = () => {
  const { orders, users, user } = useContext(AppContext);
  const found = users.find((p) => p.email === user.email);
  return (
    <Container className="bg-dark-subtle">
      <div className="row order-heading">
        <div className="col-lg-9 col-md-6">
          <h1 className="px-3 fw-bolder">Orders</h1>
        </div>
        <div className="col-lg-3 col-md-6">
          <h1 className="fw-bolder">Status</h1>
        </div>
      </div>
      <hr />
      {/* orders is an array to render in vDOM */}
      {orders
        .filter(
          (order) => order.email === user.email && order.email === found.email
        )
        .map((order, index) => (
          <OrderItem order={order} index={index} />
        ))}
    </Container>
  );
};

export default Orders;
