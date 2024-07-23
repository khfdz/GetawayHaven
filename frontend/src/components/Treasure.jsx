import React from 'react';
import { Link } from 'react-router-dom';
import Database from '../data/database.json';

const Treasure = () => {
  // Function to shuffle the places array
  const shuffleArray = (array) => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  // Shuffle the places array and select the first 4
  const shuffledPlaces = shuffleArray(Database.place).slice(0, 4);

  return (
    <div className='ml-20 mr-20 animate-slide-in-right'>
      <h1 className="text-xl mb-1 text-pink1">Maybe you like</h1>
      <div className="flex space-x-4">
        {shuffledPlaces.map(place => (
          <Link key={place.id} to={`/detail/${place.id}`} className="flex-1 relative overflow-hidden rounded-xl transition-transform duration-300 transform hover:scale-110">
            <div className="relative w-full h-44 overflow-hidden rounded-xl">
              <img 
                src={`/images/${place.image.banner}`} 
                alt={place.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="relative p-2 bg-white rounded-b-xl">
              <h3 className="text-sm font-normal text-pink1">{place.name}</h3>
              <p className="text-xs font-normal text-gray-500">{`${place.city}, ${place.country}`}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Treasure;
