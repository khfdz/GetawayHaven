import React from 'react';
import Database from '../data/database.json';
import { Link } from 'react-router-dom';

const MostPicked = () => {
  // Sort by ID to ensure consistent ordering
  const sortedPlaces = Database.place.sort((a, b) => a.id - b.id);
  const firstImage = sortedPlaces[0];
  const secondImages = sortedPlaces.slice(1, 3);
  const thirdImages = sortedPlaces.slice(3, 5);

  return (
    <div className='ml-20 mr-20 mt-10 animate-slide-in-right'>
      <h1 className="text-xl mb-1 text-pink1">Most Picked</h1>
      <div className="flex space-x-4">
        {/* First Image */}
        <div className="flex-1 relative overflow-hidden rounded-xl transition-transform duration-300 transform hover:scale-110 -mt-1">
          <Link to={`/detail/${firstImage.id}`}>
            <img src={`/images/${firstImage.image.banner}`} alt={firstImage.name} className="w-full h-auto object-cover" />
            <div className="absolute top-0 right-0 bg-blue1 text-white py-1 px-6 rounded-bl-xl">
              <span className="text-sm font-semibold">${firstImage.price}</span> <span className="font-light text-sm">per night</span>
            </div>
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black via-black/50 to-transparent text-white p-2 w-full">
              <h3 className="text-sm font-light">{firstImage.name}</h3>
              <p className="text-xs font-thin mt-1">{`${firstImage.city}, ${firstImage.country}`}</p>
            </div>
          </Link>
        </div>

        {/* Second Images */}
        <div className="flex-1 space-y-4">
          {secondImages.map(image => (
            <div key={image.id} className="relative overflow-hidden rounded-xl transition-transform duration-300 transform hover:scale-110">
              <Link to={`/detail/${image.id}`}>
                <img src={`/images/${image.image.banner}`} alt={image.name} className="w-full h-auto object-cover" />
                <div className="absolute top-0 right-0 bg-blue1 text-white py-1 px-6 rounded-bl-xl">
                  <span className="text-sm font-semibold">${image.price}</span> <span className="font-light text-sm">per night</span>
                </div>
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black via-black/50 to-transparent text-white p-2 w-full">
                  <h3 className="text-sm font-light">{image.name}</h3>
                  <p className="text-xs font-thin mt-1">{`${image.city}, ${image.country}`}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Third Images */}
        <div className="flex-1 space-y-4">
          {thirdImages.map(image => (
            <div key={image.id} className="relative overflow-hidden rounded-xl transition-transform duration-300 transform hover:scale-110">
              <Link to={`/detail/${image.id}`}>
                <img src={`/images/${image.image.banner}`} alt={image.name} className="w-full h-auto object-cover" />
                <div className="absolute top-0 right-0 bg-blue1 text-white py-1 px-6 rounded-bl-xl">
                  <span className="text-sm font-semibold">${image.price}</span> <span className="font-light text-sm">per night</span>
                </div>
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black via-black/50 to-transparent text-white p-2 w-full">
                  <h3 className="text-sm font-light">{image.name}</h3>
                  <p className="text-xs font-thin mt-1">{`${image.city}, ${image.country}`}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostPicked;
