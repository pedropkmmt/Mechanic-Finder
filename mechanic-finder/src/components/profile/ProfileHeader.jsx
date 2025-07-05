import React from 'react';
import { 
  User, Edit3, Save, X, Camera, Settings, Award, Shield
} from 'lucide-react';

const ProfileHeader = ({ 
  userData, 
  isEditing, 
  handleEdit, 
  handleSave, 
  handleCancel, 
  setShowPasswordForm 
}) => {
  return (
    <div className="bg-gradient-to-r from-primary to-primary/80 p-8 text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-6">
          <div className="relative group">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              {userData.profileImage ? (
                <img 
                  src={userData.profileImage} 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <User className="w-12 h-12 text-primary-foreground" />
              )}
            </div>
            {isEditing && (
              <button className="absolute bottom-0 right-0 bg-accent p-2 rounded-full hover:bg-accent/90 transition-colors">
                <Camera className="w-4 h-4 text-accent-foreground" />
              </button>
            )}
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">
              {userData.firstName} {userData.lastName}
            </h1>
            <p className="text-primary-foreground/90 capitalize text-lg">
              {userData.userType === 'mechanic' ? `Professional Mechanic` : 'Customer'}
            </p>
            {userData.userType === 'mechanic' && (
              <div className="flex items-center gap-4 mt-2 text-sm text-primary-foreground/80">
                <span className="flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  {userData.rating} ★ Rating
                </span>
                <span className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  {userData.completedJobs} Jobs
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          {!isEditing ? (
            <>
              <button
                onClick={handleEdit}
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm"
              >
                <Edit3 className="w-4 h-4" />
                Edit Profile
              </button>
              <button
                onClick={() => setShowPasswordForm(true)}
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm"
              >
                <Settings className="w-4 h-4" />
                Change Password
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-all duration-300"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-all duration-300"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;