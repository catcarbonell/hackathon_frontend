import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Socials = () => {
    return(
        <div className="text-gray-800 mb-10">
            <FontAwesomeIcon className="m-2 hover:text-custom-red cursor-pointer" icon={faFacebook} size="2x" />
            <FontAwesomeIcon className="m-2 hover:text-custom-red cursor-pointer" icon={faInstagram} size="2x" />
            <FontAwesomeIcon className="m-2 hover:text-custom-red cursor-pointer" icon={faTwitter} size="2x" />
        </div>
    )
}

export default Socials;