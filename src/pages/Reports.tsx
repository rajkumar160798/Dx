import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FileText, Download, Search, Filter } from 'lucide-react';

// Dummy data for reports
const dummyReports = [
  {
    id: 1,
    name: 'John Smith',
    date: '2024-03-15',
    condition: 'Diabetes',
    risk: 'High',
    status: 'Completed',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    date: '2024-03-14',
    condition: 'Heart Disease',
    risk: 'Medium',
    status: 'Completed',
  },
  {
    id: 3,
    name: 'Michael Brown',
    date: '2024-03-13',
    condition: 'Hypertension',
    risk: 'Low',
    status: 'Completed',
  },
  {
    id: 4,
    name: 'Emily Davis',
    date: '2024-03-12',
    condition: 'Obesity',
    risk: 'High',
    status: 'Completed',
  },
  {
    id: 5,
    name: 'David Wilson',
    date: '2024-03-11',
    condition: 'Diabetes',
    risk: 'Medium',
    status: 'Completed',
  },
];

const Reports = () => {
  const [filterCondition, setFilterCondition] = useState('');
  const [filterRisk, setFilterRisk] = useState('');

  const handleDownload = (reportId: number) => {
    // Simulate report download
    toast.success(`Downloading report #${reportId}...`);
  };

  const filteredReports = dummyReports.filter((report) => {
    if (filterCondition && report.condition !== filterCondition) return false;
    if (filterRisk && report.risk !== filterRisk) return false;
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Medical Reports</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2">
          <FileText className="h-4 w-4" />
          Generate New Report
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search reports..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <Filter className="h-5 w-5 text-gray-500" />
            Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredReports.map((report) => (
                <tr key={report.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{report.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.condition}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      report.risk === 'Low' ? 'bg-green-100 text-green-800' :
                      report.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {report.risk}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">Showing {filteredReports.length} of {filteredReports.length} reports</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50" disabled>
            Previous
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50" disabled>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;

