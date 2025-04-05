import React from 'react';
import { LineChart, BarChart, Activity } from 'lucide-react';

function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Medical Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Patient Analysis</h3>
            <Activity className="text-blue-500 h-6 w-6" />
          </div>
          <p className="text-3xl font-bold text-gray-900">247</p>
          <p className="text-sm text-gray-500">Total patients analyzed</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Processing</h3>
            <LineChart className="text-green-500 h-6 w-6" />
          </div>
          <p className="text-3xl font-bold text-gray-900">12</p>
          <p className="text-sm text-gray-500">Reports in progress</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Completed</h3>
            <BarChart className="text-purple-500 h-6 w-6" />
          </div>
          <p className="text-3xl font-bold text-gray-900">189</p>
          <p className="text-sm text-gray-500">Reports completed</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Uploads</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Patient #{item}0234</p>
                  <p className="text-sm text-gray-500">Uploaded 2 hours ago</p>
                </div>
                <span className="px-3 py-1 text-sm text-green-700 bg-green-100 rounded-full">
                  Completed
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">System Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-gray-700">AI Model Status</p>
              <span className="px-3 py-1 text-sm text-green-700 bg-green-100 rounded-full">
                Operational
              </span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-700">Processing Queue</p>
              <span className="px-3 py-1 text-sm text-blue-700 bg-blue-100 rounded-full">
                4 pending
              </span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-700">System Performance</p>
              <span className="px-3 py-1 text-sm text-green-700 bg-green-100 rounded-full">
                Optimal
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;