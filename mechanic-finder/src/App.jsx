import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import FindMechanicPage from './pages/Landing Page'
import AuthPages from './pages/AuthenticationPages'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Landing/Home Page */}
          <Route 
            path="/" 
            element={<FindMechanicPage />} 
          />
          
          {/* Authentication Routes */}
          <Route 
            path="/auth" 
            element={
              <AuthPages 
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            } 
          />  
          {/* route for 404 */}
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