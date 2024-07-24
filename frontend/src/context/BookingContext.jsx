// BookingContext.js
import React, { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookingDetails, setBookingDetails] = useState(null);

  const updateBookingDetails = (details) => {
    setBookingDetails(details);
  };

  return (
    <BookingContext.Provider value={{ bookingDetails, updateBookingDetails }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
