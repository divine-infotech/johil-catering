import React from "react";

//Components
import Navbar from "../components/Navbar";
import VideoSection from "../components/VideoSection";
import Hero from "../components/Hero";
import Join from "../components/Join";
import Gallery from "../components/Gallery";
import FoodItems from "../components/FoodItems";
import Features from "../components/Features";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import EventsShowcase from "../components/EventsShowcase";

const Home = () => {
   return (
      <>
         <Navbar />
         <Hero />
         <VideoSection />
         <EventsShowcase />
         <Join />
         <Gallery />
         <FoodItems />
         <Features />
         <Team />
         <FAQ />
         <Footer />
      </>
   );
};

export default Home;
