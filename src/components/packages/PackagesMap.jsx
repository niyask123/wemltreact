import React from 'react'

const PackagesMap = () => {
      // If no matching package is found, show a message
  if (!selectedPlace) {
    return <div className="text-center text-xl text-gray-600">Package not found.</div>;
  }
  return (
    <div>
      <iframe
              src={`https://www.google.com/maps?q=${selectedPlace.location}&output=embed`}
              className="w-full h-64 rounded-lg mt-2"
              allowFullScreen
            ></iframe>
    </div>
  )
}

export default PackagesMap
