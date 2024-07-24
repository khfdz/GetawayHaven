import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DetailBooking = ({
  place,
  icons,
  nights,
  startDate,
  endDate,
  dateRangeLabel,
  datesVisible,
  handleIncreaseNights,
  handleDecreaseNights,
  handleDatePick,
  handleDateRangeChange,
  handleBooking,
  totalPrice,
  formattedNights
}) => {
  
  return (
    <div className="w-[360px] h-full bg-white p-8 rounded-lg border mt-2 mb-12">
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

      {/* Total Price */}
      <div className="flex mb-4 text-sm text-center items-center justify-center">
        <span className="text-gray-400 mr-1">You will pay</span>
        <span className="text-pink1 font-semibold mr-1">{` $${totalPrice} USD`}</span>
        <span className="text-gray-400 mr-1"> per</span>
        <span className="text-pink1 font-semibold">{formattedNights}</span>
      </div>

      {/* Button */}
      <button
        className="w-full p-2 bg-pink1 text-white rounded-lg shadow-lg shadow-pink1"
        onClick={handleBooking}
      >
        Continue to Book
      </button>
    </div>
  );
};

export default DetailBooking;
