import React from "react";
import ItemDetails from './ItemDetails';

const ShoppingCart = () => {
  const items = [
    { id: 1,
      itemName: "Batduck",
      image: "https://images.unsplash.com/photo-1559715541-5daf8a0296d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1184&q=80",
      price: 20,
      store: "Comic & Figure Addicts"
    },
  ]

  return (
    <div className="overflow-hidden w-full m-auto h-screen
                    flex flex-col justify-center items-center content-center">
      <h1 className="text-3xl font-bold uppercase tracking-widest">Yay stuff!</h1>
      <div> 
        {items.map(item => (
              <ItemDetails 
                key={item.id}
                {...items}
                image={item.image}
                itemName={item.itemName}
                price={item.price}
                store={item.store}
              />
            )
          )
        }
      </div>
      {/* <div>
        <h2 className="text-3xl font-bold uppercase mb-8">
          Total: $
        </h2>
      </div> */}

      <button className="w-48 rounded-lg shadow-lg py-4 bg-custom-green hover:bg-custom-limegreen uppercase font-bold text-white">
        Checkout
      </button>
    </div>
  );
};

export default ShoppingCart;
