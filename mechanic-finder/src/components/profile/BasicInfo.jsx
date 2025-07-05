import React from 'react';
import { User, Mail, Phone, MapPin } from 'lucide-react';

const BasicInfo = ({ userData, isEditing, editData, handleInputChange }) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
      <h2 className="text-xl font-semibold text-card-foreground mb-6 flex items-center gap-2">
        <User className="w-5 h-5 text-primary" />
        Basic Information
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-card-foreground mb-2">First Name</label>
          {isEditing ? (
            <input
              type="text"
              name="firstName"
              value={editData.firstName}
              onChange={handleInputChange}
              className="w-full p-3 border-2 border-input rounded-lg focus:outline-none focus:border-primary transition-all bg-background text-foreground"
            />
          ) : (
            <p className="p-3 bg-secondary rounded-lg text-card-foreground">{userData.firstName}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-card-foreground mb-2">Last Name</label>
          {isEditing ? (
            <input
              type="text"
              name="lastName"
              value={editData.lastName}
              onChange={handleInputChange}
              className="w-full p-3 border-2 border-input rounded-lg focus:outline-none focus:border-primary transition-all bg-background text-foreground"
            />
          ) : (
            <p className="p-3 bg-secondary rounded-lg text-card-foreground">{userData.lastName}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-card-foreground mb-2">Email Address</label>
          {isEditing ? (
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                name="email"
                value={editData.email}
                onChange={handleInputChange}
                className="w-full p-3 pl-10 border-2 border-input rounded-lg focus:outline-none focus:border-primary transition-all bg-background text-foreground"
              />
            </div>
          ) : (
            <p className="p-3 bg-secondary rounded-lg text-card-foreground flex items-center gap-2">
              <Mail className="w-4 h-4 text-muted-foreground" />
              {userData.email}
            </p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-card-foreground mb-2">Phone Number</label>
          {isEditing ? (
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="tel"
                name="phone"
                value={editData.phone}
                onChange={handleInputChange}
                className="w-full p-3 pl-10 border-2 border-input rounded-lg focus:outline-none focus:border-primary transition-all bg-background text-foreground"
              />
            </div>
          ) : (
            <p className="p-3 bg-secondary rounded-lg text-card-foreground flex items-center gap-2">
              <Phone className="w-4 h-4 text-muted-foreground" />
              {userData.phone}
            </p>
          )}
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-card-foreground mb-2">Location</label>
          {isEditing ? (
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                name="location"
                value={editData.location}
                onChange={handleInputChange}
                className="w-full p-3 pl-10 border-2 border-input rounded-lg focus:outline-none focus:border-primary transition-all bg-background text-foreground"
              />
            </div>
          ) : (
            <p className="p-3 bg-secondary rounded-lg text-card-foreground flex items-center gap-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              {userData.location}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;