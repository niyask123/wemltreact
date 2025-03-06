import React from "react";
import { useParams } from "react-router-dom";
import usePackageStore from "../../store/usePackagesStore";
import PakcageImageShow from "../../components/packages/PackageImageShow";
import DetailsPayment from "../../components/Payments/DetailsPayment";

const PackageDetails = () => {
  const { packageName } = useParams(); // Get package name from URL
  const { places } = usePackageStore(); // Get all package places

  // Find the correct package details by matching the URL-friendly name
  const selectedPlace = places.find(
    (place) => place.location.toLowerCase().replace(/\s+/g, "-") === packageName
  );

  // If no matching package is found, show a message
  if (!selectedPlace) {
    return <div className="text-center text-xl text-gray-600">Package not found.</div>;
  }

  return (
    <div className="container mx-auto 2xl:px-40 xl:px-32 p-5">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">{selectedPlace.detailsPageHeading}</h2>

        {/* Grid Layout with Sticky Payment Section */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Content (Images and Details) */}
          <div className="col-span-8">
            <PakcageImageShow images={selectedPlace.images} />
            <div className="flex">
              <h1 className="text-2xl font-bold capitalize mb-4">{selectedPlace.location} Package</h1>
            </div>
            <div className="w-full flex flex-col gap-3">
              <div className="grid grid-cols-3 gap-2">
                <p className="text-slate-500/80 font-medium text-sm">SKU</p>
                <p className="col-span-2 font-medium">BS0000087</p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <p className="text-slate-500/80 font-medium text-sm">CATEGORY</p>
                <p className="col-span-2 text-black text-sm font-semibold">
                  Fire Safes, Premium Safes, Safe
                </p>
              </div>
            </div>
            <p className="mt-2 text-sm">
              Price: <strong>{selectedPlace.price}</strong>
            </p>
            <p className="text-sm text-gray-500">
              {selectedPlace.distance} | {selectedPlace.date}
            </p>
          </div>

          {/* Sticky Payment Section */}
          <div className="col-span-4">
            <div className="sticky top-20">
              <DetailsPayment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
