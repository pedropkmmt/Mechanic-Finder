import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FilterBar from "./FilterBar";
import MechanicsFinder from "../pages/ListingPage";

const FilterData = ({ isAuthenticated, userInfo }) => {
  const location = useLocation();
  
  const [filters, setFilters] = useState({
    category: 'Diesel mechanics',
    location: '',
    range: '',
    price: '',
    searchName: ''
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const urlFilters = {};
    
   
    ['category', 'location', 'range', 'price', 'searchName'].forEach(key => {
      const value = searchParams.get(key);
      if (value) {
        urlFilters[key] = value;
      }
    });
    
    if (Object.keys(urlFilters).length > 0) {
      setFilters(prevFilters => ({
        ...prevFilters,
        ...urlFilters
      }));
    }
  }, [location.search]);

  const handleFiltersChange = (newFilters) => {
    console.log('Filters updated in FilterData:', newFilters);
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <FilterBar 
        isAuthenticated={isAuthenticated}
        userInfo={userInfo}
        onFiltersChange={handleFiltersChange}
      />
      
      {isAuthenticated && (
        <MechanicsFinder 
          filters={filters}
        />
      )}
    </div>
  );
};

export default FilterData;