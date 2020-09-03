import React from 'react';

const Navlinks = (props) => {
    return(
        <div className="cursor-pointer mr-8 sm:py-2
                        hover:text-custom-green">
            {props.pageName}
        </div>
    );
}

export default Navlinks;