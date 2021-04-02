import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const BookDetails = () => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext)
    const [ book,setBook] = useState({})
    const { bookName,price, imageUrl} =book;
    let {id}  = useParams();
    console.log(id)
    useEffect(()=>{
        fetch(`http://localhost:5000/bookDetails/${id}`)
        .then(res=>res.json())
        .then(data=>setBook(data[0]))
    },[id])
    console.log(book)

const handleCheckoutBtn =()=>{
    const order = {
        email:loggedInUser.email,
        ...book
    }
    console.log(order)
    fetch('http://localhost:5000/addOrder',{
          method:"POST",
          headers:{'content-type':'application/json'},
          body:JSON.stringify(order)
      })
}
    return (
        <div className='d-md-flex text-center text-light justify-content-around m-5 pt-4 p-3 bg-info rounded'>
            <h5 >{bookName}</h5>
            <h3 className='' >${price}</h3>
            <button onClick={handleCheckoutBtn} className="btn btn-primary"> Checkout</button>
        </div>
    );
};

export default BookDetails;