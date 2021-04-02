import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';

const Home = () => {
    const [books,setBooks] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/books')
        .then(res=>res.json())
        .then(data=>{
            setBooks(data)
        })
    },[])
    console.log(books)
    return (
        <div className='row bg-light p-5'>
            {
                books.map(book=> <BookCard book={book}> </BookCard>)
            }
        </div>
    );
};

export default Home;