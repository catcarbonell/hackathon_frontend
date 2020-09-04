import React from 'react';

const GreenButton = (props) => {
    return(
        <div className="cursor-pointer box-border shadow-lg p-4 my-8 lg:w-3/4 text-center text-white font-bold uppercase bg-custom-green hover:bg-green-300 rounded-lg">
            {props.text}
        </div>
    )
}

export default GreenButton;