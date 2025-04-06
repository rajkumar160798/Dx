import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-hot-toast';

const Upload = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    patientName: '',
    age: '',
    gender: '',
    patientId: '',
  });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize: 50 * 1024 * 1024, // 50MB
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/dicom': ['.dcm'],
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast.error('Please select a file to upload');
      return;
    }

    setLoading(true);
    // Simulate upload and processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    toast.success('File uploaded successfully! Analyzing data...');
    await new Promise(resolve => setTimeout(resolve, 1500));
    navigate('/dashboard');
  };

  const insights = [
    {
      title: 'Risk Assessment',
      description: 'Get detailed risk scores for various health conditions based on patient data.',
      icon: '🎯',
    },
    {
      title: 'Early Warning Indicators',
      description: 'Identify potential health issues before they become critical through pattern recognition.',
      icon: '⚠️',
    },
    {
      title: 'Treatment Recommendations',
      description: 'Receive AI-powered suggestions for preventive care and treatment options.',
      icon: '💊',
    },
    {
      title: 'Comparative Analysis',
      description: 'Compare patient metrics against population benchmarks and historical data.',
      icon: '📊',
    },
    {
      title: 'Trend Visualization',
      description: 'View interactive charts and graphs showing health trends over time.',
      icon: '📈',
    },
    {
      title: 'HIPAA Compliance',
      description: 'All analysis is performed with strict adherence to privacy and security standards.',
      icon: '🔒',
    },
  ];

  return (
    <div className="w-full">
      {/* Upload Section */}
      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">Upload Patient Data</h1>
            <p className="mt-4 text-xl text-gray-600">
              Securely upload patient data for AI-powered analysis and predictions
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div
                {...getRootProps()}
                className={`p-12 border-2 border-dashed rounded-xl text-center cursor-pointer transition-all ${
                  isDragActive ? 'border-blue-500 bg-blue-50 scale-105' : 'border-gray-300 hover:border-blue-400'
                }`}
              >
                <input {...getInputProps()} />
                <div className="space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-blue-600"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M24 8l12 12m-12-12l-12 12m12-12v24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="text-gray-600">
                    {isDragActive ? (
                      <p className="text-xl">Drop the file here...</p>
                    ) : (
                      <p className="text-xl">
                        Drag & drop your file here, or <span className="text-blue-500">browse</span>
                      </p>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">
                    Supported formats: CSV, XLSX, PDF, DOCX, DICOM (max 50MB)
                  </p>
                </div>
                {file && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg inline-block">
                    <p className="text-blue-600 font-medium">Selected: {file.name}</p>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">
                    Patient Name
                  </label>
                  <input
                    type="text"
                    id="patientName"
                    name="patientName"
                    value={formData.patientName}
                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="patientId" className="block text-sm font-medium text-gray-700">
                    Patient ID
                  </label>
                  <input
                    type="text"
                    id="patientId"
                    name="patientId"
                    value={formData.patientId}
                    onChange={(e) => setFormData({ ...formData, patientId: e.target.value })}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex justify-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all ${
                    loading ? 'opacity-75 cursor-not-allowed' : 'transform hover:scale-105'
                  }`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Upload and Analyze'
                  )}
                </button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                HIPAA-ready. Your data remains secure and private.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Insights You'll Receive</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight) => (
              <div
                key={insight.title}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{insight.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{insight.title}</h3>
                <p className="text-gray-600">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Upload;