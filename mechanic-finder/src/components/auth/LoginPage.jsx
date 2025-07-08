import React from 'react';
import PageHeader from './FormHeader';
import TabNavigation from './TabNavigation';
import Message from './Message';
import LoginForm from './LoginForm';

const LoginPage = ({
  currentPage,
  setCurrentPage,
  error,
  success,
  loginData,
  handleLoginChange,
  handleLoginSubmit,
  showPassword,
  setShowPassword
}) => (
  <div className="min-h-screen bg-gradient-bg flex items-center justify-center p-8">
    <div className="bg-card rounded-2xl shadow-xl overflow-hidden w-full max-w-md relative">
      <PageHeader 
        title="Welcome Back!" 
        subtitle="Sign in to your account" 
      />

      <div className="p-8">
        <TabNavigation 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
        />

        <Message type="error" message={error} />
        <Message type="success" message={success} />

        <LoginForm
          loginData={loginData}
          handleLoginChange={handleLoginChange}
          handleLoginSubmit={handleLoginSubmit}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
      </div>
    </div>
  </div>
);

export default LoginPage;