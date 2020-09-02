import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faGift, faUtensils } from '@fortawesome/free-solid-svg-icons';

const Three = () => {
    return(
        <div className="overflow-hidden h-auto my-0 flex lg:flex-row flex-col justify-center content-center items-center m-auto bg-white text-gray-100">
            <div className="lg:w-1/3 w-full py-6 m-auto text-center bg-custom-limegreen hover:bg-green-400 cursor-pointer">
               <h3 className="text-xl">
                   <FontAwesomeIcon className="mr-2" icon={ faMapMarkerAlt } size="1x" /> Near By
                   </h3>
            </div>
            <div className="lg:w-1/3 w-full py-6 m-auto text-center bg-gray-600 hover:bg-gray-800 cursor-pointer">
               <h3 className="text-xl"><FontAwesomeIcon className="mr-2" icon={ faGift } size="1x" /> Handmade Gifts</h3>
            </div>
            <div className="lg:w-1/3 w-full py-6 m-auto text-center bg-custom-olivegreen hover:bg-green-600 cursor-pointer">
               <h3 className="text-xl"><FontAwesomeIcon className="mr-2" icon={ faUtensils } size="1x" />Food</h3>
            </div>
        </div>
    );
}

export default Three;