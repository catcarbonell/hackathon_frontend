import React from 'react';
import Socials from './Socials';
const Footer = () =>{
    return(
        <footer id="footer" className="pt-10 border-solid border-2 border-custom-red  w-full text-center bg-gray-100">
            <div className="flex flex-col justify-center items-center content-center">
                <div id="newsletter" className="hidden lg:contents lg:w-5/6 lg:text-center lg:mb-10">
                    <h2 className="text-xl font-bold my-4">Join our newsletter to stay up to date!</h2>
                    <form>
                        <input className="w-40 px-4 py-2 m-2 rounded border-2 border-solid border-gray-300" type="text" placeholder="First Name" value="" />
                        <input className="w-40 px-4 py-2 m-2 rounded border-2 border-solid border-gray-300" type="text" placeholder="Last Name" value="" />
                        <input className="w-40 px-4 py-2 m-2 rounded border-2 border-solid border-gray-300" type="email" placeholder="Email" value="" />
                        <button className="w-40 px-4 py-2 m-2 rounded shadow text-white bg-custom-blue hover:bg-custom-red">Subscribe</button>
                    </form>
                </div>
                <div id="sitemap" className="hidden lg:grid lg:grid-flow-col lg:grid-cols-4 lg:gap-32 lg:uppercase lg:text-md lg:text-left lg:my-10">
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

            </div>
        </footer>
    )
}

export default Footer;