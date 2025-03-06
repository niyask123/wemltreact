import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usePackageStore from "../../store/usePackagesStore";
import PakcageImageShow from "../../components/packages/PackageImageShow";
import DetailsPayment from "../../components/Payments/DetailsPayment";

const PackageDetails = () => {
  const { packageName } = useParams();
  const { places } = usePackageStore();
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Find the correct package
  const selectedPlace = places.find(
    (place) => place.location.toLowerCase().replace(/\s+/g, "-") === packageName
  );

  // Handle Scroll for showing/hiding menu
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && window.scrollY > lastScrollY) {
        setIsVisible(true);
      } else if (window.scrollY < lastScrollY) {
        setIsVisible(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Smooth scrolling function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  if (!selectedPlace) {
    return <div className="text-center text-xl text-gray-600">Package not found.</div>;
  }

  return (
    <div className="container mx-auto 2xl:px-40 xl:px-32 p-5">
      {/* Scroll-Hide Header Menu */}
      <div
        className={`bg-white z-50 w-full top-0 left-0 fixed shadow-md transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-center gap-10 py-4 border-b">
          <button
            className="text-lg font-medium text-gray-600 hover:text-black"
            onClick={() => scrollToSection("photos")}
          >
            Photos
          </button>
          <button
            className="text-lg font-medium text-gray-600 hover:text-black"
            onClick={() => scrollToSection("review")}
          >
            Reviews
          </button>
          <button
            className="text-lg font-medium text-gray-600 hover:text-black"
            onClick={() => scrollToSection("location")}
          >
            Location
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-6 ">
        {/* Left Content (8 Columns) */}
        <div className="col-span-8 flex flex-col gap-6">
          {/* Photos Section */}
          <div id="photos">
            <h2 className="text-xl font-bold mb-3">Photos</h2>
            <PakcageImageShow images={selectedPlace.images} />
          </div>

          {/* Reviews Section */}
          <div id="review">
            <h2 className="text-xl font-bold mb-3">Customer Reviews</h2>
            <p className="text-gray-600">⭐⭐⭐⭐☆ (4.5/5)</p>
            <p className="text-gray-500">"Amazing experience! Highly recommended."</p>
          </div>

          {/* Location Section */}
          <div id="location">
            <h2 className="text-xl font-bold mb-3">Location</h2>
            <p className="text-gray-500">📍 {selectedPlace.location}</p>
            <iframe
              src={`https://www.google.com/maps?q=${selectedPlace.location}&output=embed`}
              className="w-full h-64 rounded-lg mt-2"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Sticky Right Column (4 Columns) */}
        <div className="col-span-4">
          <div className="sticky top-20">
            <DetailsPayment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
