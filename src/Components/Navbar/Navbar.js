import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHamburger,
  faChevronRight,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../Assets/ustoyou-logo.jpg";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(false);
  const toggleActiveLink = () => {
    let navhidden = document.getElementById("navlinks");
    if (navhidden.classList.contains("hidden")) {
      navhidden.classList.remove("hidden");
    } else {
      navhidden.classList.add("hidden");
    }
    setActiveLink(!activeLink);
  };

  return (
    <nav className="pl-8 py-4 bg-white
                    flex flex-row lg:justify-center justify-start items-center">

      <div
        id="navlogo"
        className="w-1/2 flex justify-start items-center align-center content-center">
        <Link to="/">
          <img src={logo} className="w-20" alt="Our company logo" />
        </Link>
      </div>

      <div id="hamburger" className="lg:hidden w-1/2 pr-8 flex justify-end">
        <FontAwesomeIcon
          onClick={toggleActiveLink}
          className="mr-4 text-custom-limegreen hover:text-custom-green cursor-pointer"
          icon={faHamburger}
          size="3x"/>
      </div>

      <div id="navlinks"
           className="relative z-10 hidden items-center
                      lg:w-3/4 lg:flex flex lg:flex-row flex-col
                      lg:justify-end lg:content-center">
        
        <div className="absolute z-20 uppercase bg-white
                     lg:p-0 pt-4 pl-4 
                     lg:rounded-none rounded-lg
                     lg:shadow-none shadow-lg
                     lg:w-auto w-350 h-auto
                     lg:flex lg:flex-row flex flex-col
                     lg:text-sm text-xl">
          
          <Link to="/">
            <Navlinks pageName="Home" />
          </Link>

          <Link to="/businesses">
            <Navlinks pageName="Businesses" />
          </Link>

          <Navlinks pageName="About Us" />

          <Link to="/login">
            <Navlinks pageName="Log Out" />
          </Link>

          <Link to="/shoppingCart">
              {/* Number of items in cart will go here */}
              <Navlinks pageName={<FontAwesomeIcon size="lg" icon={faShoppingCart}/>}  />
          </Link>

          <span onClick={toggleActiveLink}
            className="mt-4 pb-8 lg:hidden text-xl hover:text-custom-green cursor-pointer">
            Close &nbsp;
            <FontAwesomeIcon
              className="hover:text-custom-green cursor-pointer"
              icon={faChevronRight}/>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
