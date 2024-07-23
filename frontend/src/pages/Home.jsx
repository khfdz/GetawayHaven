import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import MostPicked from "../components/MostPicked";
import BeautyBackyard from "../components/BeautyBackyard";
import LargeLivingRoom from "../components/LargeLivingRoom";
import PlaceWithKitchenSet from "../components/PlaceWithKitchenSet";
import ReviewBanner from "../components/ReviewBanner";
import Footer from "../components/Footer";



const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <MostPicked />
            <BeautyBackyard />
            <LargeLivingRoom /> 
            <PlaceWithKitchenSet />
            <ReviewBanner />    
            <Footer />
        </div>
    );
};

export default Home;