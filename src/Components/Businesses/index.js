import React from 'react';
import Listing from './Listing';

const Businesses = () => {
    return(
        <div className="w-5/6 min-w-0 mx-auto px-10 py-20">
           
           <div className="w-full flex flex-col">
                
                <div className="w-full">
                    <h3 className="font-bold text-4xl">Offers Near You</h3>
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