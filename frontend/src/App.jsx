import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MostPicked from './components/MostPicked';
import BeautyBackyard from './components/BeautyBackyard';
import LargeLivingRoom from './components/LargeLivingRoom';
import PlaceWithKitchenSet from './components/PlaceWithKitchenSet';
import ReviewBanner from './components/ReviewBanner';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Banner />
        <MostPicked />
        <BeautyBackyard />
        <LargeLivingRoom />
        <PlaceWithKitchenSet />
        <ReviewBanner />
        <Footer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <div>Home Page</div>;
}

function Stories() {
  return <div>Stories Page</div>;
}

function Profile() {
  return <div>Profile Page</div>;
}

function Login() {
  return <div>Login Page</div>;
}

export default App;
