import React from 'react';

const DarkButton = (props) => {
    return(
        <div className="cursor-pointer box-border shadow-lg p-4 my-8 text-center text-white font-bold uppercase bg-gray-800 hover:bg-gray-900 rounded-lg">
            {props.text}
        </div>
    )
}

export default DarkButton;