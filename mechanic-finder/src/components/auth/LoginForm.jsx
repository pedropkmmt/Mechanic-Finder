import React from 'react';
import { Mail, Lock } from 'lucide-react';
import InputField from './InputField';
import SocialButtons from './SocialButtons';

const LoginForm = ({ 
  loginData, 
  handleLoginChange, 
  handleLoginSubmit, 
  showPassword, 
  setShowPassword 
}) => (
  <form onSubmit={handleLoginSubmit} className="space-y-6">
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

export default LoginForm; 