import React, { useState } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { toast } from 'react-hot-toast';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [showExplainability, setShowExplainability] = useState(false);

  // Dummy data for statistics
  const stats = [
    { title: 'Total Patients Analyzed', value: '1,234', change: '+12%', trend: 'up' },
    { title: 'Reports Processing', value: '23', change: '-5%', trend: 'down' },
    { title: 'Reports Completed', value: '1,211', change: '+8%', trend: 'up' },
  ];

  // Dummy data for risk predictions
  const riskPredictions = [
    { condition: 'Diabetes', risk: 'High', confidence: '92%' },
    { condition: 'Heart Disease', risk: 'Low', confidence: '85%' },
    { condition: 'Hypertension', risk: 'Medium', confidence: '78%' },
    { condition: 'Obesity', risk: 'High', confidence: '89%' },
  ];

  // Dummy data for line chart (vitals)
  const vitalsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Blood Pressure',
        data: [120, 118, 122, 125, 123, 121],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Heart Rate',
        data: [72, 75, 70, 68, 71, 69],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
    ],
  };

  // Dummy data for pie chart (condition breakdown)
  const conditionData = {
    labels: ['Diabetes', 'Heart Disease', 'Hypertension', 'Obesity', 'Other'],
    datasets: [
      {
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
        ],
      },
    ],
  };

  const handleDownloadReport = async () => {
    const element = document.getElementById('dashboard-content');
    if (!element) return;

    try {
      const canvas = await html2canvas(element);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('patient-report.pdf');
      toast.success('Report downloaded successfully!');
    } catch (error) {
      toast.error('Failed to generate report');
    }
  };

  return (
    <div className="space-y-8" id="dashboard-content">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
            <div className="mt-2 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              <span
                className={`ml-2 text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Risk Predictions */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Risk Predictions</h2>
          <button
            onClick={() => setShowExplainability(true)}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            View Explainability
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {riskPredictions.map((prediction, index) => (
            <div key={index} className="border rounded-lg p-4">
              <h3 className="font-medium text-gray-900">{prediction.condition}</h3>
              <div className="mt-2">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    prediction.risk === 'High'
                      ? 'bg-red-100 text-red-800'
                      : prediction.risk === 'Medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {prediction.risk} Risk
                </span>
                <p className="mt-1 text-sm text-gray-500">Confidence: {prediction.confidence}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Vitals Trend</h2>
          <Line data={vitalsData} />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Condition Breakdown</h2>
          <Pie data={conditionData} />
        </div>
      </div>

      {/* Download Report Button */}
      <div className="flex justify-end">
        <button
          onClick={handleDownloadReport}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Download Report
        </button>
      </div>

      {/* Explainability Modal */}
      {showExplainability && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Model Explainability</h3>
              <button
                onClick={() => setShowExplainability(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600">
                This SHAP (SHapley Additive exPlanations) graph shows how each feature contributes to the prediction.
                Positive values indicate features that increase the risk, while negative values indicate features that decrease the risk.
              </p>
              {/* Placeholder for SHAP graph */}
              <div className="mt-4 h-64 bg-gray-200 rounded flex items-center justify-center">
                <p className="text-gray-500">SHAP Graph Visualization</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;