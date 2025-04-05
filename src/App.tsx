import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Contact from './pages/Contact';
import About from './pages/About'; // Adjusted the path to match the correct location

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-900">SushrutaDX</span>
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link to="/upload" className="inline-flex items-center px-1 pt-1 text-gray-600 hover:text-gray-900">
              Upload
            </Link>
            <Link to="/dashboard" className="inline-flex items-center px-1 pt-1 text-gray-600 hover:text-gray-900">
              Dashboard
            </Link>
            <Link to="/reports" className="inline-flex items-center px-1 pt-1 text-gray-600 hover:text-gray-900">
              Reports
            </Link>
            <Link to="/about" className="inline-flex items-center px-1 pt-1 text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link to="/contact" className="inline-flex items-center px-1 pt-1 text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">SushrutaDX</h3>
            <p className="text-sm">
              Empowering healthcare providers with AI-driven insights for better patient outcomes.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <p className="text-sm">Email: rajkumar@sushrutadx.com</p>
            <p className="text-sm">Phone: (551) 282 0234</p>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>HIPAA Compliance</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; 2025 SushrutaDX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;