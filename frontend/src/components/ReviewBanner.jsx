import React from 'react';
import Review from '../data/review.json';
import IconData from '../data/icons.json'; // Import JSON for icons
import Database from '../data/database.json'; // Import database JSON

const getRandomFiveStarReview = () => {
  const fiveStarReviews = Review.reviews.filter(review => review.stars === 5);
  const randomIndex = Math.floor(Math.random() * fiveStarReviews.length);
  return fiveStarReviews[randomIndex];
};

const getPlaceDetails = (placeId) => {
  return Database.place.find(place => place.id === placeId);
};

const ReviewBanner = () => {
  const review = getRandomFiveStarReview();
  const place = getPlaceDetails(review.placeId);
  const imageSrc = `/images/review-${review.placeId}.png`;
  const starCount = review.stars; // Number of stars to display
  const starIconSrc = `/icons/${IconData.starIcon}`; // Get star icon source from JSON

  // Generate star icons based on the review rating
  const starIcons = Array.from({ length: starCount }, (_, index) => (
    <img
      key={index}
      src={starIconSrc}
      alt="Star"
      className="w-6 h-6"
    />
  ));

  return (
    <div className="flex items-center justify-between p-8 relative ml-12 mr-24">
      {/* Review Section */}
      <div className="relative flex-1 flex flex-row-reverse items-center space-x-8 space-x-reverse">
        {/* Image Section */}
        <div className="relative">
          {/* Shape Bulat Stroke (Shadow Effect) */}
          <div
            className="absolute inset-0 rounded-custom-rounded border-2"
            style={{
              top: '0px',
              left: '-5px',
              right: '30px',
              bottom: '50px',
              zIndex: '-1',
              transform: 'scale(1.09)', // Slightly larger than the image to create a shadow effect
            }}
          >
          </div>
          <img
            src={imageSrc}
            alt={`Review ${review.placeId}`}
            className="rounded-custom-rounded mb-4 w-60"
          />
        </div>
        
        {/* Review Details Section */}
        <div className="rounded-custom-rounded p-8 bg-white flex-1">
          <p className="text-xl text-pink1 font-bold mb-2 text-justify">
            {review.familyName}
          </p>

          <div className="flex items-center">
            {starIcons}
          </div>
          {/* Additional Information Section */}
          <h1 className="text-xl font-thin text-pink1">
            "{review.comment}"
          </h1>
          {place && (
            <div className="text-sm text-gray-600">
              <p>{place.name}, {place.city}, {place.country}</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ReviewBanner;
