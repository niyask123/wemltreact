import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import usePackageStore from "../../store/usePackagesStore";
import PakcageImageShow from "../../components/packages/PackageImageShow";
import DetailsPayment from "../../components/Payments/DetailsPayment";
import PackageOverallView from "../../components/packages/PackageOverallView";
import PackageReviews from "../../components/packages/PackageReviews";
import PriceAndOffers from "../../components/packages/PriceAndOffers";
import PackagesSpecialPromos from "../../components/packages/PackagesSpecialPromos";
import SmFooterPayment from "../../components/Payments/SmFooterPayment";

const PackageDetails = () => {
  const { packageName } = useParams(); // Get package name from URL
  const { places } = usePackageStore(); // Get all package places
  const priceAndOffersRef = useRef(null); // Ref for scrolling
  const reviewClickRef = useRef (null) 
  const reserveClickRef = useRef (null)



  const scrollToReviewsClick = () => {
    if (reviewClickRef.current) {
      reviewClickRef.current.scrollIntoView({behavior:"smooth"})
    }
  };
  const scrollToReserveClick = () => {
    if (reserveClickRef.current) {
      reserveClickRef.current.scrollIntoView({behavior:"smooth"})
    }
  };
  const scrollToPriceAndOffers = () => {
    if (priceAndOffersRef.current) {
      priceAndOffersRef.current.scrollIntoView({ behavior: "smooth" });
    }
    
  };

  // Find the correct package details by matching the URL-friendly name
  const selectedPlace = places.find(
    (place) =>
      place.location.toLowerCase().replace(/\s+/g, "-") ===
      packageName.toLowerCase()
  );

  // If no matching package is found, show a message
  if (!selectedPlace) {
    return <div className="text-center text-xl text-gray-600">Package not found.</div>;
  }

  return (
    <>
    <div className="container mx-auto 2xl:px-32 xl:px-20 p-5">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">{selectedPlace.detailsPageHeading}</h2>

        {/* Grid Layout with Sticky Payment Section */}
        <div className="grid md:grid-cols-12 gap-6">
          {/* Left Content (Images and Details) */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-1">
            <PakcageImageShow images={selectedPlace.images} />

            <div
            
            className="flex flex-col lg:flex-row items-center px-5 py-3  rounded-2xl justify-around box-shadow-a">
              <div className="text-base font-semibold text-center">Guest favourite</div>
              <img src="/images/main/review.png" className="w-10" alt="" />
              <div className="p-2 text-sm md:w-[60%] text-center font-medium">
                One of the most loved homes on Livetour, According to guests
              </div>

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
              <div className="h-10  lg:block border hidden  mx-2"></div>
              <div className="flex p-2 flex-col items-center cursor-pointer" onClick={scrollToReviewsClick} >
                <div className="text-base font-semibold">4.94</div>
                <div
                
                className="text-xs underline font-semibold">Reviews</div>
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

          {/* Sticky Payment Section */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="sticky top-20">
              <DetailsPayment onReserveClick={scrollToPriceAndOffers} />
            </div>
          </div>
        </div>
      </div>

      <div ref={priceAndOffersRef}>
        <PriceAndOffers />
      </div>

      <div className="" ref={reviewClickRef}>
      <PackageReviews />  
      </div>
    </div>

     {/* Mobile Footer for Payment (Include it here so it gets the function) */}
     <SmFooterPayment onReserveClick={scrollToPriceAndOffers} />
    </>
  );
};

export default PackageDetails;
