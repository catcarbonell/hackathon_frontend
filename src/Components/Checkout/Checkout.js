import React from 'react';
import { Link } from 'react-router-dom';
const Checkout = () => {
    const items = [
        { id: 1,
          itemName: "Batduck",
          image: "https://images.unsplash.com/photo-1559715541-5daf8a0296d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1184&q=80",
          price: 20,
          store: "Comic & Figure Addicts"
        },
    ]
    const [{ itemName, image, price, store }] = items;

    return(
        <div className="flex flex-col justify-center m-auto w-full h-screen">
            <div className="rounded-lg py-10 px-8 self-center items-center content-center lg:w-1/3 w-5/6 bg-white shadow">
                <h3 className="text-3xl">
                    Checkout
                </h3>
            
                <div className="w-5/6 mt-8 mx-auto flex lg:flex-row flex-col justify-center items-center">
                    <img className="lg:h-24 lg:w-24 m-2 h-32 w-32 rounded-full shadow-md" src={image} alt="A cactus in a teacup" />
                
                    <div className="m-4">
                        <h2 className="font-bold text-xl">{itemName}</h2>
                        <p className="uppercase">{store}</p>
                    </div>
                
                    <div className="m-4 w-20">
                        <p>${price} x 1</p>   
                    </div>    
                    <div>
                        <p className="font-bold text-2xl">$20</p>
                    </div>
                </div>
                <div className="w-5/6 mx-auto">
                    <h3 className="mt-6 font-bold text-3xl text-center">
                        Total: $20
                    </h3>
                    <form className="mt-10">
                        <div className="mt-4 uppercase font-bold">
                            <label className="mb-4 uppercase font-bold">Name on card</label>
                            <input type="text" value="Tony Stark"  className="mt-2 px-4 py-2 w-full rounded-lg shadow-md" />
                        </div>
                        <div className="mt-4">
                        <label className="my-4 uppercase font-bold">Credit Card</label>
                        <input type="text" value="4242 4242 4242 4242" 
                            className="mt-2 px-4 py-2 w-full rounded-lg shadow-md" />
                        </div>
                        <div className="my-4 flex flex-row">
                            <div className="mr-2 flex flex-col">    
                                <label className="mb-4 uppercase font-bold">Expiration Date</label>
                                <input type="text" value="MM/YY"  className="px-4 py-2 rounded-lg shadow-md" />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-4 uppercase font-bold">CV</label>
                                <input type="text" value="123"  className="px-4 py-2 rounded-lg shadow-md" />
                            </div>
                        </div>
                    </form>
                    <div className="mt-6">
                        <Link to="/completed">
                            <button className="w-full py-3 px-4 bg-custom-green hover:bg-green-700 rounded uppercase text-white font-bold">
                                Complete Checkout
                            </button>
                        </Link>
    
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Checkout;