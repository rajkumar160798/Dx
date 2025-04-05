import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Shield, LineChart, Bell, Database, Activity, Award } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <img 
                src="https://i.imgur.com/YQBxwZL.png" 
                alt="SushrutaDX Logo" 
                className="w-48 h-48"
              />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              SushrutaDX
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              From Ancient Wisdom to AI Precision
            </p>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Revolutionize healthcare diagnostics with AI-powered predictive analytics. 
              Empower your healthcare practice with accurate insights and personalized patient care.
            </p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => navigate('/upload')}
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%)'
          }}></div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Powerful Features for Modern Healthcare
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Brain}
              title="AI-Powered Analysis"
              description="Advanced machine learning models for predictive analytics and trend analysis"
            />
            <FeatureCard
              icon={Shield}
              title="HIPAA Compliant"
              description="Enterprise-grade security and privacy protection for patient data"
            />
            <FeatureCard
              icon={LineChart}
              title="Predictive Insights"
              description="Accurate predictions for various health conditions and risk factors"
            />
            <FeatureCard
              icon={Bell}
              title="Real-time Alerts"
              description="Instant notifications for critical health indicators"
            />
            <FeatureCard
              icon={Database}
              title="Secure Data Storage"
              description="Encrypted storage and secure access to patient information"
            />
            <FeatureCard
              icon={Activity}
              title="Healthcare Integration"
              description="Seamless integration with existing health information systems"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose SushrutaDX?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your healthcare practice with data-driven insights and improved patient outcomes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Activity className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enhanced Diagnostic Accuracy</h3>
                <p className="text-gray-600">
                  Leverage AI-powered analytics to improve diagnostic precision and predict potential health risks
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Personalized Patient Care</h3>
                <p className="text-gray-600">
                  Deliver tailored treatment plans based on individual patient data and predictive insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Healthcare Practice?
          </h2>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule a Demo
          </button>
        </div>
      </section>
    </div>
  );
}