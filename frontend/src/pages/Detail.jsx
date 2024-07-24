import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { differenceInDays, format, addDays, subDays } from 'date-fns';
import Swal from 'sweetalert2';
import '@sweetalert2/theme-bootstrap-4/bootstrap-4.css';
import Navbar from '../components/Navbar';
import Database from '../data/database.json';
import IconData from '../data/icons.json';
import DetailBanner from '../components/DetailBanner';
import DetailAbout from '../components/DetailAbout';
import DetailBooking from '../components/DetailBooking';
import ReviewBanner from '../components/ReviewBanner';
import Treasure from '../components/Treasure';
import Footer from '../components/Footer';

const Detail = () => {
  const { id } = useParams();
  const place = Database.place.find(p => p.id === parseInt(id));

  if (!place) {
    return <div>Place not found</div>;
  }

  const [nights, setNights] = useState(1);
  const [datesVisible, setDatesVisible] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [dateRangeLabel, setDateRangeLabel] = useState('Pick a Date');

  const totalPrice = place.price * nights;

  const handleIncreaseNights = () => {
    if (startDate && endDate) {
      const newEndDate = addDays(endDate, 1);
      setEndDate(newEndDate);
      const days = differenceInDays(newEndDate, startDate) + 1;
      setNights(days);
      setDateRangeLabel(`${format(startDate, 'dd MMM')} - ${format(newEndDate, 'dd MMM')}`);
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Date not selected',
        text: 'Please select a date range before increasing the number of nights.',
      });
    }
  };

  const handleDecreaseNights = () => {
    if (startDate && endDate && nights > 1) {
      const newEndDate = subDays(endDate, 1);
      setEndDate(newEndDate);
      const days = differenceInDays(newEndDate, startDate) + 1;
      setNights(days);
      setDateRangeLabel(`${format(startDate, 'dd MMM')} - ${format(newEndDate, 'dd MMM')}`);
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Date not selected',
        text: 'Please select a date range before decreasing the number of nights.',
      });
    }
  };

  const handleDatePick = () => setDatesVisible(!datesVisible);

  const handleDateRangeChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    if (start && end) {
      const days = differenceInDays(end, start) + 1;
      setNights(days);
      setDateRangeLabel(`${format(start, 'dd MMM')} - ${format(end, 'dd MMM')}`);
      setDatesVisible(false); // Hide datepicker after both dates are selected
    } else {
      setDateRangeLabel('Pick a Date');
    }
  };

  const formattedNights = startDate && endDate
    ? `${differenceInDays(endDate, startDate) + 1} Night${differenceInDays(endDate, startDate) > 0 ? 's' : ''}`
    : `${nights} Night${nights > 1 ? 's' : ''}`;

  const handleBooking = () => {
    if (!startDate || !endDate) {
      Swal.fire({
        icon: 'warning',
        title: 'Date not selected',
        text: 'Please select a date range before proceeding.',
      });
      return;
    }

    const bookingData = {
      id: place.id,
      name: place.name,
      city: place.city,
      country: place.country,
      totalPrice,
      formattedNights,
      bannerImage: place.image.banner, 
    };

    // Log data booking ke konsol untuk debugging
    console.log("Booking Data:", bookingData);

    // Mengarahkan ke halaman pembayaran
    window.location.href = `/payment?${new URLSearchParams(bookingData).toString()}`;
  };

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
          <DetailBooking 
            place={place}
            icons={icons}
            nights={nights}
            startDate={startDate}
            endDate={endDate}
            dateRangeLabel={dateRangeLabel}
            datesVisible={datesVisible}
            handleIncreaseNights={handleIncreaseNights}
            handleDecreaseNights={handleDecreaseNights}
            handleDatePick={handleDatePick}
            handleDateRangeChange={handleDateRangeChange}
            handleBooking={handleBooking}
            totalPrice={totalPrice}
            formattedNights={formattedNights}
            bannerImage={place.image.banner}
          />
        </div>
      </div>

      <Treasure />
      <ReviewBanner />
      <Footer />
    </div>
  );
};

export default Detail;
