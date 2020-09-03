import React from 'react';

const Navlinks = (props) => {
    return(
        <div className="cursor-pointer lg:mt-0 md:mt-2 md:mr-8 mt-4
                        hover:text-custom-green">
            {props.pageName}
        </div>
    );
}

export default Navlinks;