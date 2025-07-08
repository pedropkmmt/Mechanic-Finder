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
        className={`w-full py-3 ${Icon ? 'pl-10' : 'pl-4'} ${showPasswordToggle ? 'pr-12' : 'pr-4'} border-2 border-input rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-blue-primary focus:shadow-focus placeholder-muted-foreground bg-background`}
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