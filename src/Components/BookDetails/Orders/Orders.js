import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import OrderBookCard from "../../OrderBookCard/OrderBookCard";

const Orders = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orders,setOrders]= useState([])
  const email = loggedInUser.email;
  // console.log(email)
  useEffect(() => {
    fetch("http://localhost:5000/orders?email=" + email)
      .then((res) => res.json())
      .then(
        (data) => {
            setOrders(data)
          console.log("data", data);
        },
        [email]
      );
  });
  return (
    <div>
        <div className='row text-light text-center bg-info pt-2 ' >
            <h5 className="col-4">Book Name</h5>
            <h5 className="col-4">Price</h5>
            <h5 className="col-4">Tracking</h5>
        </div>
      {
          orders.map(order=><OrderBookCard order={order}></OrderBookCard>)
      }
    </div>
  );
};

export default Orders;
