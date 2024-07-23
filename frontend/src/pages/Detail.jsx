import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import Navbar from '../components/Navbar';
import Database from '../data/database.json';
import IconData from '../data/icons.json'; // Import JSON for icons
import DetailBanner from '../components/DetailBanner';
import DetailAbout from '../components/DetailAbout';
import DetailBooking from '../components/DetailBooking';
import ReviewBanner from '../components/ReviewBanner';
import Treasure from '../components/Treasure';
import Footer from '../components/Footer';

const Detail = () => {
  const { id } = useParams(); // Get ID from URL
  const place = Database.place.find(p => p.id === parseInt(id)); // Find place by ID

  if (!place) {
    return <div>Place not found</div>; // Show error message if place not found
  }

  // Extracting icons from JSON
  const icons = {
    ac: `/icons/${IconData.ic_ac}`,
    bedroom: `/icons/${IconData.ic_bedroom}`,
    bathroom: `/icons/${IconData.ic_bathroom}`,
    diningRoom: `/icons/${IconData.ic_diningroom}`,
    refrigerator: `/icons/${IconData.ic_kulkas}`,
    livingRoom: `/icons/${IconData.ic_livingroom}`,
    television: `/icons/${IconData.ic_tv}`,
    wifi: `/icons/${IconData.ic_wifi}`,
    kitchenset: `/icons/${IconData.ic_kitchenset}`,
    backyard: `/icons/${IconData.ic_backyard}`,
    klender: `/icons/${IconData.ic_klender}`
  };

  return (
    <div>
      <Navbar />
      <div className="ml-20 mr-20 mt-10">
        {/* Breadcrumb */}
        <div className="breadcrumb flex items-center mb-4 text-gray-600 animate-slide-in-right">
          <a href="/" className="text-gray-500">Home</a> 
          <span className="text-gray-500 mx-2">/</span> 
          <span className="text-pink1 font-semibold">Details</span>

          <div className='flex-grow flex items-center justify-center -ml-32'>
            <div className='text-center'>
              <p className="text-pink1 text-xl font-semibold mb-1">{place.name}</p>
              <p className="text-gray-500">{`${place.city}, ${place.country}`}</p>
            </div>
          </div>
        </div>

        <DetailBanner place={place} />

        <div className="mt-6 flex space-x-4 animate-slide-in-right">
          <DetailAbout place={place} icons={icons} />
          <DetailBooking place={place} icons={icons} />
        </div>
      </div>

      <Treasure />
      <ReviewBanner />
      <Footer />
    </div>
  );
};

export default Detail;
