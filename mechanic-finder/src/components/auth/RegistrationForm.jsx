import React from 'react';
import { User, Mail, Lock, Phone, MapPin } from 'lucide-react';
import InputField from './InputField';
import VehicleInfo from './VehicleInfo';
import BusinessInfo from './BusinessInfo';
import { Link, useNavigate } from 'react-router-dom';

const RegisterForm = ({
  registerData,
  handleRegisterChange,
  handleRegisterSubmit,
  handleSpecialty,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword
}) => (
  <form onSubmit={handleRegisterSubmit} className="space-y-6">
    <div>
      <h3 className="text-lg font-semibold text-foreground mb-4">Basic Information</h3>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <InputField
          label="First Name"
          name="firstName"
          value={registerData.firstName}
          onChange={handleRegisterChange}
          placeholder="First name"
          icon={User}
          required
        />
        <InputField
          label="Last Name"
          name="lastName"
          value={registerData.lastName}
          onChange={handleRegisterChange}
          placeholder="Last name"
          required
        />
      </div>

      <div className="mb-4">
        <InputField
          label="Email Address"
          type="email"
          name="email"
          value={registerData.email}
          onChange={handleRegisterChange}
          placeholder="Enter your email"
          icon={Mail}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <InputField
          label="Phone Number"
          type="tel"
          name="phone"
          value={registerData.phone}
          onChange={handleRegisterChange}
          placeholder="Enter your phone number"
          icon={Phone}
          required
        />
        <InputField
          label="Location"
          name="location"
          value={registerData.location}
          onChange={handleRegisterChange}
          placeholder="Enter your location"
          icon={MapPin}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <InputField
          label="Password"
          name="password"
          value={registerData.password}
          onChange={handleRegisterChange}
          placeholder="Enter your password"
          icon={Lock}
          showPasswordToggle
          showPassword={showPassword}
          onTogglePassword={() => setShowPassword(!showPassword)}
          required
        />
        <InputField
          label="Confirm Password"
          name="confirmPassword"
          value={registerData.confirmPassword}
          onChange={handleRegisterChange}
          placeholder="Confirm your password"
          icon={Lock}
          showPasswordToggle
          showPassword={showConfirmPassword}
          onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
          required
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-foreground font-medium text-sm">
          I am a *
        </label>
        <select
          name="userType"
          value={registerData.userType}
          onChange={handleRegisterChange}
          className="w-full py-3 px-4 border-2 border-input rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-blue-primary focus:shadow-focus text-foreground bg-background"
        >
          <option value="customer">Customer</option>
          <option value="mechanic">Mechanic</option>
        </select>
      </div>
    </div>

    {/* Conditional rendering based on user type */}
    {registerData.userType === 'customer' && (
      <VehicleInfo 
        registerData={registerData} 
        handleRegisterChange={handleRegisterChange} 
      />
    )}

    {registerData.userType === 'mechanic' && (
      <BusinessInfo 
        registerData={registerData} 
        handleRegisterChange={handleRegisterChange}
        handleSpecialty={handleSpecialty}
      />
    )}

    <div className="flex items-center gap-2 mb-6">
      <input
        type="checkbox"
        name="agreeToTerms"
        id="agreeToTerms"
        checked={registerData.agreeToTerms}
        onChange={handleRegisterChange}
        className="w-4 h-4 accent-blue-primary"
        required
      />
      <label htmlFor="agreeToTerms" className="text-sm text-muted-foreground">
        I agree to the <a href="#" className="text-blue-primary hover:underline">Terms and Conditions</a> and <a href="#" className="text-blue-primary hover:underline">Privacy Policy</a>
      </label>
    </div>

    <button
      type="submit"
      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl items-center justify-center w-full flex transform hover:scale-105 active:translate-y-0"
    >
      Create Account
    </button>
  </form>
);

export default RegisterForm;