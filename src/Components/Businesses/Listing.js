import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Listing = (props) => {
    return(
        <div className="bg-white cursor-pointer transform hover:scale-105 lg:w-1/4 w-full min-w-0 mx-2 my-4 rounded-lg shadow-lg hover:shadow-none">


            <div> 
                <img className="object-cover shadow-md rounded-t" src={ props.thumbnail } alt={props.altTxt} />
            </div>
            <div className="m-auto p-6">
                <Link to="/details">
                    <h3 className="text-xl font-bold hover:text-custom-green">
                        { props.businessName }
                    </h3>
                </Link>

                <p className="text-sm"> ${ props.fee } Delivery fee | { props.time } min</p>
                <p>
                    Avg rating:
                    &nbsp; <span className="font-bold">{ props.rating }</span> 
                    <FontAwesomeIcon className="text-custom-limegreen" icon={ faStar } size="sm" /> 
                    &nbsp; ({ props.totalRating })
                </p>
            </div>
        
        
        </div>
    );
}

export default Listing;