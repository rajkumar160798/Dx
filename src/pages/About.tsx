import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">About SushrutaDX</h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Revolutionizing healthcare diagnostics with AI-powered insights and precision.
        </p>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is SushrutaDX?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            SushrutaDX is an innovative healthcare platform inspired by the ancient wisdom of Sushruta, 
            the father of surgery, combined with the power of modern artificial intelligence. 
            Our mission is to empower healthcare providers with advanced diagnostic tools, 
            predictive analytics, and personalized insights to improve patient outcomes.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            At SushrutaDX, we aim to bridge the gap between traditional healthcare practices and 
            cutting-edge technology. By leveraging AI and machine learning, we provide healthcare 
            professionals with actionable insights, enabling them to make informed decisions and 
            deliver better care.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose SushrutaDX?</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>AI-powered diagnostic tools for enhanced accuracy.</li>
            <li>HIPAA-compliant data security and privacy.</li>
            <li>Real-time alerts and predictive analytics.</li>
            <li>Seamless integration with existing healthcare systems.</li>
            <li>Commitment to improving patient outcomes and healthcare efficiency.</li>
          </ul>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Join Us in Transforming Healthcare</h3>
          <p className="text-lg text-gray-600">
            Together, we can create a future where technology and healthcare work hand in hand 
            to deliver exceptional patient care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;