import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { differenceInDays, format, addDays, subDays } from 'date-fns';
import Swal from 'sweetalert2';
import '@sweetalert2/theme-bootstrap-4/bootstrap-4.css'; // Import tema SweetAlert2

const DetailBooking = ({ place, icons }) => {
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

  return (
    <div className="w-1/3 h-full bg-white p-8 rounded-lg border mt-2 mb-12">
      <h2 className="text-xl font-bold text-pink1 mb-4">Start Booking</h2>
      <div className='flex items-center mb-4'>
        <p className="text-blue1 font-semibold text-3xl mr-2">{`$${place.price}`}</p>
        <p className='text-gray-400 text-xl font-light'>per night</p>
      </div>

      {/* Stay Duration */}
      <div className="flex justify-between items-center mb-4 bg-gray3 h-10">
        <button
          className="w-10 h-10 bg-red1 text-white text-2xl text-center rounded-md flex items-center justify-center"
          onClick={handleDecreaseNights}
        >
          -
        </button>
        <span className="text-gray-700 font-normal text-sm">{formattedNights}</span>
        <button
          className="w-10 h-10 bg-green1 text-white text-xl text-center rounded-md flex items-center justify-center"
          onClick={handleIncreaseNights}
        >
          +
        </button>
      </div>

      <div className="flex justify-between items-center mb-4 bg-gray3 h-10">
        <button
          className="w-10 h-10 bg-blue3 text-white text-2xl text-center rounded-md flex items-center justify-center"
          onClick={handleDatePick}
        >
          <img src={icons.klender} alt="Calendar" className="w-6 h-6" />
        </button>
        <span className="flex-1 text-gray-700 text-sm text-center flex items-center justify-center">
          {dateRangeLabel}
        </span>
      </div>
      <div className="flex justify-center ">
        {datesVisible && (
          <DatePicker
            selected={startDate}
            onChange={handleDateRangeChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
          />
        )}
      </div>

      {/* Total Price */}
      <div className="flex mb-4 text-sm text-center items-center justify-center">
        <span className="text-gray-400 mr-1">You will pay</span>
        <span className="text-pink1 font-semibold mr-1">{` $${totalPrice} USD`}</span>
        <span className="text-gray-400 mr-1"> per</span>
        <span className="text-pink1 font-semibold">{formattedNights}</span>
      </div>

      {/* Button */}
      <button className="w-full p-2 bg-pink1 text-white rounded-lg shadow-lg shadow-pink1">Continue to Book</button>
    </div>
  );
};

export default DetailBooking;
