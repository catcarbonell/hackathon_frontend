import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Socials = () => {
    return(
        <div className="text-gray-100">
            <FontAwesomeIcon className="m-2 hover:text-custom-green cursor-pointer" icon={faFacebook} size="3x" />
            <FontAwesomeIcon className="m-2 hover:text-custom-green cursor-pointer" icon={faInstagram} size="3x" />
            <FontAwesomeIcon className="m-2 hover:text-custom-green cursor-pointer" icon={faTwitter} size="3x" />
        </div>
    )
}

export default Socials;