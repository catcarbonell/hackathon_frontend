import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger, faChevronRight, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(false);
    const toggleActiveLink = () => {
        let navhidden = document.getElementById('navlinks');
        if(navhidden.classList.contains('hidden')){
            navhidden.classList.remove('hidden');
        }else{
            navhidden.classList.add('hidden');
        }
        setActiveLink(!activeLink)
    };


    return(
        <nav className="px-8 py-4 bg-white
                        flex flex-row lg:justify-center justify-start items-center">
           
            <div id="navlogo" className="w-1/2 flex justify-start">
                <Link to="/">
                    <h3 className="md:text-2xl text-lg font-bold text-custom-red">
                        Us to You
                    </h3>
                </Link>
            </div>
            
            <div id="hamburger" className="lg:hidden w-1/2 flex justify-end">
                <FontAwesomeIcon onClick={toggleActiveLink} className="mr-4 text-custom-blue hover:text-custom-red cursor-pointer" icon={faHamburger} size="2x" />
            </div>
              
            <div id="navlinks" className="relative z-10 lg:w-1/2 lg:flex lg:flex-row lg:justify-end lg:items-center lg:content-center
                                          hidden flex flex-col items-center">
                <div className="lg:flex lg:flex-row lg:h-16 lg:w-auto lg:items-center lg:p-0 lg:m-0
                                absolute z-20 w-350 h-screen bg-white
                                flex flex-col -mt-6 pt-4 pl-4">
                    <span className='m-2 lg:text-sm text-xl hover:text-custom-red cursor-pointer'>Businesses</span>
                    <span className='m-2 lg:text-sm text-xl hover:text-custom-red cursor-pointer'>About Us</span>
                    <span className='m-2 lg:text-sm text-xl hover:text-custom-red cursor-pointer'>My Account</span>
                    
                    <Link to="/login"><span className='m-2 text-xl hover:text-custom-red lg:py-2 lg:px-4 lg:shadow lg:text-white lg:bg-custom-red lg:rounded-md lg:text-sm lg:hover:bg-red-700 lg:hover:text-white cursor-pointer'>Login</span></Link> 
                    <span className="m-2 text-xl hover:text-custom-red cursor-pointer">
                        <span className="lg:hidden">Cart</span> <FontAwesomeIcon className="lg:m-2 ml-2 hover:text-custom-red cursor-pointer" icon={faShoppingBag} size="lg" />
                    </span>
                    <span onClick={toggleActiveLink} className='m-2 lg:hidden text-xl hover:text-custom-red cursor-pointer'>
                        Close <FontAwesomeIcon className="hover:text-custom-red cursor-pointer" icon={faChevronRight} />
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;