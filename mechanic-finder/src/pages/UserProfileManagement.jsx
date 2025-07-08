import React, { useState } from 'react';
import { Calendar, FileText } from 'lucide-react';
import ProfileHeader from '../components/profile/ProfileHeader';
import BasicInfo from '../components/profile/BasicInfo';
import VehicleInfoSection from '../components/profile/VehicleInfo';
import BusinessInfoSection from '../components/profile/BusinessInfo';
import PasswordChange from '../components/profile/PasswordChange';

const ProfileManagement = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const [userData, setUserData] = useState({
    userType: 'customer', // or mechanic
    firstName: 'Pedro',
    lastName: 'MT',
    email: 'pmt.mal@gmail.com',
    phone: '+27 (082) 123-4567',
    location: 'Gauteng, Jhb',
    profileImage: null,
    joinDate: '2024-01-15',
    // Customer data
    vehicleMake: 'Toyota',
    vehicleModel: 'Corolla',
    vehicleYear: '2020',
    licenceNumber: 'ABC-123',
    emergencyContact: 'Zinzi Malatji',
    emergencyPhone: '+27 (083) 987-6543',
    // Mechanic data
    businessName: 'Expert Auto Repair',
    businessAddress: '123 Main St, Gauteng, Soweto',
    yearsOfExperience: '8',
    specializations: ['Engine Repair', 'Brake Service', 'Oil Changes'],
    businessLicense: 'LIC-789456',
    availabilityHours: '8:00 AM - 6:00 PM',
    serviceRadius: '25 km',
    rating: 4.8,
    completedJobs: 156
  });

  const [editData, setEditData] = useState({ ...userData });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleEdit = () => {
    setIsEditing(true);
    setEditData({ ...userData });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData({ ...userData });
    setError('');
  };

  const handleSave = () => {
    setError('');
    
    // form validation
    if (!editData.firstName || !editData.lastName || !editData.email || !editData.phone) {
      setError('Please fill in all required fields');
      return;
    }

    // User specific validation
    if (editData.userType === 'customer') {
      if (!editData.vehicleMake || !editData.vehicleModel || !editData.vehicleYear) {
        setError('Please provide vehicle information');
        return;
      }
    } else if (editData.userType === 'mechanic') {
      if (!editData.businessName || !editData.yearsOfExperience) {
        setError('Please provide your business information');
        return;
      }
    }

    // success message
    setUserData({ ...editData });
    setIsEditing(false);
    setSuccess('Profile updated successfully!');
    setTimeout(() => setSuccess(''), 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value
    });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({
      ...passwordData,
      [name]: value
    });
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      setError('Please fill in all password fields');
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setError('New password must be at least 6 characters long');
      return;
    }

    // password update logic
    setSuccess('Password updated successfully!');
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    setShowPasswordForm(false);
    setTimeout(() => setSuccess(''), 3000);
  };

  const handleSpecialization = (specialization) => {
    const updatedSpecializations = editData.specializations.includes(specialization)
      ? editData.specializations.filter(s => s !== specialization)
      : [...editData.specializations, specialization];
    
    setEditData({
      ...editData,
      specializations: updatedSpecializations
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto">
        <ProfileHeader
          userData={userData}
          isEditing={isEditing}
          handleEdit={handleEdit}
          handleSave={handleSave}
          handleCancel={handleCancel}
          setShowPasswordForm={setShowPasswordForm}
        />
        
        <div className="p-6 space-y-6">
          {/* Status Messages */}
          {error && (
            <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-lg">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
              {success}
            </div>
          )}
          
          <BasicInfo
            userData={userData}
            isEditing={isEditing}
            editData={editData}
            handleInputChange={handleInputChange}
          />
          
          <VehicleInfoSection
          userData={userData}
          isEditing={isEditing}
          editData={editData}  // Make sure this is being passed
          handleInputChange={handleInputChange}
          />
          
          <BusinessInfoSection
            userData={userData}
            isEditing={isEditing}
            editData={editData}
            handleInputChange={handleInputChange}
            handleSpecialization={handleSpecialization}
          />
          
          {/* Account Information */}
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <h2 className="text-xl font-semibold text-card-foreground mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Account Information
            </h2>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Member since {new Date(userData.joinDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <PasswordChange
        showPasswordForm={showPasswordForm}
        passwordData={passwordData}
        showPassword={showPassword}
        showNewPassword={showNewPassword}
        setShowPassword={setShowPassword}
        setShowNewPassword={setShowNewPassword}
        handlePasswordChange={handlePasswordChange}
        handlePasswordSubmit={handlePasswordSubmit}
        setShowPasswordForm={setShowPasswordForm}
        setPasswordData={setPasswordData}
        setError={setError}
      />
    </div>
  );
};

export default ProfileManagement;