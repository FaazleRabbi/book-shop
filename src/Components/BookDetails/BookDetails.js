import { LinearProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../App";

const BookDetails = () => {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
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
    setLoading(true);
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
    })
      .then((res) => res.json())
      .then((data) => {
        data && setLoading(false);
        data && setSuccessMsg(true);
      });
  };
  return (
    <div className="d-md-flex text-center text-light justify-content-around m-5 pt-4 p-3 bg-info rounded">
      <h5>{bookName}</h5>
      <h3 className="">${price}</h3>
      <button onClick={handleCheckoutBtn} className="btn btn-primary">
        Checkout
      </button>
      {loading && <LinearProgress></LinearProgress>}
      {successMsg && (
        <Alert variant="filled" severity="success">
          Your Order is Confirmed !!
        </Alert>
      )}
    </div>
  );
};

export default BookDetails;
