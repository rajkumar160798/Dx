import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ssl from '../../assets/ssl.png';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const initialNavItems = [
    { path: '/app', label: 'Home' },
    { path: 'about', label: 'About' },
    { path: 'contact', label: 'Contact' },
    { path: 'why-choose-us', label: 'Why Choose Us' },
  ];

  const authenticatedNavItems = [
    { path: '/app', label: 'Home' },
    { path: 'upload', label: 'Upload' },
    { path: 'dashboard', label: 'Dashboard' },
    { path: 'reports', label: 'Reports' },
    { path: 'about', label: 'About' },
    { path: 'contact', label: 'Contact' },
  ];

  const navItems = isAuthenticated ? authenticatedNavItems : initialNavItems;

  const handleGetStarted = () => {
    setIsAuthenticated(true);
    navigate('upload');
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img src={ssl} alt="SushrutaDX Logo" className="w-12 h-10 rounded-full" />
              <Link to="/" className="text-2xl font-bold text-blue-600">
                Sushruta<span className="text-gray-800">DX</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${
                    location.pathname === '/app' + (item.path === '/' ? '' : '/' + item.path)
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            {isAuthenticated ? (
              <button
                onClick={() => {
                  setIsAuthenticated(false);
                  navigate('/');
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={handleGetStarted}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Get Started
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${
                location.pathname === '/app' + (item.path === '/' ? '' : '/' + item.path)
                  ? 'bg-blue-50 border-blue-500 text-blue-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 