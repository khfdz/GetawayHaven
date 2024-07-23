import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 py-2.5 rounded mb-6">
        <div className="container flex items-center justify-between mx-auto">
          <Link to="/" className="text-xl font-small">
            <span className="text-pink1">Getaway</span>
            <span className="text-red-800">haven.</span>
          </Link>
        </div>
        <hr className="border-gray-300 my-4" />
      </nav>

      {/* Label Section */}
      <div className="flex justify-center items-center mb-6">
        <div className="relative flex items-center">
          <div className="absolute inset-x-0 flex items-center">
            <hr className="border-gray-300 w-full" />
          </div>
          <div className="relative flex space-x-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-800 font-semibold">1</div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-800 font-semibold">2</div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-800 font-semibold">3</div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Payment Section */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Booking Information */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-2 text-pink1 text-center">Booking Information</h2>
            <p className="text-sm mb-6 text-gray-500 text-center">Please fill up the blank fields below</p>
            
            <div className="border-b border-gray-300 pb-6 mb-6">
              {/* Booking Details */}
              <div className="flex flex-col md:flex-row gap-4">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                  <img src="/path/to/image.jpg" alt="Booking" className="w-full h-auto object-cover mb-4 rounded" />
                  <p className="text-lg font-semibold">Name of the Place</p>
                  <p className="text-gray-500">City, Country</p>
                </div>
                
                {/* Form Section */}
                <div className="w-full md:w-1/2">
                  <div className="flex flex-col gap-4">
                    <p className="text-xl font-semibold text-right">$480 USD per 2 nights</p>
                    <label className="text-sm font-medium">First Name</label>
                    <input type="text" placeholder="Enter your first name" className="p-2 border border-gray-300 rounded" />
                    
                    <label className="text-sm font-medium">Last Name</label>
                    <input type="text" placeholder="Enter your last name" className="p-2 border border-gray-300 rounded" />
                    
                    <label className="text-sm font-medium">Email Address</label>
                    <input type="email" placeholder="Enter your email address" className="p-2 border border-gray-300 rounded" />
                    
                    <label className="text-sm font-medium">Phone Number</label>
                    <input type="tel" placeholder="Enter your phone number" className="p-2 border border-gray-300 rounded" />
                  </div>
                </div>
              </div>
            </div>

            <button className="bg-red-800 text-white px-4 py-2 rounded-md">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
