import React from "react";

const OrderBookCard = (props) => {
  const { bookName, price, date } = props.order;
  return (
    <div className="row text-center pt-1 border-bottom">
      <h5 className="col-5">{bookName}</h5>
      <h5 className="col-1">{price}</h5>
      <h5 className="col-3">{date}</h5>
      <h5 className="col-3">Track</h5>
    </div>
  );
};

export default OrderBookCard;
