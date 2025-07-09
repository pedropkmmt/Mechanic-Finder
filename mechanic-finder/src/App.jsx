import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import FindMechanicPage from './pages/Landing Page'
import AuthPages from './pages/AuthenticationPages'
import MechanicsFinder from './pages/ListingPage'
import BusinessListing from './services/BusinessListing'
import MechanicDetails from './pages/MechanicDetails'
import SouthAfricanMap from './services/SouthAricanMap'
import ProfileManagement from './pages/UserProfileManagement'
import MechanicBookings from './components/bookings/mechanics/BookingsInfo'
import NavBar from './components/Navbar'
import FilterModal from './features/FilterModal'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userInfo, setUserInfo] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check authentication status on app load
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const storedAuth = localStorage.getItem('isAuthenticated');
        const storedUserInfo = localStorage.getItem('userInfo');
        
        if (storedAuth === 'true' && storedUserInfo) {
          const parsedUserInfo = JSON.parse(storedUserInfo);
          setIsAuthenticated(true);
          setUserInfo(parsedUserInfo);
          console.log('User restored from localStorage:', parsedUserInfo);
        }
      } catch (error) {
        console.error('Error parsing user info:', error);
        // Clear invalid data
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userInfo');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userInfo');
    setIsAuthenticated(false);
    setUserInfo(null);
    console.log('User logged out');
  };

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <NavBar 
          isAuthenticated={isAuthenticated}
          userInfo={userInfo}
          onLogout={handleLogout}
        />
        
        <Routes>
          {/* Landing/Home Page */}
          <Route 
            path="/" 
            element={
              <FindMechanicPage 
                isAuthenticated={isAuthenticated}
                userInfo={userInfo}
              />
            } 
          />
          
          {/* Authentication Routes */}
          <Route 
            path="/auth" 
            element={
              isAuthenticated ? (
                <Navigate to="/" replace />
              ) : (
                <AuthPages 
                  isAuthenticated={isAuthenticated}
                  setIsAuthenticated={setIsAuthenticated}
                  setUserInfo={setUserInfo}
                />
              )
            } 
          /> 
          
          {/* Listing Page Routes */}
          <Route 
            path="/listing" 
            element={
              <MechanicsFinder
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                userInfo={userInfo}
              />
            } 
          />
          
          {/* Business Listing */}
          <Route 
            path="/business" 
            element={
              <BusinessListing
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                userInfo={userInfo}
              />
            } 
          />
          
          {/* Business Details */}
          <Route 
            path="/details" 
            element={
              <MechanicDetails
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                userInfo={userInfo}
              />
            } 
          />
          
          {/* South African Map */}
          <Route 
            path="/map" 
            element={
              <SouthAfricanMap
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                userInfo={userInfo}
              />
            } 
          />

          {/* Customer Profile Management - Only accessible for customers */}
          <Route 
            path="/profile" 
            element={
              isAuthenticated && userInfo?.userType === 'customer' ? (
                <ProfileManagement
                  isAuthenticated={isAuthenticated}
                  userInfo={userInfo}
                  setUserInfo={setUserInfo}
                />
              ) : isAuthenticated && userInfo?.userType === 'mechanic' ? (
                <Navigate to="/business-profile" replace />
              ) : (
                <Navigate to="/auth" replace />
              )
            } 
          />

          {/* Business Profile Management - Only accessible for mechanics
          <Route 
            path="/business-profile" 
            element={
              isAuthenticated && userInfo?.userType === 'mechanic' ? (
                <BusinessProfileManagement
                  isAuthenticated={isAuthenticated}
                  userInfo={userInfo}
                  setUserInfo={setUserInfo}
                />
              ) : isAuthenticated && userInfo?.userType === 'customer' ? (
                <Navigate to="/profile" replace />
              ) : (
                <Navigate to="/auth" replace />
              )
            } 
          /> */}

          {/* Mechanic Bookings - Only accessible for mechanics */}
          <Route 
            path="/bookings" 
            element={
              isAuthenticated && userInfo?.userType === 'mechanic' ? (
                <MechanicBookings
                  isAuthenticated={isAuthenticated}
                  userInfo={userInfo}
                />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          
          {/* Route for 404 */}
          <Route 
            path="*" 
            element={
              <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
                  <p className="text-gray-600 mb-4">Page not found</p>
                  <a 
                    href="/" 
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Go back to home
                  </a>
                </div>
              </div>
            } 
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App