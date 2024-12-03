import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        {/* Loading Text */}
        <p className="text-lg font-semibold text-gray-600">Loading, please wait...</p>
      </div>
    </div>
  )
}

export default LoadingSpinner
