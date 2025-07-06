import React from 'react';
import { Car } from 'lucide-react';

const VehicleInfoSection = ({ userData, isEditing, editData, handleInputChange }) => {
  if (userData.userType !== 'customer') return null;

  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
      <h2 className="text-xl font-semibold text-card-foreground mb-6 flex items-center gap-2">
        <Car className="w-5 h-5 text-primary" />
        Vehicle Information
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-card-foreground mb-2">Make</label>
          {isEditing ? (
            <input
              type="text"
              name="vehicleMake"
              value={editData.vehicleMake}
              onChange={handleInputChange}
              className="w-full p-3 border-2 border-input rounded-lg focus:outline-none focus:border-primary transition-all bg-background text-foreground"
            />
          ) : (
            <p className="p-3 bg-secondary rounded-lg text-card-foreground">{userData.vehicleMake}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-card-foreground mb-2">Model</label>
          {isEditing ? (
            <input
              type="text"
              name="vehicleModel"
              value={editData.vehicleModel}
              onChange={handleInputChange}
              className="w-full p-3 border-2 border-input rounded-lg focus:outline-none focus:border-primary transition-all bg-background text-foreground"
            />
          ) : (
            <p className="p-3 bg-secondary rounded-lg text-card-foreground">{userData.vehicleModel}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-card-foreground mb-2">Year</label>
          {isEditing ? (
            <input
              type="number"
              name="vehicleYear"
              value={editData.vehicleYear}
              onChange={handleInputChange}
              className="w-full p-3 border-2 border-input rounded-lg focus:outline-none focus:border-primary transition-all bg-background text-foreground"
            />
          ) : (
            <p className="p-3 bg-secondary rounded-lg text-card-foreground">{userData.vehicleYear}</p>
          )}
        </div>
        
        <div className="md:col-span-3">
          <label className="block text-sm font-medium text-card-foreground mb-2">License Plate</label>
          {isEditing ? (
            <input
              type="text"
              name="licenceNumber"
              value={editData.licenceNumber}
              onChange={handleInputChange}
              className="w-full p-3 border-2 border-input rounded-lg focus:outline-none focus:border-primary transition-all bg-background text-foreground"
            />
          ) : (
            <p className="p-3 bg-secondary rounded-lg text-card-foreground">{userData.licenceNumber}</p>
          )}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-card-foreground mb-4 mt-6">Emergency Contacts</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-card-foreground mb-2">Contact Name</label>
          {isEditing ? (
            <input
              type="text"
              name="emergencyContact"
              value={editData.emergencyContact}
              onChange={handleInputChange}
              className="w-full p-3 border-2 border-input rounded-lg focus:outline-none focus:border-primary transition-all bg-background text-foreground"
            />
          ) : (
            <p className="p-3 bg-secondary rounded-lg text-card-foreground">{userData.emergencyContact}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-card-foreground mb-2">Contact Phone</label>
          {isEditing ? (
            <input
              type="tel"
              name="emergencyPhone"
              value={editData.emergencyPhone}
              onChange={handleInputChange}
              className="w-full p-3 border-2 border-input rounded-lg focus:outline-none focus:border-primary transition-all bg-background text-foreground"
            />
          ) : (
            <p className="p-3 bg-secondary rounded-lg text-card-foreground">{userData.emergencyPhone}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VehicleInfoSection;