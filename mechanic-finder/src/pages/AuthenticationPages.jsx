import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPage from '../components/auth/LoginPage';
import RegisterPage from '../components/auth/RegistrationPage';
import AccountCreationLoading from '../features/CreatingProfile';

const AuthPages = ({ isAuthenticated, setIsAuthenticated, setUserInfo }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  
  // Dummy user data for testing
  const dummyUsers = {
    // Customer account
    'customer@test.com': {
      email: 'customer@test.com',
      password: 'password123',
      userType: 'customer',
      firstName: 'Pedro',
      lastName: 'MT',
      phone: '+27 123 456 789',
      location: 'Cape Town',
      vehicleMake: 'Toyota',
      vehicleModel: 'Camry',
      vehicleYear: '2020',
      licenceNumber: 'ABC123GP',
      emergencyContact: 'Jane Doe',
      emergencyPhone: '+27 987 654 321'
    },
    // Mechanic account
    'mechanic@test.com': {
      email: 'mechanic@test.com',
      password: 'password123',
      userType: 'mechanic',
      firstName: 'Nombuso',
      lastName: 'Sm',
      phone: '+27 456 789 012',
      location: 'Johannesburg',
      businessName: 'Smith Auto Repair',
      businessAddress: '123 Main Street, Johannesburg',
      yearsOfExperience: '10',
      specializations: ['Engine Repair', 'Brake Service', 'Transmission'],
      businessLicense: 'BL123456',
      availabilityHours: '8:00 AM - 6:00 PM',
      serviceRadius: '25 km'
    }
  };
  
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
    // Mechanic fields
    businessName: '',
    businessAddress: '',
    yearsOfExperience: '',
    specializations: [],
    businessLicense: '',
    availabilityHours: '',
    serviceRadius: ''
  });

  // Check if user is already logged in when component mounts
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, navigate]);

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
  const handleLoginSubmit = async (e, userType, redirectCallback) => {
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

  // Check if user exists in dummy data
  const user = dummyUsers[loginData.email];
  if (!user) {
    setError('User not found. Try customer@test.com or mechanic@test.com');
    return;
  }

  // Check password
  if (user.password !== loginData.password) {
    setError('Invalid password. Use: password123');
    return;
  }

  // Successful login
  console.log('Login successful:', user);
  
  try {
    // Store user info in localStorage to persist across page refreshes
    localStorage.setItem('userInfo', JSON.stringify(user));
    localStorage.setItem('isAuthenticated', 'true');
    
    // Set authentication state AND user info
    setIsAuthenticated(true);
    setUserInfo(user);
    
    setSuccess(`Welcome back, ${user.firstName}!`);
    
    // Use the redirect callback from LoginForm if provided
    if (redirectCallback && typeof redirectCallback === 'function') {
      setTimeout(() => {
        redirectCallback(user.userType);
      });
    } else {
      // Fallback redirect logic
      setTimeout(() => {
        if (user.userType === 'mechanic') {
          navigate('/bookings', { replace: true });
        } else {
          navigate('/', { replace: true });
        }
      }, 1500);
    }
  } catch (error) {
    console.error('Login error:', error);
    setError('Login failed. Please try again.');
  }
};

  // Handle registration form submission
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    console.log('=== REGISTRATION FORM SUBMITTED ===');
    console.log('Current registerData state:', registerData);
    
    // Basic validation
    if (!registerData.firstName || !registerData.lastName || !registerData.email || 
        !registerData.phone || !registerData.location || !registerData.password || 
        !registerData.confirmPassword) {
      setError('Please fill in all required fields');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(registerData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Password validation
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

    // Simulate account creation
    try {
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Create user object for immediate login after registration
      const newUser = {
        email: registerData.email,
        password: registerData.password,
        userType: registerData.userType,
        firstName: registerData.firstName,
        lastName: registerData.lastName,
        phone: registerData.phone,
        location: registerData.location,
        ...(registerData.userType === 'customer' ? {
          vehicleMake: registerData.vehicleMake,
          vehicleModel: registerData.vehicleModel,
          vehicleYear: registerData.vehicleYear,
          licenceNumber: registerData.licenceNumber,
          emergencyContact: registerData.emergencyContact,
          emergencyPhone: registerData.emergencyPhone
        } : {
          businessName: registerData.businessName,
          businessAddress: registerData.businessAddress,
          yearsOfExperience: registerData.yearsOfExperience,
          specializations: registerData.specializations,
          businessLicense: registerData.businessLicense,
          availabilityHours: registerData.availabilityHours,
          serviceRadius: registerData.serviceRadius
        })
      };

      // Store user info and auto-login
      localStorage.setItem('userInfo', JSON.stringify(newUser));
      localStorage.setItem('isAuthenticated', 'true');
      
      setIsAuthenticated(true);
      setUserInfo(newUser);
      
      setIsCreatingAccount(false);
      setSuccess(`Account created successfully! Welcome, ${newUser.firstName}!`);
      
      // Navigate to home page after successful registration
      setTimeout(() => {
        navigate('/', { replace: true });
      }, 2000);
      
    } catch (error) {
      console.error('Registration error:', error);
      setIsCreatingAccount(false);
      setError('Registration failed. Please try again.');
    }
  };
    
  return (
    <div className="font-sans bg-gray-50">
      {/* Demo Login */}
      <div className="max-w-md mx-auto pt-8 px-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-blue-800 mb-2">Demo Login Credentials</h3>
          <div className="text-sm text-blue-700 space-y-1">
            <p><strong>Customer:</strong> customer@test.com</p>
            <p><strong>Mechanic:</strong> mechanic@test.com</p>
            <p><strong>Password:</strong> password123</p>
          </div>
        </div>
      </div>

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