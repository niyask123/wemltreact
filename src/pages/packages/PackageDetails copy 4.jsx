import React, { useState } from "react";
import { useParams } from "react-router-dom";
import usePackageStore from "../../store/usePackagesStore";
import PakcageImageShow from "../../components/packages/PackageImageShow";
import DetailsPayment from "../../components/Payments/DetailsPayment";
import PackageOverallView from "../../components/packages/PackageOverallView";
import PackageReviews from "../../components/packages/PackageReviews";
import PriceAndOffers from "../../components/packages/PriceAndOffers";

const PackageDetails = () => {
  const { packageName } = useParams();
  const { places } = usePackageStore();
  const [showPriceAndOffers, setShowPriceAndOffers] = useState(false);

  const selectedPlace = places.find(
    (place) => place.location.toLowerCase().replace(/\s+/g, "-") === packageName
  );

  if (!selectedPlace) {
    return <div className="text-center text-xl text-gray-600">Package not found.</div>;
  }

  return (
    <div className="container mx-auto 2xl:px-40 xl:px-32 p-5">
      <div className="flex flex-col gap-3">
        
        <h2 className="text-xl font-semibold">{selectedPlace.detailsPageHeading}</h2>
        {showPriceAndOffers && <PriceAndOffers />}
        <div className="grid md:grid-cols-12 gap-6">
          
          <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-1">
            <PakcageImageShow images={selectedPlace.images} />
            <PackageOverallView />
            <iframe
              src={`https://www.google.com/maps?q=${selectedPlace.location}&output=embed`}
              className="w-full h-64 rounded-lg mt-2"
              allowFullScreen
            ></iframe>
          </div>
          <div className="md:col-span-5 lg:col-span-4">
            <div className="sticky top-20">
              <DetailsPayment setShowPriceAndOffers={setShowPriceAndOffers} />
            </div>
          </div>
        </div>
      </div>
      <PackageReviews />
    </div>
  );
};

export default PackageDetails;
