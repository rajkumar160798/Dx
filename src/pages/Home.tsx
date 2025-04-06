import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import sushrutaLogo from '../assets/sushrutadx_logo.png';
import ssl from '../assets/ssl.png';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });

    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = ssl;
    }
  }, []);

  const features = [
    {
      title: 'FDA-Compliant AI Models',
      description: 'Our AI algorithms are developed following FDA guidelines for medical device software, ensuring reliable predictions.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'from-blue-50 to-white',
      hoverColor: 'hover:from-blue-100'
    },
    {
      title: 'Clinical-Grade Analytics',
      description: 'Hospital-validated predictive models with documented accuracy in clinical settings across diverse patient populations.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'from-green-50 to-white',
      hoverColor: 'hover:from-green-100'
    },
    {
      title: 'HIPAA & GDPR Compliant',
      description: 'Enterprise-grade security with end-to-end encryption and full compliance with healthcare data protection standards.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: 'from-purple-50 to-white',
      hoverColor: 'hover:from-purple-100'
    },
    {
      title: 'EMR Integration Ready',
      description: 'Seamless integration with major Electronic Medical Record systems for streamlined clinical workflow.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
      ),
      color: 'from-red-50 to-white',
      hoverColor: 'hover:from-red-100'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'HIPAA Compliance', trend: '+0.1%' },
    { number: '95%', label: 'Prediction Accuracy', trend: '+2.3%' },
    { number: '500+', label: 'Healthcare Partners', trend: '+12' },
    { number: '1M+', label: 'Patients Analyzed', trend: '+50K' }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 to-white">
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
      `}</style>

      {/* Hero Section */}
      <section className="py-16 px-4 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6" data-aos="fade-up">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-float"></div>
            <h1 className="text-4xl sm:text-5xl font-bold  relative z-10">
              Welcome to <span className="text-blue-600 inline-block">Sushruta</span><span className="text-grey-600">DX</span>
            </h1>
          </div>
          <p className="text-lg sm:text-xl max-w-2xl text-gray-600">
            Your trusted platform for AI-powered healthcare predictions and analytics.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="card-3d bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
              <div className="text-sm text-green-500 mt-1">{stat.trend}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-12" data-aos="fade-up">
            Enterprise-Grade Healthcare Platform
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`card-3d group bg-gradient-to-b ${feature.color} p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${feature.color} ${feature.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="text-blue-600 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                  <p className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join leading healthcare providers in revolutionizing patient care with AI-powered predictions.
          </p>
          <Link
            to="/upload"
            className="group inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Upload Patient Data
            <svg 
              className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
