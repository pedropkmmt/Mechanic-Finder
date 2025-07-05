import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

const PasswordChange = ({ 
  showPasswordForm, 
  passwordData, 
  showPassword, 
  showNewPassword, 
  setShowPassword, 
  setShowNewPassword,
  handlePasswordChange, 
  handlePasswordSubmit, 
  setShowPasswordForm, 
  setPasswordData, 
  setError 
}) => {
  if (!showPasswordForm) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-card rounded-xl p-6 w-full max-w-md">
        <h3 className="text-xl font-semibold text-card-foreground mb-6">Change Password</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-card-foreground mb-2">Current Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                className="w-full p-3 pr-10 border-2 border-input rounded-lg focus:outline-none focus:border-primary transition-all bg-background text-foreground"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <Eye className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-card-foreground mb-2">New Password</label>
            <div className="relative">
              <input
                type={showNewPassword ? 'text' : 'password'}
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                className="w-full p-3 pr-10 border-2 border-input rounded-lg focus:outline-none focus:border-primary transition-all bg-background text-foreground"
                required
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showNewPassword ? (
                  <EyeOff className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <Eye className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-card-foreground mb-2">Confirm New Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
              className="w-full p-3 border-2 border-input rounded-lg focus:outline-none focus:border-primary transition-all bg-background text-foreground"
              required
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <button
              onClick={handlePasswordSubmit}
              className="flex-1 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all"
            >
              Update Password
            </button>
            <button
              type="button"
              onClick={() => {
                setShowPasswordForm(false);
                setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
                setError('');
              }}
              className="flex-1 py-3 border-2 border-input text-card-foreground rounded-lg hover:bg-secondary transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordChange;