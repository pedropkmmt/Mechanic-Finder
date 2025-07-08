import React from 'react';
import PageHeader from './FormHeader';
import TabNavigation from './TabNavigation';
import Message from './Message';
import RegisterForm from './RegistrationForm';

const RegisterPage = ({
  currentPage,
  setCurrentPage,
  error,
  success,
  registerData,
  handleRegisterChange,
  handleRegisterSubmit,
  handleSpecialty,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword
}) => (
  <div className="min-h-screen bg-gradient-bg flex items-center justify-center p-8">
    <div className="bg-card rounded-2xl shadow-xl overflow-hidden w-full max-w-2xl relative">
      <PageHeader 
        title="Create Account" 
        subtitle="Join us and start your journey" 
      />

      <div className="p-8">
        <TabNavigation 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
        />

        <Message type="error" message={error} />
        <Message type="success" message={success} />

        <RegisterForm
          registerData={registerData}
          handleRegisterChange={handleRegisterChange}
          handleRegisterSubmit={handleRegisterSubmit}
          handleSpecialty={handleSpecialty}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          showConfirmPassword={showConfirmPassword}
          setShowConfirmPassword={setShowConfirmPassword}
        />
      </div>
    </div>
  </div>
);

export default RegisterPage;