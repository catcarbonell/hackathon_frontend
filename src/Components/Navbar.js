import React from 'react';

const Navbar = () => {
    // toggleMenu state
    return(
        <nav className="md:px-12 md:items-center
                        fixed w-full bg-white pl-8 h-16 
                        flex md:flex-row flex-col justify-center content-center">
            <div id="navlogo"
                 className="md:w-1/2 w-auto 
                            flex justify-start">
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
            
            <div id="navlinks" className="md:flex md:justify-end w-1/2 hidden">
                <div>
                    <span className='m-2 hover:text-custom-red cursor-pointer'>About</span>
                    <span className='m-2 hover:text-custom-red cursor-pointer'>My Account</span>
                    <span className='m-2 hover:text-custom-red cursor-pointer'>Logout</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;