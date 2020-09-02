import React from 'react';
import Listing from './Listing';

const Businesses = () => {
    return(
        <div className="w-5/6 min-w-0 mx-auto px-10 py-20">
           
           <div className="w-full flex flex-col">
                <div className="w-full">
                    <h3 className="font-bold text-4xl">Offers Near You</h3></div>
                <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly">
                <Listing 
                    thumbnail="https://images.unsplash.com/photo-1572451480598-fb65b95a6ea0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    altTxt="a pile of tasty croissants"
                    businessName="Crumble and Flake Patisserie"
                    time="5-16"
                    fee="0"
                    rating={4}
                    totalRating={526}
                />
                <Listing 
                    thumbnail="https://images.unsplash.com/photo-1572451480598-fb65b95a6ea0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    altTxt="a pile of tasty croissants"
                    businessName="Crumble and Flake Patisserie"
                    time="5-16"
                    fee="0"
                    rating={4}
                    totalRating={526}
                />
                <Listing 
                    thumbnail="https://images.unsplash.com/photo-1572451480598-fb65b95a6ea0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    altTxt="a pile of tasty croissants"
                    businessName="Crumble and Flake Patisserie"
                    time="5-16"
                    fee="0"
                    rating={4}
                    totalRating={526}
                />
                <Listing 
                    thumbnail="https://images.unsplash.com/photo-1572451480598-fb65b95a6ea0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    altTxt="a pile of tasty croissants"
                    businessName="Crumble and Flake Patisserie"
                    time="5-16"
                    fee="0"
                    rating={4}
                    totalRating={526}
                />
                </div>
            </div>

        </div>
    );
}
export default Businesses;