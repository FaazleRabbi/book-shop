import React, { useState } from 'react';

const ManageBookCard = (props) => {
    const hideItem = 'd-none';
    const [classNames,setClassNames] = useState(" ")
    const [book,setBook]= useState(props.book)
    const { bookName, authorName, price,_id} = book;

    const handleDeleteBtn = (id)=> {
        fetch(`https://pacific-earth-93267.herokuapp.com/delete/${id}`)
        .then(res=>res.json())
        .then(data=>{
            data && setClassNames(hideItem)

        })
    }
    console.log(classNames)
    return (
        <div className={` row bg-light rounded pt-1 mt-1 text-start text-dark  pl-3 pr-3 ${classNames}` }>
            <h6 className=" col-5 pt-2">{bookName}</h6>
            <h6 className=" col-3 pt-2">{authorName}</h6>
            <h6 className=" col-2 pt-2">{price}</h6>
            <h6 className=" col-2 pt-2 "><span onClick={()=> handleDeleteBtn(_id)} className='p-1 rounded btn btn-primary '>delete</span></h6>
        </div>
    );
};

export default ManageBookCard;