import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Sushruta<span className="text-gray-800">DX</span>
            </Link>
            <p className="mt-4 text-gray-500 text-sm">
              Empowering healthcare providers with AI-powered predictive analytics
              and actionable insights for better patient outcomes.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="mailto:raj@sushrutadx.com" className="text-gray-500 hover:text-gray-900">
                  raj@sushrutadx.com
                </a>
              </li>
              <li>
                <a href="tel:+15512820234" className="text-gray-500 hover:text-gray-900">
                  +1 (551) 282 0234
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/privacy" className="text-gray-500 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-500 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 flex items-center justify-between">
          <p className="text-gray-400 text-sm">
            © 2024 SushrutaDX. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              HIPAA Compliant
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              SOC 2 Type II
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 