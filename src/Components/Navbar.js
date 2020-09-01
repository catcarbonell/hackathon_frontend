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
        <nav className="md:px-12 md:items-center
                        fixed w-full bg-white pl-8 h-16 
                        flex flex-row justify-center items-center content-center">
            <div id="navlogo" className="w-1/2 flex justify-start">
                <h3 className="md:text-2xl text-lg font-bold text-custom-red">
                    Us to You
                </h3>
            </div>

            {/* <div id="searchbar" className="w-1/2">
                <form>
                    <input type="text" name="search" className="w-3/4 px-4 py-2 border-gray-400 border-solid border-2 rounded-full" placeholder="search local shops"  value="" />
                    <button id="searchSubmit" 
                        className="ml-4 bg-blue-500 hover:bg-blue-700 
                                   text-white font-bold 
                                   py-2 px-4 rounded-full">
                        Search
                     </button>
                </form>
            </div> */}
            
            {/* HAMBURGER MENU  */}
            <div id="hamburger" className="lg:hidden w-5/6 contents flex justify-end ">
                <FontAwesomeIcon onClick={toggleActiveLink} className="mr-4 text-custom-blue hover:text-custom-red cursor-pointer" icon={faHamburger} size="2x" />
            </div>
              
            <div id="navlinks" className="lg:flex lg:flex-row lg:justify-end lg:items-center lg:content-center lg:w-1/2 hidden flex-col items-center">
                <div className="md:contents md:flex-row md:h-16 mr-4 flex items-center bg-white">
                    <span className='m-2 hover:text-custom-red cursor-pointer'>About</span>
                    <span className='m-2 hover:text-custom-red cursor-pointer'>My Account</span>
                    <span className='m-2 hover:text-custom-red cursor-pointer'>Logout</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;