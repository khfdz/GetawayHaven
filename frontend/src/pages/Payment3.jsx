import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IconComplete from '../../public/icons/ic_complete.png'; // Ensure this path is correct

const Payment3 = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className='animate-slide-in-bottom flex flex-col items-center'>
      <nav className="bg-white border-gray-200 py-2.5 rounded  mt-1 w-full">
        <div className="container flex items-center justify-center mx-auto">
          <Link to="/" className="text-xl font-small">
            <span className="text-pink1">Getaway</span>
            <span className="text-red-800">haven.</span>
          </Link>
        </div>
        <hr className="border-gray-300 my-4" />
      </nav>

      {/* Label Section */}
      <div className="flex justify-center items-center  w-full">
        <div className="relative flex items-center">
          <div className="absolute inset-x-0 flex items-center">
            <hr className="border-gray-300 w-full" />
          </div>
          <div className="relative flex space-x-12">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green1 text-gray-800 font-semibold">
              <span className="text-white text-xl">&#10003;</span>
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green1 text-gray-800 font-semibold">
              <span className="text-white text-xl">&#10003;</span>
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green1 text-gray-800 font-semibold">
              <span className="text-white text-xl">&#10003;</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 w-full max-w-md">
        {/* Payment Section */}
        <h2 className="text-3xl font-semibold mb-2 text-pink1 text-center">Yay! Success</h2>
        <p className="text-sm mb-2 text-gray-500 text-center">Thank you for believing us</p>
        
        <div className="grid grid-cols-1 gap-6">
          {/* Booking Information */}
          <div className="text-center">
            <div className="pb-6 mb-6">
              {/* Booking Details */}
              <div className="flex flex-col items-center">
                <img src={`${IconComplete}`} alt="Booking" className="w-[220px] h-auto object-cover  mt-4 " />
                <p className="text-sm text-center text-gray-500">We will inform you via email later once the transaction has been accepted</p>
                <button 
                  onClick={handleBackToHome} 
                  className="text-sm px-4 py-2 rounded-md w-[320px] h-10 bg-pink1 text-white mt-4 shadow-lg">
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment3;
