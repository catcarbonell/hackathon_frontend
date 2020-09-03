import React, { useState } from 'react';

const ItemDetails = ({ itemName, price, image, store }) =>{
    const [qty, setQty] = useState(1);
    const handleQtyChange = (event) => {
        setQty(event.target.value);
    }
    const handleTotalPrice= () =>{
        return qty * price
    }
    
    return (
    <div className="bg-white box-content flex lg:flex-row sm:flex-col sm:my-8 items-center  shadow-md p-6 my-6 rounded-lg" id="item-container">
        <img className="lg:h-24 lg:w-24 h-32 w-32 rounded-full shadow-md" src={image} alt="A cactus in a teacup" />
        <div className="w-64 px-4">
            <h2 className="font-bold text-xl">{itemName}</h2>
            <p className="uppercase">{store}</p>
        </div>
        <div>
            <p>${price} /ea</p>
        </div>
        <div className="w-56 px-8">
            qty: <input className="border rounded-lg w-10 p-2" name="qtyBox" type="text" value={qty} onChange={handleQtyChange} />
        </div>
    
        <div className="totalContainer p-8 lg:ml-32 flex flex-end items-end justify-end">
            <p>$<span id="grandTotal">{handleTotalPrice()}</span>
            </p>
        </div>
    </div>
    )
}

export default ItemDetails;