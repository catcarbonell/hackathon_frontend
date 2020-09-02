import React from 'react';
import Listing from './Listing';

const Businesses = () => {
    return(
        <div className="w-5/6 min-w-0 mx-auto px-10 py-20">
           <div className="w-full bg-green-100 px-4 py-0 mb-20 flex flex-col lg:flex-row">
                <div className="lg:w-1/3 px-6 py-10 w-full m-auto flex flex-col justify-center">
                    <h2 className="text-3xl font-bold">Now is the time</h2>
                    <p className="text-lg">Support the places you love today!</p>
                </div>
                <div className="lg:w-1/3 shadow-lg h-full px-6 py-20 w-full m-auto flex flex-col bg-gray-900 text-white">
                    <h2 className="text-2xl font-bold">Support Black-owned Restaurants</h2>
                    <p className="text-lg w-5/6 lg:1/2 pt-4">Order from your friendly neighborhood Black-owned shop-- with FREE delivery through 2020!</p>
                    <button className="mx-auto mt-10 p-2 rounded-lg uppercase w-40 bg-custom-limegreen hover:bg-custom-olivegreen">Shop now!</button>
                </div>
                <div className=" shadow lg:w-1/3 mr-8 h-64 rounded-l ml-10 w-full w-full m-auto flex flex-row bg-red-300">
                    <div className="w-1/2 p-6 m-auto">
                        <h2 className="text-2xl font-bold">FREE Delivery</h2>
                        <p className="text-lg w-5/6 lg:1/2 pt-2">Make gifting quick and easy-peasy!</p>
                        <button className="text-white mx-auto mt-4 p-2 rounded-lg uppercase w-5/6 bg-gray-800 hover:bg-gray-900">Shop now!</button>

                    </div>
                    <div className="w-1/2">
                        <img className="h-full object-cover object-right-top rounded-r" 
                             alt="flowers"
                             src="https://images.unsplash.com/photo-1552034507-dc5d8099e659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80" />
                    </div>
                    
                </div>
           </div>
           <div className="w-full flex flex-col">
                
                <div className="w-full">
                    <h3 className="font-bold text-4xl">Offers Near You</h3>
                </div>
                
                <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly">
                    <Listing 
                        thumbnail="https://images.unsplash.com/photo-1598888831741-cb535295b013?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                        altTxt="A pile of old comic books"
                        businessName="Comic &amp; Figure Addicts"
                        time="5-16"
                        fee="0"
                        rating={5}
                        totalRating={777}
                        />
                    <Listing 
                        thumbnail="https://images.unsplash.com/photo-1572451480598-fb65b95a6ea0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        altTxt="A pile of tasty croissants"
                        businessName="Crumble &amp; Flake Patisserie"
                        time="5-16"
                        fee="0"
                        rating={4}
                        totalRating={526}
                    />
                    <Listing 
                        thumbnail="https://images.unsplash.com/photo-1536502829567-baf877a670b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                        altTxt="A woman making jewelry"
                        businessName="Raven's Nest Treasure"
                        time="5-16"
                        fee="0"
                        rating={5}
                        totalRating={972}
                    />
                    <Listing 
                        thumbnail="https://images.unsplash.com/photo-1577199001468-44c049e7603f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                        altTxt="A team of construction workers"
                        businessName="The Workwear Place"
                        time="5-16"
                        fee="0"
                        rating={4}
                        totalRating={321}
                    />
                </div>
            </div>

 
            <div className="w-full flex flex-col mt-20">
                
                <div className="w-full">
                    <h3 className="font-bold text-4xl">Popular Near You</h3>
                </div>
                
                <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly">
                    <Listing 
                        thumbnail="https://images.unsplash.com/photo-1572451480598-fb65b95a6ea0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        altTxt="A pile of tasty croissants"
                        businessName="Crumble and Flake Patisserie"
                        time="5-16"
                        fee="0"
                        rating={4}
                        totalRating={526}
                    />
                    <Listing 
                        thumbnail="https://images.unsplash.com/photo-1536502829567-baf877a670b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                        altTxt="A woman making jewelry"
                        businessName="Raven's Nest Treasure"
                        time="5-16"
                        fee="0"
                        rating={5}
                        totalRating={972}
                    />
                    <Listing 
                        thumbnail="https://images.unsplash.com/photo-1577199001468-44c049e7603f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                        altTxt="A team of construction workers"
                        businessName="The Workwear Place"
                        time="5-16"
                        fee="0"
                        rating={4}
                        totalRating={321}
                    />
                    <Listing 
                        thumbnail="https://images.unsplash.com/photo-1568926728897-5e20b503dc20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1348&q=80"
                        altTxt="Some tasty macarons"
                        businessName="Mac'd with Love"
                        time="5-16"
                        fee="0"
                        rating={5}
                        totalRating={777}
                    />
                </div>
            </div>


            <div className="w-full flex flex-col mt-20">
                
                <div className="w-full">
                    <h3 className="font-bold text-4xl">Ready to Go</h3>
                </div>
                
                <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly">
                    <Listing 
                        thumbnail="https://images.unsplash.com/photo-1572451480598-fb65b95a6ea0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        altTxt="A pile of tasty croissants"
                        businessName="Crumble and Flake Patisserie"
                        time="5-16"
                        fee="0"
                        rating={4}
                        totalRating={526}
                    />
                    <Listing 
                        thumbnail="https://images.unsplash.com/photo-1536502829567-baf877a670b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                        altTxt="A woman making jewelry"
                        businessName="Raven's Nest Treasure"
                        time="5-16"
                        fee="0"
                        rating={5}
                        totalRating={972}
                    />
                    <Listing 
                        thumbnail="https://images.unsplash.com/photo-1577199001468-44c049e7603f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                        altTxt="A team of construction workers"
                        businessName="The Workwear Place"
                        time="5-16"
                        fee="0"
                        rating={4}
                        totalRating={321}
                    />
                    <Listing 
                        thumbnail="https://images.unsplash.com/photo-1568926728897-5e20b503dc20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1348&q=80"
                        altTxt="Some tasty macarons"
                        businessName="Mac'd with Love"
                        time="5-16"
                        fee="0"
                        rating={5}
                        totalRating={777}
                    />
                </div>
            </div>

        </div>
    );
}
export default Businesses;