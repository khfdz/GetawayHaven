import React from 'react';
import Database from '../data/database.json';

const BeautyBackyard = () => {
  // Filter and sort places based on backyard size
  const sortedPlaces = Database.place
    .sort((a, b) => b.details.backyard - a.details.backyard)
    .slice(0, 4); // Get top 4 places

  // Get the largest backyard place for "Most Beauty"
  const mostBeauty = sortedPlaces[0];

  // Function to shuffle the places array
  const shuffleArray = (array) => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  // Shuffle the places array
  const shuffledPlaces = shuffleArray(sortedPlaces);

  return (
    <div className='ml-20 mr-20 mt-10'>
      <h1 className="text-xl mb-4 text-pink1">Beauty backyard</h1>
      <div className="flex space-x-4">
        {shuffledPlaces.map(place => (
          <div key={place.id} className="flex-1 relative overflow-hidden rounded-xl">
            <img src={`/images/${place.imageName}`} alt={place.name} className="w-full h-auto object-cover rounded-t-xl" />
            {place === mostBeauty && (
              <div className="absolute top-0 right-0 bg-blue1 text-white py-1 px-6 rounded-bl-xl">
                <span className="text-sm font-thin">Most Beauty</span>
              </div>
            )}
            <div className="relative p-2 bg-white rounded-b-xl">
              <h3 className="text-sm font-thin text-pink1">{place.name}</h3>
              <p className="text-xs font-thin text-gray1">{`${place.city}, ${place.country}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeautyBackyard;
