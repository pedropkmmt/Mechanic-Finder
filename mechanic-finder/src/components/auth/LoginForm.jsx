import React, { useState } from 'react';
import { Mail, Lock, User, Wrench } from 'lucide-react';
import InputField from './InputField';
import SocialButtons from './SocialButtons';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({ 
  loginData, 
  handleLoginChange, 
  handleLoginSubmit, 
  showPassword, 
  setShowPassword 
}) => {
  const [userType, setUserType] = useState('customer');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    handleLoginSubmit(e, userType, (authenticatedUserType) => {
      // Redirect based on user type after successful login
      if (authenticatedUserType === 'mechanic') {
        navigate('/bookings');
      } else {
        navigate('/');
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* User type selection*/}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700">
          I am a:
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setUserType('customer')}
            className={`p-3 rounded-xl border-2 transition-all duration-200 flex items-center justify-center gap-2 ${
              userType === 'customer'
                ? 'border-blue-500 bg-blue-50 text-blue-600'
                : 'border-gray-200 hover:border-gray-300 text-gray-600'
            }`}
          >
            <User size={20} />
            <span className="font-medium">Customer</span>
          </button>
          <button
            type="button"
            onClick={() => setUserType('mechanic')}
            className={`p-3 rounded-xl border-2 transition-all duration-200 flex items-center justify-center gap-2 ${
              userType === 'mechanic'
                ? 'border-blue-500 bg-blue-50 text-blue-600'
                : 'border-gray-200 hover:border-gray-300 text-gray-600'
            }`}
          >
            <Wrench size={20} />
            <span className="font-medium">Mechanic</span>
          </button>
        </div>
      </div>

      <InputField
        label="Email Address"
        type="email"
        name="email"
        value={loginData.email}
        onChange={handleLoginChange}
        placeholder="Enter your email"
        icon={Mail}
        required
      />

      <InputField
        label="Password"
        name="password"
        value={loginData.password}
        onChange={handleLoginChange}
        placeholder="Enter your password"
        icon={Lock}
        showPasswordToggle
        showPassword={showPassword}
        onTogglePassword={() => setShowPassword(!showPassword)}
        required
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            checked={loginData.rememberMe}
            onChange={handleLoginChange}
            className="w-4 h-4 accent-blue-primary"
          />
          <label htmlFor="rememberMe" className="text-sm text-muted-foreground leading-relaxed">
            Remember me
          </label>
        </div>
        <div>
          <a href="#" className="text-blue-primary text-sm font-medium hover:underline">
            Forgot password?
          </a>
        </div>
      </div>

      <button
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-center w-full flex items-center justify-center transform hover:scale-105 active:translate-y-0"
      >
        Sign In
      </button>

      <SocialButtons />
    </form>
  );
};

export default LoginForm;