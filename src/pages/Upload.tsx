import React from 'react';
import { Upload as UploadIcon } from 'lucide-react';

function Upload() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Upload Medical Records</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <UploadIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Drag and drop your files here
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              or click to select files from your computer
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Select Files
            </button>
          </div>
          
          <div className="mt-6">
            <h4 className="font-medium text-gray-900 mb-2">Supported file types:</h4>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              <li>DICOM images (.dcm)</li>
              <li>PDF documents (.pdf)</li>
              <li>Medical reports (.txt, .doc, .docx)</li>
              <li>Lab results (.csv, .xlsx)</li>
            </ul>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Maximum file size: 50MB</span>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Upload Files
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;