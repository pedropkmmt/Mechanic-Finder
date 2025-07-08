import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, User, Mail, Lock, Phone, MapPin, Calendar, Briefcase } from 'lucide-react';


const AuthPages = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // Login form 
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  // Registration form state
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    userType: 'customer',
    agreeToTerms: false,
    // Customer specific fields
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    licenceNumber: '',
    emergencyContact: '',
    emergencyPhone: '',
    // Mechanic  fields
    businessName: '',
    businessAddress: '',
    yearsOfExperience: '',
    specializations: [],
    businessLicense: '',
    availabilityHours: '',
    serviceRadius: ''
  });

  // login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    // Basic validation
    if (!loginData.email || !loginData.password) {
      setError('Please fill in all fields');
      return;
    }
    
    console.log('Login data:', loginData);
    setSuccess('Login successful! Welcome back.');
    setTimeout(() => setSuccess(''), 3000);
  };

  // Handle registration form submission
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    // Basic validation
    if (!registerData.firstName || !registerData.lastName || !registerData.email || 
        !registerData.phone || !registerData.location || !registerData.password || 
        !registerData.confirmPassword) {
      setError('Please fill in all required fields');
      return;
    }
    
    if (registerData.password !== registerData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    
    if (registerData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    
    if (!registerData.agreeToTerms) {
      setError('Please agree to the terms and conditions.');
      return;
    }

    // User type specific validation
    if (registerData.userType === 'customer') {
      if (!registerData.vehicleMake || !registerData.vehicleModel || !registerData.vehicleYear) {
        setError('Please provide your vehicle information');
        return;
      }
    } else if (registerData.userType === 'mechanic') {
      if (!registerData.businessName || !registerData.yearsOfExperience || registerData.specializations.length === 0) {
        setError('Please provide your business information and specializations');
        return;
      }
    }
    
    console.log('Registration data:', registerData);
    setSuccess('Account created successfully! Welcome aboard.');
    setTimeout(() => setSuccess(''), 3000);
  };

  // Handle input changes for login
  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData({
      ...loginData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // change handler for reg form
  const handleRegisterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterData({
      ...registerData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Handle specialty for mechanics
  const handleSpecialty = (specialization) => {
    const updatedSpecializations = registerData.specializations.includes(specialization)
      ? registerData.specializations.filter(s => s !== specialization)
      : [...registerData.specializations, specialization];
    
    setRegisterData({
      ...registerData,
      specializations: updatedSpecializations
    });
  };

  

  const LoginPage = () => (
    <div className="min-h-screen bg-gradient-bg flex items-center justify-center p-8">
      <div className="bg-card rounded-2xl shadow-xl overflow-hidden w-full max-w-md relative">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium text-center">
          <h1 className="text-2xl font-semibold mb-2">Welcome Back!</h1>
          <p className="opacity-90 text-sm">Sign in to continue to your account</p>
        </div>

        {/* Form */}
        <div className="p-8">
          <div className="flex mb-8 bg-secondary rounded-lg p-1">
            {/*
            <button
              onClick={() => setCurrentPage('login')}
              className={`flex-1 py-3 px-4 rounded-md font-medium text-sm transition-all duration-300  ${
                currentPage === 'login'
                  ? 'bg-card text-blue-primary shadow-sm border-1'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setCurrentPage('register')}
              className={`flex-1 py-3 px-4 rounded-md font-medium text-sm transition-all duration-300 ${
                currentPage === 'register'
                  ? 'bg-card text-blue-primary shadow-sm border-1'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Sign Up
            </button>
            */}
          </div>

          {/* Error Messages */}
          {error && (
            {/*}
            <div className="bg-destructive/10 border border-destructive/20 text-destructive px-3 py-3 rounded-lg text-sm mb-4">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-3 py-3 rounded-lg text-sm mb-4">
              {success}
            </div>
            */}
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-foreground font-medium text-sm">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  placeholder="Enter your email"
                  className="w-full py-3 pl-10 pr-4 border-2 border-input rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-blue-primary focus:shadow-focus placeholder-muted-foreground bg-background"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-foreground font-medium text-sm">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder="Enter your password"
                  className="w-full py-3 pl-10 pr-12 border-2 border-input rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-blue-primary focus:shadow-focus placeholder-muted-foreground bg-background"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <Eye className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot passworjd*/}
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

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-center w-full flex items-center justify-center transform hover:scale-105 active:translate-y-0"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6 text-muted-foreground text-sm">
            <div className="flex-1 h-px bg-border mr-4"></div>
            <span>or continue with</span>
            <div className="flex-1 h-px bg-border ml-4"></div>
          </div>

          {/* Social Buttons */}
          <div className="space-y-3">
            <button className="w-full py-3 px-4 border-2 border-input bg-background rounded-lg text-foreground font-medium transition-all duration-300 hover:border-blue-primary hover:bg-secondary flex items-center justify-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
            <button className="w-full py-3 px-4 border-2 border-input bg-background rounded-lg text-foreground font-medium transition-all duration-300 hover:border-blue-primary hover:bg-secondary flex items-center justify-center gap-2 mb-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Continue with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const RegisterPage = () => (
    <div className="min-h-screen bg-gradient-bg flex items-center justify-center p-8">
      <div className="bg-card rounded-2xl shadow-xl overflow-hidden w-full max-w-2xl relative">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium text-center">
          <h1 className="text-2xl font-semibold mb-2">Create Account</h1>
          <p className="opacity-90 text-sm">Join us and start your journey</p>
        </div>

        {/* Form */}
        <div className="p-8">
          {/* Tab */}
          <div className="flex mb-8 bg-secondary rounded-lg p-1">
            <button
              onClick={() => setCurrentPage('login')}
              className={`flex-1 py-3 px-4 rounded-md font-medium text-sm transition-all duration-300 ${
                currentPage === 'login'
                  ? 'bg-card text-blue-primary shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setCurrentPage('register')}
              className={`flex-1 py-3 px-4 rounded-md font-medium text-sm transition-all duration-300 ${
                currentPage === 'register'
                  ? 'bg-card text-blue-primary shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Errors */}
          {error && (
            <div className="bg-destructive/10 border border-destructive/20 text-destructive px-3 py-3 rounded-lg text-sm mb-4">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-3 py-3 rounded-lg text-sm mb-4">
              {success}
            </div>
          )}

          <form onSubmit={handleRegisterSubmit} className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Basic Information</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 text-foreground font-medium text-sm">
                    First Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <input
                      type="text"
                      name="firstName"
                      value={registerData.firstName}
                      onChange={handleRegisterChange}
                      placeholder="First name"
                      className="w-full py-3 pl-10 pr-4 border-2 border-input rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-blue-primary focus:shadow-focus bg-background"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-foreground font-medium text-sm">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={registerData.lastName}
                    onChange={handleRegisterChange}
                    placeholder="Last name"
                    className="w-full py-3 px-4 border-2 border-input rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-blue-primary focus:shadow-focus placeholder-muted-foreground bg-background"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-foreground font-medium text-sm">
                  Email Address *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={registerData.email}
                    onChange={handleRegisterChange}
                    placeholder="Enter your email"
                    className="w-full py-3 pl-10 pr-4 border-2 border-input rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-blue-primary focus:shadow-focus placeholder-muted-foreground bg-background"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 text-foreground font-medium text-sm">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={registerData.phone}
                      onChange={handleRegisterChange}
                      placeholder="Enter your phone number"
                      className="w-full py-3 pl-10 pr-4 border-2 border-input rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-blue-primary focus:shadow-focus placeholder-muted-foreground bg-background"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-foreground font-medium text-sm">
                    Location *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <input
                      type="text"
                      name="location"
                      value={registerData.location}
                      onChange={handleRegisterChange}
                      placeholder="Enter your location"
                      className="w-full py-3 pl-10 pr-4 border-2 border-input rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-blue-primary focus:shadow-focus placeholder-muted-foreground bg-background"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 text-foreground font-medium text-sm">
                    Password *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={registerData.password}
                      onChange={handleRegisterChange}
                      placeholder="Enter your password"
                      className="w-full py-3 pl-10 pr-12 border-2 border-input rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-blue-primary focus:shadow-focus placeholder-muted-foreground bg-background"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <Eye className="h-5 w-5 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-foreground font-medium text-sm">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={registerData.confirmPassword}
                      onChange={handleRegisterChange}
                      placeholder="Confirm your password"
                      className="w-full py-3 pl-10 pr-12 border-2 border-input rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-blue-primary focus:shadow-focus placeholder-muted-foreground bg-background"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <Eye className="h-5 w-5 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* User Type dropdown*/}
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

            {/* Customer Field */}
            {registerData.userType === 'customer' && (
              {/*
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Vehicle Information</h3>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block mb-2 text-foreground font-medium text-sm">
                      Vehicle Make *
                    </label>
                    <input
                      type="text"
                      name="vehicleMake"
                      value={registerData.vehicleMake}
                      onChange={handleRegisterChange}
                      placeholder="e.g., Toyota"
                      className="w-full py-3 px-4 border-2 border-input rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-blue-primary focus:shadow-focus placeholder-muted-foreground bg-background"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-foreground font-medium text-sm">
                      Vehicle Model *
                    </label>
                    <input
                      type="text"
                      name="vehicleModel"
                      value={registerData.vehicleModel}
                      onChange={handleRegisterChange}
                      placeholder="e.g., Camry"
                      className="w-full py-3 px-4 border-2 border-input rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-blue-primary focus:shadow-focus placeholder-muted-foreground bg-background"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-foreground font-medium text-sm">
                      Year *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <input
                        type="number"
                        name="vehicleYear"
                        value={registerData.vehicleYear}
                        onChange={handleRegisterChange}
                        placeholder="2020"
                        min="1900"
                        max="2025"
                        className="w-full py-3 pl-10 pr-4 border-2 border-input rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-blue-primary focus:shadow-focus placeholder-muted-foreground bg-background"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-foreground font-medium text-sm">
                    License Plate Number
                  </label>
                  <input
                    type="text"
                    name="licenceNumber"
                    value={registerData.licenceNumber}
                    onChange={handleRegisterChange}
                    placeholder="Enter license plate number"
                    className="w-full py-3 px-4 border-2 border-input rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-blue-primary focus:shadow-focus placeholder-muted-foreground bg-background"
                  />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-4 mt-6">Emergency Contact</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block mb-2 text-foreground font-medium text-sm">
                      Emergency Contact Name
                    </label>
                    <input
                      type="text"
                      name="emergencyContact"
                      value={registerData.emergencyContact}
                      onChange={handleRegisterChange}
                      placeholder="Contact person name"
                      className="w-full py-3 px-4 border-2 border-input rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-blue-primary focus:shadow-focus placeholder-muted-foreground bg-background"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-foreground font-medium text-sm">
                      Emergency Contact Phone
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <input
                        type="tel"
                        name="emergencyPhone"
                        value={registerData.emergencyPhone}
                        onChange={handleRegisterChange}
                        placeholder="Emergency contact phone"
                        className="w-full py-3 pl-10 pr-4 border-2 border-input rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-blue-primary focus:shadow-focus placeholder-muted-foreground bg-background"
                      />
                    </div>
                  </div>
                </div>
              </div>
              */}
            )}

            {/* Mechanic Field */}
            {registerData.userType === 'mechanic' && (
              {/*
              <div>
                <section href="authentication">
                <h3 className="text-lg font-semibold text-foreground mb-4">Business Information</h3>
                
                <div className="mb-4">
                  <label className="block mb-2 text-foreground font-medium text-sm">
                    Business Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Briefcase className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <input
                      type="text"
                      name="businessName"
                      value={registerData.businessName}
                      onChange={handleRegisterChange}
                      placeholder="Enter business name"
                      className="w-full py-3 pl-10 pr-4 border-2 border-input rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-blue-primary focus:shadow-focus placeholder-muted-foreground bg-background"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block mb-2 text-foreground font-medium text-sm">
                      Business Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <input
                        type="text"
                        name="businessAddress"
                        value={registerData.businessAddress}
                        onChange={handleRegisterChange}
                        placeholder="Enter business address"
                        className="w-full py-3 pl-10 pr-4 border-2 border-input rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-blue-primary focus:shadow-focus placeholder-muted-foreground bg-background"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-foreground font-medium text-sm">
                      Years of Experience *
                    </label>
                    <input
                      type="number"
                      name="yearsOfExperience"
                      value={registerData.yearsOfExperience}
                      onChange={handleRegisterChange}
                      placeholder="Years of experience"
                      min="0"
                      className="w-full py-3 px-4 border-2 border-input rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-blue-primary focus:shadow-focus placeholder-muted-foreground bg-background"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-foreground font-medium text-sm">
                    Specializations *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Engine Repair', 'Brake Service', 'Oil Changes', 'Transmission', 'Electrical', 'Air Conditioning'].map((spec) => (
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
                </section>
              </div>
              */}
            )}
            <div className="flex items-center gap-2 mb-6">
              {/*
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
              */}
              </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl items-center justify-center w-full flex transform hover:scale-105 active:translate-y-0"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  return currentPage === 'login' ? <LoginPage /> : <RegisterPage />;
};

export default AuthPages;