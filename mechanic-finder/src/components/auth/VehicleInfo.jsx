import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import InputField from './InputField';

const VehicleInfo = ({ registerData, handleRegisterChange }) => (
  <div>
    <h3 className="text-lg font-semibold text-foreground mb-4">Vehicle Information</h3>
    
    <div className="grid grid-cols-3 gap-4 mb-4">
      <InputField
        label="Vehicle Make"
        name="vehicleMake"
        value={registerData.vehicleMake}
        onChange={handleRegisterChange}
        placeholder="e.g., Toyota"
        required
      />
      <InputField
        label="Vehicle Model"
        name="vehicleModel"
        value={registerData.vehicleModel}
        onChange={handleRegisterChange}
        placeholder="e.g., Camry"
        required
      />
      <InputField
        label="Year"
        type="number"
        name="vehicleYear"
        value={registerData.vehicleYear}
        onChange={handleRegisterChange}
        placeholder="2020"
        min="1900"
        max="2025"
        icon={Calendar}
        required
      />
    </div>

    <div className="mb-4">
      <InputField
        label="License Plate Number"
        name="licenceNumber"
        value={registerData.licenceNumber}
        onChange={handleRegisterChange}
        placeholder="Enter license plate number"
      />
    </div>

    <h3 className="text-lg font-semibold text-foreground mb-4 mt-6">Emergency Contact</h3>
    <div className="grid grid-cols-2 gap-4 mb-4">
      <InputField
        label="Emergency Contact Name"
        name="emergencyContact"
        value={registerData.emergencyContact}
        onChange={handleRegisterChange}
        placeholder="Contact person name"
      />
      <InputField
        label="Emergency Contact Phone"
        type="tel"
        name="emergencyPhone"
        value={registerData.emergencyPhone}
        onChange={handleRegisterChange}
        placeholder="Emergency contact phone"
        icon={Phone}
      />
    </div>
  </div>
);

export default VehicleInfo;