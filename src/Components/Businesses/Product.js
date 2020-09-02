import React from 'react';

const Product = (props) => {
    return(
        
        <div onClick={ props.toggleModal } className="rounded-lg bg-white cursor-pointer transform hover:scale-105 lg:w-1/4 w-full min-w-0 mx-2 my-4 rounded-lg shadow-lg hover:shadow-none">

            <div> 
                <img className="object-cover shadow-md rounded-t" src={ props.thumbnail } alt={props.altTxt} />
            </div>
            <div className="m-auto p-6">
                <h3 className="text-xl font-bold hover:text-custom-green">
                    { props.productName }
                </h3>

                <p className="text-2xl"> ${ props.price }</p>
            </div>

            <div>
                <button className="w-full py-3 px-4 bg-custom-green hover:bg-green-700 uppercase text-white font-bold">Add to Bag</button>
            </div>
        
        
        </div>
    );
}

export default Product;