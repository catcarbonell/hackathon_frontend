import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHamburger,
  faChevronRight,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../Assets/ustoyou-logo.jpg";

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
    <nav
      className="px-8 py-4 bg-white
                        flex flex-row lg:justify-center justify-start items-center"
    >
      <div
        id="navlogo"
        className="w-1/2 flex justify-start items-center align-center content-center"
      >
        <Link to="/">
          <img src={logo} className="w-20" alt="Our company logo" />
          {/* <h3 className="md:text-2xl text-lg font-bold text-custom-green hover:text-red-700">
                    Us to You <FontAwesomeIcon icon={ faHandHoldingHeart } className="text-blue-400" size="1x" />
                    </h3> */}
        </Link>
      </div>

      <div id="hamburger" className="lg:hidden w-1/2 flex justify-end">
        <FontAwesomeIcon
          onClick={toggleActiveLink}
          className="mr-4 text-custom-limegreen hover:text-custom-green cursor-pointer"
          icon={faHamburger}
          size="2x"
        />
      </div>

      <div
        id="navlinks"
        className="relative z-10 lg:w-1/2 lg:flex lg:flex-row lg:justify-end lg:items-center lg:content-center
                                          hidden flex flex-col items-center"
      >
        <div
          className="uppercase lg:text-sm text-xl lg:flex lg:flex-row lg:h-16 lg:w-auto lg:items-center lg:p-0 lg:m-0
                                absolute z-20 w-350 h-screen bg-white
                                flex flex-col -mt-6 pt-4 pl-4"
        >
          <Link to="/">
            <span className="m-2 hover:text-custom-green cursor-pointer">
              Home
            </span>
          </Link>
          <Link to="/businesses">
            <span className="m-4 hover:text-custom-green cursor-pointer">
            All Businesses
            </span>
          </Link>
          <span className="m-4 hover:text-custom-green cursor-pointer">
            About Us
          </span>
          <span className="m-4 hover:text-custom-green cursor-pointer">
            My Account
          </span>

          <Link to="/login">
            <span className="m-4 text-lg uppercase hover:text-custom-green lg:py-2 lg:px-6 lg:shadow-md lg:text-white lg:bg-custom-green lg:rounded-md lg:hover:bg-green-600 lg:hover:text-white cursor-pointer">
              Login
            </span>
          </Link>
          <span className="m-4 hover:text-custom-green cursor-pointer">
            <Link to="/shoppingCart">
              <span className="lg:hidden">My Bag</span>{" "}
              <FontAwesomeIcon
                className="lg:m-2 ml-2 text-custom-limegreen hover:text-green-600 cursor-pointer"
                icon={faShoppingBag}
                size="2x"
              />
            </Link>
          </span>
          <span
            onClick={toggleActiveLink}
            className="m-4 lg:hidden text-xl hover:text-custom-green cursor-pointer"
          >
            Close{" "}
            <FontAwesomeIcon
              className="hover:text-custom-green cursor-pointer"
              icon={faChevronRight}
            />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
