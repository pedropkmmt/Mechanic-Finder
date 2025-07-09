import React from 'react';
import { Briefcase } from 'lucide-react';

const BusinessInfoSection = ({ userData = {}, isEditing, editData = {}, handleInputChange, handleSpecialization }) => {
  if (!userData || userData.userType !== 'mechanic') return null;
  const safeEditData = {
    businessName: editData?.businessName || '',
    yearsOfExperience: editData?.yearsOfExperience || '',
    businessAddress: editData?.businessAddress || '',
    specializations: editData?.specializations || [],
  };

  const safeUserData = {
    businessName: userData?.businessName || '',
    yearsOfExperience: userData?.yearsOfExperience || '',
    businessAddress: userData?.businessAddress || '',
    specializations: userData?.specializations || [],
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
      <h2 className="text-xl font-semibold text-card-foreground mb-6 flex items-center gap-2">
        <Briefcase className="w-5 h-5 text-primary" />
        Business Information
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-card-foreground mb-2">Business Name</label>
          {isEditing ? (
            <input
              type="text"
              name="businessName"
              value={safeEditData.businessName}
              onChange={handleInputChange}
              className="w-full p-3 border-2 border-input rounded-lg focus:outline-none focus:border-primary transition-all bg-background text-foreground"
            />
          ) : (
            <p className="p-3 bg-secondary rounded-lg text-card-foreground">{safeUserData.businessName}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-card-foreground mb-2">Years of Experience</label>
          {isEditing ? (
            <input
              type="number"
              name="yearsOfExperience"
              value={safeEditData.yearsOfExperience}
              onChange={handleInputChange}
              className="w-full p-3 border-2 border-input rounded-lg focus:outline-none focus:border-primary transition-all bg-background text-foreground"
            />
          ) : (
            <p className="p-3 bg-secondary rounded-lg text-card-foreground">
              {safeUserData.yearsOfExperience ? `${safeUserData.yearsOfExperience} years` : 'Not specified'}
            </p>
          )}
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-card-foreground mb-2">Business Address</label>
          {isEditing ? (
            <input
              type="text"
              name="businessAddress"
              value={safeEditData.businessAddress}
              onChange={handleInputChange}
              className="w-full p-3 border-2 border-input rounded-lg focus:outline-none focus:border-primary transition-all bg-background text-foreground"
            />
          ) : (
            <p className="p-3 bg-secondary rounded-lg text-card-foreground">{safeUserData.businessAddress}</p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-card-foreground mb-2">Specializations</label>
        {isEditing ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {['Engine Repair', 'Brake Service', 'Oil Changes', 'Transmission', 'Electrical', 'Air Conditioning'].map((spec) => (
              <div key={spec} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={spec}
                  checked={safeEditData.specializations.includes(spec)}
                  onChange={() => handleSpecialization(spec)}
                  className="w-4 h-4 accent-primary"
                />
                <label htmlFor={spec} className="text-sm text-card-foreground">
                  {spec}
                </label>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {safeUserData.specializations.map((spec) => (
              <span key={spec} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {spec}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessInfoSection;