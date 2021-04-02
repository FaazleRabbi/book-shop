// import { LinearProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';
import LinearBuffer from '../ProgressFile/LinearBuffer';

const Home = () => {
    const [linearBuffer,setLinearBuffer]=useState(true)
    const [books,setBooks] = useState([])
    useEffect(()=>{
        fetch('https://pacific-earth-93267.herokuapp.com/books')
        .then(res=>res.json())
        .then(data=>{
            setBooks(data)
            setLinearBuffer(false) 
        })
    },[])
    console.log(books)
    return (
        <div className='row bg-light p-5'>
            {
                linearBuffer ? <LinearBuffer></LinearBuffer>:
                books.map(book=> <BookCard book={book}> </BookCard>)
            }
        </div>
    );
};

export default Home;