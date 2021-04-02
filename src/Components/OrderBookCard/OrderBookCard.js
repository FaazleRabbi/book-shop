import React from 'react';

const OrderBookCard = (props) => {
    const {bookName,price}=props.order;
    return (
        <div className='row text-center pt-1 border-bottom' >
            <h5 className="col-4">{bookName}</h5>
            <h5 className="col-4">{price}</h5>
            <h5 className="col-4" >Track</h5>
        </div>
    );
};

export default OrderBookCard;