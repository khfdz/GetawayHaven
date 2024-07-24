import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 px-12 animate-slide-in-left">
            <div className="container mx-auto px-8 py-4 max-w-screen-xl">
                <div className="flex flex-wrap lg:flex-nowrap justify-between ">
                    {/* Left Section */}
                    <div className="w-full lg:w-1/3 mr-14">
                        <div>
                            <span className="text-pink1 text-lg font-normal">Getaway</span>
                            <span className="text-red-800 text-lg font-normal">haven.</span>
                        </div>
                        <p className="text-gray-700 text-xs hover:text-pink1 text-justify">
                           We make your dream holiday instantly unforgettable and full of moments with your family.
                        </p>
                    </div>

                    {/* Staycation Section */}
                    <div className="w-full lg:w-1/4">
                        <h5 className="text-sm font-semibold text-gray-800 dark:text-white text-pink1">Go Ahead</h5>
                        <ul className="text-gray-700">
                            <li><a href="/" className="text-xs hover:text-pink1">New Account</a></li>
                            <li><a href="/" className="text-xs hover:text-pink1">For Beginners</a></li>
                            <li><a href="/" className="text-xs hover:text-pink1">Explore Us</a></li>
                        </ul>
                    </div>

                    {/* About Us Section */}
                    <div className="w-full lg:w-1/4">
                        <h5 className="text-sm font-semibold text-gray-800 dark:text-white text-pink1">About Us</h5>
                        <ul className=" text-gray-700">
                            <li><a href="/" className="text-xs hover:text-pink1">Our Story</a></li>
                            <li><a href="/" className="text-xs hover:text-pink1">Our Team</a></li>
                            <li><a href="/" className="text-xs hover:text-pink1">Careers</a></li>
                        </ul>
                    </div>

                    {/* Contact & More Section */}
                    <div className="w-full lg:w-1/4">
                        <h5 className="text-sm font-semibold dark:text-white text-pink1">Contact & More</h5>
                        <ul className=" text-gray-700">
                            <li><a href="/" className="text-xs hover:text-pink1">Privacy Policy</a></li>
                            <li><a href="/" className="text-xs hover:text-pink1">Terms & Conditions</a></li>
                            <li><a href="mailto:support@getawayhaven.id" className="text-xs hover:text-pink1">support@getawayhaven.id</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 text-center text-xs ">
                    <p className="text-xs hover:text-pink1">
                        Copyright 2024 • All rights reserved
                    </p>
                    <a href="https://instagram.com/khfdz" className="text-pink1 hover:underline">@khfdz</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
