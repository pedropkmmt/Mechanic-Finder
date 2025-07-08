import React, { useState, useEffect } from 'react';
import LoginPage from '../components/auth/LoginPage';
import RegisterPage from '../components/auth/RegistrationPage';
import AccountCreationLoading from '../features/CreatingProfile';

const AuthPages = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  
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
    location: '',
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
  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // change handler for reg form
  const handleRegisterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterData({
      ...registerData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
    
  //specialty handler for mechanics
  const handleSpecialty = (specialty) => {
    setRegisterData(prev => ({
      ...prev,
      specializations: prev.specializations.includes(specialty)
        ? prev.specializations.filter(s => s !== specialty)
        : [...prev.specializations, specialty]
    }));
  };

  // Handle login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!loginData.email || !loginData.password) {
      setError('Please fill in all fields');
      return;
    }

  // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(loginData.email)) {
      setError('Please enter a valid email address');
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
    
    console.log('=== REGISTRATION FORM SUBMITTED ===');
    console.log('Current registerData state:', registerData);
    
    // TEMPORARILY: Skip all validation for testing
    console.log('🧪 SKIPPING VALIDATION FOR TESTING...');
    console.log('🎉 Creating account...');
    console.log('Setting isCreatingAccount to true...');
    setIsCreatingAccount(true);

    setTimeout(() => {
      console.log('Account creation completed, redirecting to login...');
      setIsCreatingAccount(false);
      setCurrentPage('login');
      setSuccess('Account created successfully! Please sign in.');
      setTimeout(() => setSuccess(''), 3000);
    }, 5000);
    
    return;

    /*
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

    // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(loginData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    //password validation
    if (registerData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    if (registerData.password !== registerData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Check if user agreed to terms
    if (!registerData.agreeToTerms) {
      setError('Please agree to the terms and conditions.');
      return;
    
    }

    // User type specific validation
    if (registerData.userType === 'customer') {
      if (!registerData.vehicleMake || !registerData.vehicleModel || 
          !registerData.vehicleYear || !registerData.licenceNumber ||
          !registerData.emergencyContact || !registerData.emergencyPhone) {
        setError('Please fill in all vehicle and emergency contact information');
        return;
      }
    }
    
    if (registerData.userType === 'mechanic') {
      if (!registerData.businessName || !registerData.businessAddress ||
          !registerData.yearsOfExperience || !registerData.businessLicense ||
          !registerData.availabilityHours || !registerData.serviceRadius) {
        setError('Please fill in all business information');
        return;
      }

      if (registerData.specializations.length === 0) {
        setError('Please select at least one specialization');
        return;
      }
    }
    
    console.log('Registration data:', registerData);
    setIsCreatingAccount(true);

    setTimeout(() => {
      setIsCreatingAccount(false);
      setCurrentPage('login');
      setSuccess('Account created successfully! Please sign in.');
      setTimeout(() => setSuccess(''), 3000);
    }, 5000)*/;
  };
    
  return (
    <div className="font-sans bg-gray-50">
      {/* Show loading screen during account creation */}
      {isCreatingAccount && <AccountCreationLoading />}
      
      {/* Show login page */}
      {!isCreatingAccount && currentPage === 'login' && (
        <LoginPage
          loginData={loginData}
          handleLoginChange={handleLoginChange}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          handleLoginSubmit={handleLoginSubmit}
          error={error}
          success={success}
          setCurrentPage={setCurrentPage}
        />
      )}

      {/* Show registration page */}
      {!isCreatingAccount && currentPage === 'register' && (
        <RegisterPage
          registerData={registerData}
          handleRegisterChange={handleRegisterChange}
          handleSpecialty={handleSpecialty}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          showConfirmPassword={showConfirmPassword}
          setShowConfirmPassword={setShowConfirmPassword}
          handleRegisterSubmit={handleRegisterSubmit}
          error={error}
          success={success}
          setCurrentPage={setCurrentPage}
        />
      )}
      </div>
  );
};

export default AuthPages;