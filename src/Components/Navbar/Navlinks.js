import React from 'react';

const Navlinks = (props) => {
    return(
        <div className="cursor-pointer py-2
                        lg:w-32 w-full
                        lg:text-center hover:text-custom-green">
            {props.pageName}
        </div>
    );
}

export default Navlinks;