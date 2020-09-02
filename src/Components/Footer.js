import React from 'react';
import Socials from './Socials';
const Footer = () =>{
    return(
        <footer id="footer" className="p-20 flex flex-col content-center items-center justify-center text-gray-100 bg-gray-800">
                <div id="newsletter" className="hidden lg:contents lg:w-5/6 lg:text-center lg:mb-10">
                    <h2 className="text-3xl font-bold my-4">Join our newsletter to stay up to date!</h2>
                    <form>
                        <input className="w-48 px-4 py-2 m-2 rounded border-2 border-solid border-gray-300" type="text" placeholder="First Name" value="" />
                        <input className="w-48 px-4 py-2 m-2 rounded border-2 border-solid border-gray-300" type="text" placeholder="Last Name" value="" />
                        <input className="w-48 px-4 py-2 m-2 rounded border-2 border-solid border-gray-300" type="email" placeholder="Email" value="" />
                        <button className="w-48 px-4 py-2 m-2 rounded shadow text-white uppercase bg-custom-green hover:bg-green-600">Subscribe</button>
                    </form>
                </div>
                <div id="sitemap" className="hidden lg:grid lg:grid-flow-col lg:grid-cols-4 lg:gap-20 lg:uppercase lg:text-md lg:text-left lg:my-10 lg:p-4">
                    <div>
                        <h6 className="text-lg font-bold">About</h6>
                        <p>Contact Us</p>
                    </div>
                    <div>
                        <h6 className="text-lg font-bold">Our Work</h6>
                        <p>Latest News</p>
                        <p>Our Programs</p>
                    </div>
                    <div>
                        <h6 className="text-lg font-bold">Resources</h6>
                        <p>Events</p>
                        <p>Terms and Services</p>
                    </div>
                    <div>
                        <h6 className="text-lg font-bold">Ways to Help</h6>
                        <p>Donate</p>
                        <p>Volunteer</p>
                        <p>Give Monthly</p>
                    </div>
                </div>

                <Socials />


        </footer>
    )
}

export default Footer;