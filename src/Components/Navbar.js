import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'

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
        <nav className="fixed w-full px-8 bg-white h-16 
                        flex flex-row lg:justify-center justify-start items-center">
           
            <div id="navlogo" className="w-1/2 flex justify-start">
                <h3 className="md:text-2xl text-lg font-bold text-custom-red">
                    Us to You
                </h3>
            </div>
            
            <div id="hamburger" className="lg:hidden w-1/2 flex justify-end">
                <FontAwesomeIcon onClick={toggleActiveLink} className="mr-4 text-custom-blue hover:text-custom-red cursor-pointer" icon={faHamburger} size="2x" />
            </div>
              
            <div id="navlinks" className="lg:flex lg:flex-row lg:justify-end lg:items-center lg:content-center lg:w-1/2 hidden flex-col items-center">
                <div className="md:flex-row md:h-16 flex items-center bg-white">
                    <span className='m-2 hover:text-custom-red cursor-pointer'>About</span>
                    <span className='m-2 hover:text-custom-red cursor-pointer'>My Account</span>
                    <span className='m-2 hover:text-custom-red cursor-pointer'>Logout</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;