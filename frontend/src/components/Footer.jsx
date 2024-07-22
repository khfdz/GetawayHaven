import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 ml-12 mr-12">
            <div className="container mx-auto px-8 py-4 max-w-screen-xl">
                <div className="flex flex-wrap lg:flex-nowrap justify-between ">
                    {/* Left Section */}
                    <div className="w-full lg:w-1/3 mr-14">
                        <div>
                            <span className="text-pink1 text-lg font-bold">Getaway</span>
                            <span className="text-red-800 text-lg font-bold">haven.</span>
                        </div>
                        <p className="text-gray1 dark:text-gray-300 text-sm">
                            We kaboom your beauty holiday instantly and memorable.
                        </p>
                    </div>

                    {/* Staycation Section */}
                    <div className="w-full lg:w-1/4">
                        <h5 className="text-sm font-bold text-gray-800 dark:text-white text-pink1">Staycation</h5>
                        <ul className="text-gray1">
                            <li><a href="/" className="text-xs dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">New Account</a></li>
                            <li><a href="/" className="text-xs dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">For Beginners</a></li>
                            <li><a href="/" className="text-xs  dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">Explore Us</a></li>
                        </ul>
                    </div>

                    {/* About Us Section */}
                    <div className="w-full lg:w-1/4">
                        <h5 className="text-sm font-bold text-gray-800 dark:text-white text-pink1">About Us</h5>
                        <ul className=" text-gray1">
                            <li><a href="/" className="text-xs textdark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">Our Story</a></li>
                            <li><a href="/" className="text-xs dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">Our Team</a></li>
                            <li><a href="/" className="text-xs dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">Careers</a></li>
                        </ul>
                    </div>

                    {/* Contact & More Section */}
                    <div className="w-full lg:w-1/4">
                        <h5 className="text-sm font-bold dark:text-white text-pink1">Contact & More</h5>
                        <ul className=" text-gray1">
                            <li><a href="/" className="text-xs dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">Privacy Policy</a></li>
                            <li><a href="/" className="text-xs dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">Terms & Conditions</a></li>
                            <li><a href="mailto:support@getawayhaven.id" className="text-xs dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">support@getawayhaven.id</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 text-center text-xs">
                    <p className="text-gray1 dark:text-gray-300">
                        Copyright 2024 • All rights reserved
                    </p>
                    <a href="https://instagram.com/khfdz" className="text-pink1 hover:underline">@khfdz</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
