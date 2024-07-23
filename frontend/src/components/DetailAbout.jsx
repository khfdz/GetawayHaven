import React from 'react';

const DetailAbout = ({ place, icons }) => {
  return (
    <div className="flex-1 mb-10">
      <h2 className="text-xl font-semibold text-pink1 mb-2">About the Place</h2>
      <p className="text-gray-500 mb-4 text-justify text-sm mr-10">{place.description.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}</p>

      {/* Details Section */}
      <div className="grid grid-cols-4 gap-4">
        {/* AC */}
        <div className="flex-col items-start space-y-2">
          <img src={icons.ac} alt="AC" className="w-8 h-8 mb-2" />
          <span className="text-pink1 font-semibold text-left mr-1">{place.details.ac}</span>
          <span className="text-gray-500 text-left text-xs">Air Conditioning</span>
        </div>

        {/* Bedroom */}
        <div className="flex-col items-start space-y-2">
          <img src={icons.bedroom} alt="Bedroom" className="w-8 h-8 mb-2" />
          <span className="text-pink1 font-semibold text-left mr-1">{place.details.bedroom}</span>
          <span className="text-gray-500 text-left text-xs">Bedrooms</span>
        </div>

        {/* Bathroom */}
        <div className="flex-col items-start space-y-2">
          <img src={icons.bathroom} alt="Bathroom" className="w-8 h-8 mb-2" />
          <span className="text-pink1 font-semibold text-left mr-1">{place.details.bathroom}</span>
          <span className="text-gray-500 text-left text-xs">Bathrooms</span>
        </div>

        {/* Dining Room */}
        <div className="flex-col items-start space-y-2">
          <img src={icons.diningRoom} alt="Dining Room" className="w-8 h-8 mb-2" />
          <span className="text-pink1 font-semibold text-left mr-1">{place.details.diningRoom}</span>
          <span className="text-gray-500 text-left text-xs">Dining Room</span>
        </div>

        {/* Refrigerator */}
        <div className="flex-col items-start space-y-2">
          <img src={icons.refrigerator} alt="Refrigerator" className="w-8 h-8 mb-2" />
          <span className="text-pink1 font-semibold text-left mr-1">{place.details.refrigerator}</span>
          <span className="text-gray-500 text-left text-xs">Refrigerator</span>
        </div>

        {/* Living Room */}
        <div className="flex-col items-start space-y-2">
          <img src={icons.livingRoom} alt="Living Room" className="w-8 h-8 mb-2" />
          <span className="text-pink1 font-semibold text-left mr-1">{place.details.livingRoom}</span>
          <span className="text-gray-500 text-left text-xs">Living Room</span>
        </div>

        {/* Television */}
        <div className="flex-col items-start space-y-2">
          <img src={icons.television} alt="Television" className="w-8 h-8 mb-2" />
          <span className="text-pink1 font-semibold text-left mr-1">{place.details.television}</span>
          <span className="text-gray-500 text-left text-xs">Television</span>
        </div>

        {/* WiFi */}
        <div className="flex-col items-start space-y-2">
          <img src={icons.wifi} alt="WiFi" className="w-8 h-8 mb-2" />
          <span className="text-pink1 font-semibold text-left mr-1">{place.details.wifi}</span>
          <span className="text-gray-500 text-left text-xs">Mbp/s</span>
        </div>

        {/* Kitchen Set */}
        <div className="flex-col items-start space-y-2">
          <img src={icons.kitchenset} alt="Kitchen Set" className="w-1/2 mb-2" />
          <span className="text-pink1 font-semibold text-left mr-1">{place.details.kitchenset}</span>
          <span className="text-gray-500 text-left text-xs">Kitchen Set</span>
        </div>

        {/* Backyard */}
        <div className="flex-col items-start space-y-2">
          <img src={icons.backyard} alt="Backyard" className="w-1/2 mb-2" />
          <span className="text-pink1 font-semibold text-left mr-1">{place.details.backyard}</span>
          <span className="text-gray-500 text-left text-xs">M Backyard</span>
        </div>
      </div>
    </div>
  );
};

export default DetailAbout;
