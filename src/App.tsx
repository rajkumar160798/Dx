import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import About from './pages/About';
import Contact from './pages/Contact';
import WhyChooseUs from './pages/WhyChooseUs';
import StartupIntro from './pages/StartupIntro';

// ScrollToTop component to handle scroll behavior
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

// RouteTransition component to handle loading states
const RouteTransition = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <style>{`
        .route-transition {
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }
        .route-transition.loaded {
          opacity: 1;
        }
        .global-loading {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          transition: opacity 0.3s ease-in-out;
        }
        .global-loading.fade-out {
          opacity: 0;
          pointer-events: none;
        }
      `}</style>
      <div className={`route-transition ${!isLoading ? 'loaded' : ''}`}>
        {children}
      </div>
      <div className={`global-loading ${!isLoading ? 'fade-out' : ''}`}>
        <div className="text-blue-600">
          <svg className="animate-spin h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<StartupIntro />} />
        
        {/* Main application routes wrapped in Layout */}
        <Route path="/app/*" element={
          <RouteTransition>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="upload" element={<Upload />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="reports" element={<Reports />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="why-choose-us" element={<WhyChooseUs />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Layout>
          </RouteTransition>
        } />
        
        {/* Redirect unmatched routes to landing page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;