import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(search);

  // Mengambil data dari query parameter
  const placeId = query.get('id');
  const totalPrice = query.get('totalPrice');
  const formattedNights = query.get('formattedNights');
  const bannerImage = query.get('bannerImage');
  const placeName = query.get('name');
  const city = query.get('city');
  const country = query.get('country');

  // Menggabungkan city dan country menjadi satu string
  const placeLocation = `${city}, ${country}`;

  // State untuk form input
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  // Menangani perubahan input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Mengecek apakah semua input telah diisi
  const isFormComplete = Object.values(formData).every(value => value.trim() !== '');

  // Fungsi untuk menyelesaikan reservasi
  const handleCompleteReservation = () => {
    navigate('/payment2', {
      state: { totalPrice }
    });
  };

  return (
    <div className='animate-slide-in-bottom'>
      <nav className="bg-white border-gray-200 py-2.5 rounded mb-6 mt-1">
        <div className="container flex items-center justify-center mx-auto">
          <Link to="/" className="text-xl font-small">
            <span className="text-pink1">Getaway</span>
            <span className="text-red-800">haven.</span>
          </Link>
        </div>
        <hr className="border-gray-300 my-4" />
      </nav>

      {/* Label Section */}
      <div className="flex justify-center items-center mb-2">
        <div className="relative flex items-center">
          <div className="absolute inset-x-0 flex items-center">
            <hr className="border-gray-300 w-full" />
          </div>
          <div className="relative flex space-x-12">
            <div className='border-2 border-gray-300 rounded-full'>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-gray-600 font-semibold border-4 border-white">1</div>
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-gray-600 font-semibold">2</div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-gray-600 font-semibold">3</div>
          </div>
        </div>
      </div>

      <div className="p-6 ml-20 mr-20">
        {/* Payment Section */}
        <h2 className="text-3xl font-semibold mb-2 text-pink1 text-center">Booking Information</h2>
        <p className="text-sm mb-12 text-gray-500 text-center">Please fill up the blank fields below</p>
        
        <div className="grid grid-cols-2 gap-6">
          {/* Booking Information */}
          <div>
            <div className="pb-6 mb-6 mr-12 ">
              {/* Booking Details */}
              <div>
                <img src={`/images/${bannerImage}`} alt="Booking" className="w-full h-auto object-cover mb-4 mt-4 rounded" />
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-semibold">{placeName}</p>
                    <p className="text-gray-500">{placeLocation}</p>
                  </div>
                  <p className="text-sm font-semibold text-right mt-4">
                    <span className="text-pink1 font-semibold">${totalPrice} USD</span> <span className="text-gray-500 font-normal">per</span> <span className="text-pink1 font-semibold">{formattedNights}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form Section */}
          <div className="border-l-2 border-gray-300 pl-14">
            <div className="flex flex-col gap-4">
              <label className="text-sm font-semibold text-pink1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter your first name"
                className="text-sm bg-gray3 p-2 h-12 rounded border"
              />
              
              <label className="text-sm font-semibold text-pink1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter your last name"
                className="text-sm bg-gray3 p-2 h-12 rounded border"
              />
              
              <label className="text-sm font-semibold text-pink1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className="text-sm bg-gray3 p-2 h-12 rounded border"
              />
              
              <label className="text-sm font-semibold text-pink1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="text-sm bg-gray3 p-2 h-12 rounded border"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 mt-6">
          <button
            onClick={handleCompleteReservation}
            disabled={!isFormComplete}
            className={`text-sm px-4 py-2 rounded-md w-[320px] h-10 ${isFormComplete ? 'bg-pink1 text-white shadow-md' : 'bg-gray-400 text-gray-200'}`}
          >
            Complete Your Reservation
          </button>
          <button
            onClick={() => navigate('/')}
            className="text-sm bg-gray3 text-gray-500 px-4 py-2 rounded-md w-[320px] h-10"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
};

export default Payment;
