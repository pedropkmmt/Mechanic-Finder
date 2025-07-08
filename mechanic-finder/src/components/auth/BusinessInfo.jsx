import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';
import InputField from './InputField';

const BusinessInfo = ({ registerData, handleRegisterChange, handleSpecialty }) => (
  <div>
    <h3 className="text-lg font-semibold text-foreground mb-4">Business Information</h3>
    
    <div className="mb-4">
      <InputField
        label="Business Name"
        name="businessName"
        value={registerData.businessName}
        onChange={handleRegisterChange}
        placeholder="Enter business name"
        icon={Briefcase}
        required
      />
    </div>

    <div className="grid grid-cols-2 gap-4 mb-4">
      <InputField
        label="Business Address"
        name="businessAddress"
        value={registerData.businessAddress}
        onChange={handleRegisterChange}
        placeholder="Enter business address"
        icon={MapPin}
      />
      <InputField
        label="Years of Experience"
        type="number"
        name="yearsOfExperience"
        value={registerData.yearsOfExperience}
        onChange={handleRegisterChange}
        placeholder="Years of experience"
        min="0"
        required
      />
    </div>

    <div className="mb-4">
      <label className="block mb-2 text-foreground font-medium text-sm">
        Specializations *
      </label>
      <div className="grid grid-cols-2 gap-2">
        {['Engine Repair', 'Brake Service', 'Oil Changes', 'Transmission', 'Electrical', 'Air Conditioning', 'Suspension', 'Fleet Service'].map((spec) => (
          <div key={spec} className="flex items-center gap-2">
            <input
              type="checkbox"
              id={spec}
              checked={registerData.specializations.includes(spec)}
              onChange={() => handleSpecialty(spec)}
              className="w-4 h-4 accent-blue-primary"
            />
            <label htmlFor={spec} className="text-sm text-muted-foreground">
              {spec}
            </label>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default BusinessInfo;