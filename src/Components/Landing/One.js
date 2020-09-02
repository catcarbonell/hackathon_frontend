import React from 'react';
import bike from '../../Assets/img-04.jpg';

const Section = () => {
    return(
        <div className="overflow-hidden h-auto py-24 my-2 lg:flex-row flex flex-col justify-center content-center items-center m-auto bg-teal-100">
            
            <div className="lg:flex lg:flex-col lg:w-1/4 w-5/6 px-8 pt-10 pb-16 bg-green-400 rounded shadow-lg">
                <h2 className="lg:text-4xl text-3xl  text-left font-bold uppercase border-b-4 border-t-0 border-r-0 border-l-0 border-solid border-4 border-gray-800">Staying strong together</h2>
                <p className="text-lg py-10">
                    Small businesses are counting on all of us-- let's show
                    how much they mean to our communities
                </p>
                <span className="lg:w-2/3 w-1/2 p-4 mx-auto rounded-md shadow-lg font-xl font-bold text-center uppercase text-gray-100 bg-gray-800 hover:bg-black cursor-pointer">
                    Explore Businesses
                </span>
            </div>
            <div className="lg:w-1/3 lg:mt-0 w-screen mt-20 flex">
                <img className="lg:rounded-r-lg lg:shadow-none lg:object-fill object-cover shadow-xl" src={ bike } alt="A man riding a bike through a busy street" />
            </div>
        </div>
    );
}

export default Section;