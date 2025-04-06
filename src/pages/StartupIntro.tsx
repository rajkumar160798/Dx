import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StartupIntro = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  const handleEnterPlatform = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add a fade-out effect to the entire page
    document.body.classList.add('fade-out');
    
    // Navigate after animation and scroll to top
    setTimeout(() => {
      window.scrollTo(0, 0); // Scroll to top first
      navigate('/app');
    }, 1200); // Increased delay to match animation duration
  };

  const problems = [
    {
      title: 'Late Disease Detection',
      description: 'Traditional healthcare often detects conditions too late, leading to poorer outcomes and higher treatment costs.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      color: 'from-red-50 to-white',
      hoverColor: 'hover:from-red-100'
    },
    {
      title: 'Data Overwhelm',
      description: 'Healthcare providers struggle to process vast amounts of patient data effectively, missing critical patterns.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'from-blue-50 to-white',
      hoverColor: 'hover:from-blue-100'
    },
    {
      title: 'Resource Constraints',
      description: 'Limited specialist availability and rising healthcare costs create barriers to preventive care.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-green-50 to-white',
      hoverColor: 'hover:from-green-100'
    }
  ];

  const solutions = [
    {
      title: 'Early Risk Prediction',
      description: 'AI-powered analysis of patient data to identify health risks before they become serious conditions.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Actionable Insights',
      description: 'Clear, explainable AI recommendations that help doctors make informed decisions quickly.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Accessible Healthcare',
      description: 'Making preventive care more accessible and affordable through intelligent automation.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      )
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-blue-50 to-white transition-opacity duration-800 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        .card-3d {
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        .card-3d:hover {
          transform: rotateX(2deg) rotateY(2deg);
        }
        .fade-out {
          opacity: 0;
          transition: opacity 1.2s ease-out;
        }
        .loading-spinner {
          border: 3px solid rgba(59, 130, 246, 0.1);
          border-radius: 50%;
          border-top: 3px solid #3b82f6;
          width: 24px;
          height: 24px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease-in-out;
        }
        .loading-overlay.visible {
          opacity: 1;
          pointer-events: all;
        }
        .loading-content {
          text-align: center;
        }
        .loading-dots span {
          display: inline-block;
          margin: 0 2px;
          animation: dots 1.4s infinite;
        }
        .loading-dots span:nth-child(2) { animation-delay: 0.2s; }
        .loading-dots span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes dots {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
      `}</style>

      {/* Loading Overlay */}
      <div className={`loading-overlay ${isLoading ? 'visible' : ''}`}>
        <div className="loading-content">
          <div className="loading-spinner mb-4 mx-auto"></div>
          <div className="text-xl font-medium text-blue-600 mb-2">
            Preparing Your Experience
          </div>
          <div className="text-gray-600 loading-dots">
            Loading<span>.</span><span>.</span><span>.</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 right-0 m-4">
        <Link 
          to="/app/about"
          className="text-blue-600 hover:text-blue-700 font-medium mr-4 transition-colors"
        >
          About
        </Link>
        <Link 
          to="/app/contact"
          className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          Contact
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 float-animation">
            Revolutionizing Healthcare with
            <span className="text-blue-600 inline-block hover:scale-105 transition-transform cursor-default"> Predictive AI</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            SushrutaDX is building the future of preventive healthcare by combining advanced AI with medical expertise to detect health risks before they become serious.
          </p>
        </div>
      </div>

      {/* Problem Statement Section */}
      <section className="py-16 px-4 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
            The Problems We're Solving
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div
                key={problem.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`card-3d group bg-gradient-to-b ${problem.color} p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${problem.color} ${problem.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="text-blue-600 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {problem.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{problem.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Our Solution</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="card-3d bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-blue-600 mb-4 transform hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-xl text-gray-600 mb-12">
            We envision a future where AI-powered predictive healthcare becomes the standard,
            enabling early intervention and better health outcomes for everyone.
          </p>
          <button
            onClick={handleEnterPlatform}
            className="group inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="loading-spinner mr-3"></div>
                <span>Entering Platform...</span>
              </>
            ) : (
              <>
                Enter SushrutaDX Platform
                <svg 
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            )}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-600">
        <p>© 2024 SushrutaDX. Building the future of healthcare.</p>
      </footer>
    </div>
  );
};

export default StartupIntro; 