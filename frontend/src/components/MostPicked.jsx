import React from 'react';
import Database from '../data/database.json';
import { Link } from 'react-router-dom';

const MostPicked = () => {
  const firstImage = Database.place[0];
  const secondImages = Database.place.slice(1, 3);
  const thirdImages = Database.place.slice(3, 5);

  return (
    <div className='ml-20 mr-20 mt-10'>
      <h1 className="text-xl mb-4 text-pink1">Most Picked</h1>
      <div className="flex space-x-4">
        {/* First Image */}
        <div className="flex-1 relative overflow-hidden rounded-xl">
          <img src={`/images/${firstImage.imageName}`} alt={firstImage.name} className="w-full h-auto object-cover" />
          <div className="absolute top-0 right-0 bg-blue1 text-white py-1 px-6 rounded-bl-xl">
            <span className="text-sm font-semibold">${firstImage.price}</span> <span className="font-thin text-sm">per night</span>
          </div>
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black via-black/50 to-transparent text-white p-2 w-full">
            <h3 className="text-sm font-thin">{firstImage.name}</h3>
            <p className="text-xs font-thin mt-1">{`${firstImage.city}, ${firstImage.country}`}</p>
          </div>
        </div>

        {/* Second Images */}
        <div className="flex-1 space-y-4">
          {secondImages.map(image => (
            <div key={image.id} className="relative overflow-hidden rounded-xl">
              <img src={`/images/${image.imageName}`} alt={image.name} className="w-full h-auto object-cover" />
              <div className="absolute top-0 right-0 bg-blue1 text-white py-1 px-6 rounded-bl-xl">
                <span className="text-sm font-semibold">${image.price}</span> <span className="font-thin text-sm">per night</span>
              </div>
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black via-black/50 to-transparent text-white p-2 w-full">
                <h3 className="text-sm font-thin">{image.name}</h3>
                <p className="text-xs font-thin mt-1">{`${image.city}, ${image.country}`}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Third Images */}
        <div className="flex-1 space-y-4">
          {thirdImages.map(image => (
            <div key={image.id} className="relative overflow-hidden rounded-xl">
              <img src={`/images/${image.imageName}`} alt={image.name} className="w-full h-auto object-cover" />
              <div className="absolute top-0 right-0 bg-blue1 text-white py-1 px-6 rounded-bl-xl">
                <span className="text-sm font-semibold">${image.price}</span> <span className="font-thin text-sm">per night</span>
              </div>
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black via-black/50 to-transparent text-white p-2 w-full">
                <h3 className="text-sm font-thin">{image.name}</h3>
                <p className="text-xs font-thin mt-1">{`${image.city}, ${image.country}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostPicked;
