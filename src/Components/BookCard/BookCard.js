import React from "react";
import { useHistory } from "react-router";
import "./BookCard.css";

const BookCard = (props) => {
  const { bookName, authorName, imageUrl, price,_id} = props.book;
  const history = useHistory();
  const handleBuyBtn=(id)=>{
  history.push(`/bookDetails/${id}`)
  }
  return (
    <div className="col-md-4 book-card  p-3 ">
      <div className="col-md-12 border rounded  bg-white rounded p-3">
        <img className="w-100 p-3 m-auto bg-secondary rounded" src={imageUrl} alt="bookImage" />
        <h4>{bookName}</h4>
        <p><small>{authorName}</small></p>
        <div className="d-flex justify-content-between rounded ">
            <h3 className='text-primary font-weight-bold'>${price}</h3>
            <button onClick={()=> handleBuyBtn(_id)} className="btn btn-primary font-weight-bold">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
