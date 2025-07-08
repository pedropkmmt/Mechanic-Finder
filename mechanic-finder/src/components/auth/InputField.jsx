import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

const InputField = ({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  placeholder, 
  required = false, 
  icon: Icon,
  showPasswordToggle = false,
  showPassword = false,
  onTogglePassword = () => {},
  min,
  max
}) => (
  <div>
    <label className="block mb-2 text-foreground font-medium text-sm">
      {label} {required && '*'}
    </label>
    <div className="relative">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-muted-foreground" />
        </div>
      )}
      <input
        type={showPasswordToggle ? (showPassword ? 'text' : 'password') : type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        max={max}
        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        required={required}
      />
      {showPasswordToggle && (
        <button
          type="button"
          onClick={onTogglePassword}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5 text-muted-foreground" />
          ) : (
            <Eye className="h-5 w-5 text-muted-foreground" />
          )}
        </button>
      )}
    </div>
  </div>
);

export default InputField;