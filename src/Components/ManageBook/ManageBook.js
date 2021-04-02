import React, { useEffect, useState } from 'react';
import ManageBookCard from '../ManageBookCard/ManageBookCard';

const ManageBook = () => {
    const [books,setBooks] = useState([])
    useEffect(()=>{
        fetch('https://pacific-earth-93267.herokuapp.com/books')
        .then(res=>res.json())
        .then(data=>{
            setBooks(data)
        })
    },[])
    return (
        <div>
            <div className="row bg-info  rounded pt-1 mt-1 text-start text-light  pl-3 pr-3">
                <h6 className=" col-5">Book Name</h6>
                <h6 className=" col-3">Author</h6>
                <h6 className=" col-2">Price</h6>
                <h6 className=" col-2">Action</h6>
            </div>
            <div className=''>
            {
                books.map(book=><ManageBookCard book={book}></ManageBookCard>)
            }
        </div>
        </div>
    );
};

export default ManageBook;