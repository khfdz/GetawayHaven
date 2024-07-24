import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "../src/pages/Home";
import Detail from "../src/pages/Detail";
import Payment from "../src/pages/Payment";
import Payment2 from "./pages/Payment2";
import Payment3 from "./pages/Payment3";
import { BookingProvider } from './context/BookingContext'; // Path ke BookingContext

function App() {
  return (
    <BookingProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment2" element={<Payment2 />} />
          <Route path="/payment3" element={<Payment3 />} />
        </Routes>
      </BrowserRouter>
    </BookingProvider>
  );
}

export default App;
