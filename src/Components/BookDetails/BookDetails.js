import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../App";

const BookDetails = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [book, setBook] = useState({});
  const { bookName, price } = book;
  let { id } = useParams();
  useEffect(() => {
    fetch(`https://pacific-earth-93267.herokuapp.com/bookDetails/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data[0]));
  }, [id]);

  const handleCheckoutBtn = () => {
    const date = new Date();
    const order = {
      email: loggedInUser.email,
      date: date,
      ...book,
    };
    fetch("https://pacific-earth-93267.herokuapp.com/addOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    });
  };
  return (
    <div className="d-md-flex text-center text-light justify-content-around m-5 pt-4 p-3 bg-info rounded">
      <h5>{bookName}</h5>
      <h3 className="">${price}</h3>
      <button onClick={handleCheckoutBtn} className="btn btn-primary">
        {" "}
        Checkout
      </button>
    </div>
  );
};

export default BookDetails;
