import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/app/about', label: 'About', icon: 'ℹ️' },
    { path: '/app/contact', label: 'Contact', icon: '✉️' },
    { path: '/app/why-choose-us', label: 'Why Choose Us', icon: '🎯' },
    { path: '/app/upload', label: 'Upload', icon: '📤' },
    { path: '/app/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/app/reports', label: 'Reports', icon: '📋' }
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-white shadow-lg">
      <div className="flex h-16 items-center justify-center border-b">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🏥</span>
          <span className="text-xl font-bold text-gray-800">SushrutaDX</span>
        </div>
      </div>
      <nav className="mt-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-2 px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 ${
              location.pathname === item.path ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-4 left-0 right-0 px-4">
        <div className="rounded-lg bg-gray-50 p-3 text-center text-sm text-gray-600">
          Healthcare Data Compliant (Simulated)
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 