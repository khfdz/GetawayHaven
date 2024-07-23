import React from 'react';

const DetailBanner = ({ place }) => {
  // Determine if there are more than 3 feature images
  const hasMoreThanThreeImages = place.image.feature.length > 3;

  return (
    <div className="flex space-x-4 animate-slide-in">
      {/* Left Side */}
      <div className="flex-1 space-y-4 ">
        {/* Banner Image */}
        <div className="overflow-hidden transition-transform duration-300 transform hover:scale-110 mt-4">
          <img
            src={`/images/${place.image.banner}`}
            alt={place.name}
            className="w-full h-auto object-cover rounded-xl "
          />
        </div>
        
        {/* First Feature Image (conditionally rendered) */}
        {!hasMoreThanThreeImages && place.image.feature[0] && (
          <div className="overflow-hidden transition-transform duration-300 transform hover:scale-110">
            <img
              src={`/images/${place.image.feature[0]}`}
              alt="Feature 1"
              className="w-full h-52 object-cover rounded-xl"
            />
          </div>
        )}
      </div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col space-y-4">
        {/* Second Feature Image */}
        {place.image.feature[1] && (
          <div className="overflow-hidden transition-transform duration-300 transform hover:scale-110 ">
            <img
              src={`/images/${place.image.feature[1]}`}
              alt="Feature 2"
              className="w-full h-52 object-cover rounded-xl"
            />
          </div>
        )}

        {/* Third Feature Image */}
        {place.image.feature[2] && (
          <div className="overflow-hidden transition-transform duration-300 transform hover:scale-110">
            <img
              src={`/images/${place.image.feature[2]}`}
              alt="Feature 3"
              className="w-full h-52 object-cover rounded-xl"
            />
          </div>
        )}

        {/* Fourth Feature Image (conditionally rendered) */}
        {place.image.feature[3] && (
          <div className="overflow-hidden transition-transform duration-300 transform hover:scale-110">
            <img
              src={`/images/${place.image.feature[0]}`}
              alt="Feature 4"
              className="w-full h-52 object-cover rounded-xl"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailBanner;
