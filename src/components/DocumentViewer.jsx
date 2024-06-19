import React from 'react';

const DocumentViewer = ({ documentUrl }) => {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = `https://drive.google.com/uc?export=download&id=${documentUrl}`;
    downloadLink.target = '_blank';
    downloadLink.rel = 'noopener noreferrer';
    downloadLink.click();
  };

  return (
    <div className="flex flex-col items-center p-4">

        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-blue-600 to-green-600">
          View My Resume
        </h2>

      <iframe
        src={`https://drive.google.com/file/d/${documentUrl}/preview`}
        title="Document Viewer"
        className="w-full h-96 border-2 border-gray-300 mb-4"
      ></iframe>
      <button
        onClick={handleDownload}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Download Resume 
      </button>
    </div>
  );
};

export default DocumentViewer;
