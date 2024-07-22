import React from 'react';
import BannerImage from '../../public/images/banner.png';
import TravelerIcon from '../../public/icons/ic_traveler.png';
import CitiesIcon from '../../public/icons/ic_cities.png';
import TreasureIcon from '../../public/icons/ic_treasure.png';

const Banner = () => {
  return (
    <div className="flex items-center justify-between p-8 relative ml-12 mr-12">
      {/* Photo Section */}
      <div className="relative flex-1">
        {/* Shape Bulat Stroke (Shadow Effect) */}
        <div
          className="absolute inset-0 rounded-custom-rounded border-2  shadow-stroke"
          style={{
            top: '40px',
            left: '50px',
            right: '-12px',
            bottom: '-10px',
            zIndex: '-1',
            transform: 'scale(1.09)', // Slightly larger than the image to create a shadow effect
          }}
        ></div>
        <img
          src={BannerImage}
          alt="Banner"
          className="rounded-custom-rounded relative"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 pl-8 ml-20">
        <h1 className="text-xl font-bold text-pink1 mb-4">
          Escape the Ordinary,<br /> Embrace Your Adventure
        </h1>
        <p className="text-xs text-gray1 mb-6 text-justify">
          Discover stunning destinations and unique experiences with GetawayHaven. From sun-soaked beaches to serene retreats, we provide everything for your perfect getaway and unforgettable memories.
        </p>

        <button className="bg-pink1 text-xs text-white px-6 py-2 rounded-md shadow-lg hover:bg-pink2 transition">
          Start Your Journey
        </button>

        {/* Icons Section */}
        <div className="flex mt-6 space-x-12">
          <div className="flex flex-col ">
            <img src={TravelerIcon} alt="Travelers" className="w-6 h-6 mb-2" />
            <div className="flex items-center">
              <p className="text-xs font-bold text-pink1 mr-1">80,409</p>
              <p className="text-xs text-gray1">Travelers</p>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={TreasureIcon} alt="Treasure" className="w-6 h-6 mb-2" />
            <div className="flex items-center">
              <p className="text-xs font-bold text-pink1 mr-1">553</p>
              <p className="text-xs text-gray1">Treasure</p>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={CitiesIcon} alt="Cities" className="w-6 h-6 mb-2" />
            <div className="flex items-center">
              <p className="text-xs font-bold text-pink1 mr-1">1,492</p>
              <p className="text-xs text-gray1">Cities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
