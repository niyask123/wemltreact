import React from "react";
import { useParams } from "react-router-dom";
import usePackageStore from "../../store/usePackagesStore";
import PakcageImageShow from "../../components/packages/PackageImageShow";
import DetailsPayment from "../../components/Payments/DetailsPayment";
import PackageOverallView from "../../components/packages/PackageOverallView";
import PackageReviews from "../../components/packages/PackageReviews";
import PriceAndOffers from "../../components/packages/PriceAndOffers";
import PackagesSpecialPromos from "../../components/packages/PackagesSpecialPromos";

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
    <div className="container mx-auto  p-5">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">{selectedPlace.detailsPageHeading}</h2>

        {/* Grid Layout with Sticky Payment Section */}
        <div className="grid md:grid-cols-12 gap-6">
          {/* Left Content (Images and Details) */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-1">
            <PakcageImageShow images={selectedPlace.images} />

            <div className="flex box-shadow-a flex-col md:flex-row items-center px-5 py-3 border rounded-2xl justify-around border-[#ddddddd]">

              <div className="text-base font-semibold text-center">Guest
                favourite</div>
              <img src="/images/main/review.png" className="w-10" alt="" />
              <div className="p-2 text-sm md:w-[60%] text-center font-medium">One of the most loved homes on Livetour, According to guests</div>

              <div className="flex p-2 flex-col items-center">
                <div className="text-base font-semibold">4.94</div>
                <div className="flex">
                  <img src="/images/svg/star.svg" className="object-contain w-3" alt="" />
                  <img src="/images/svg/star.svg" className="object-contain w-3" alt="" />
                  <img src="/images/svg/star.svg" className="object-contain w-3" alt="" />
                  <img src="/images/svg/star.svg" className="object-contain w-3" alt="" />
                  <img src="/images/svg/star.svg" className="object-contain w-3" alt="" />
                </div>
              </div>
              <div className="h-10 border hidden md:block mx-2"></div>
              <div className="flex p-2 flex-col items-center">
                <div className="text-base font-semibold">4.94</div>
                <div className="text-xs underline font-semibold">Reviews</div>
              </div>
            </div>
            <PackagesSpecialPromos />
            <PackageOverallView />
            <iframe
              src={`https://www.google.com/maps?q=${selectedPlace.location}&output=embed`}
              className="w-full h-64 rounded-lg mt-2"
              allowFullScreen
            ></iframe>
          </div>
          <div className="md:col-span-5 lg:col-span-4 " >
            <div className="sticky  top-20">
              <DetailsPayment />
            </div>
          </div>
        </div>
      </div>
      <PriceAndOffers />

      <PackageReviews />
    </div>
  );
};

export default PackageDetails;
