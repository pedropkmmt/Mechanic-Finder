import React, { useState, useEffect, useRef, useMemo } from 'react';
import MechanicTypes from "../components/MechanicTypes";
import Filterbar from "../features/FilterBar";
import MechanicServiceCards from "../components/MechanicServiceCard";
import SearchedMechanics from "../components/SearchedMechanics"
import WhyChooseUs from "../components/WhyChooseUs";
import NeedSomeHelp from "../components/NeedSomeHelp";
import Blog from "../features/Blog";
import Footer from "../components/footer";

const FindMechanicPage = ({ isAuthenticated, userInfo }) => {

  return (
    <div className="font-sans bg-gray-50 ">
      {/* Hero Section */}
      <section className="relative bg-blue-100 text-center py-16 lg:py-20">
        {isAuthenticated && (
          <>
          <h5 className="text-sm text-gray-500 mb-2">Find Mechanics near you</h5>
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
          Find Your <span className="text-blue-600">Mechanic</span>
        </h1>
        </>
        )}
        {/* Filter Bar */}
        <Filterbar isAuthenticated={isAuthenticated}
          userInfo={userInfo}/>
        {/* Car Image - Only show when authenticated */}
        {isAuthenticated && (
          <div className="relative  z-2">
            <div className="max-w-6xl mx-auto px-4">
              <img
                src="slider51.png"
                alt="Modern car"
                className="w-full max-w-4xl mx-auto"
                style={{
                  filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.2))'
                }}
              />
            </div>
          </div>
        )}
      </section>
       {/* Browse By Type */}
       < MechanicTypes />
        {/* Looking for a Mechanic Card */}
        <MechanicServiceCards isAuthenticated={isAuthenticated}
          userInfo={userInfo}/>
        {/* Searched Mechanics */}
        <SearchedMechanics 
          isAuthenticated={isAuthenticated}
          userInfo={userInfo}
        />
        {/* Why Choose Us */}
        <WhyChooseUs/>
        {/* Need Some Help*/}
        <NeedSomeHelp/>
        {/* Blog*/}
        <Blog/>
        {/* Footer*/}
        <Footer/>

    </div>
  );
};

export default FindMechanicPage;