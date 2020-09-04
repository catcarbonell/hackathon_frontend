import React from 'react';

const GreenButton = (props) => {
    return(
        <div className="cursor-pointer box-border shadow-lg p-4 my-8  sm:w-1/3 sm:mx-auto  lg:w-3/4 text-center text-white font-bold uppercase bg-custom-green hover:bg-custom-limegreen rounded-lg">
            {props.text}
        </div>
    )
}

export default GreenButton;