import React, { useState, useEffect } from "react";
import { sectionThreePackages } from "../../../data/dats";

const SectionThree = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an API call with a delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust timing as needed
  }, []);

  return (
    <div>
      <div className="p-3 pt-0 lg:grid-cols-2 pb-20 grid gap-4 bg-white container mx-auto">
        {isLoading
          ? Array.from({ length: 3 }).map((_, index) => <SkeletonItem key={index} />)
          : sectionThreePackages.map((pkg) => <CarouselItem key={pkg.id} packageData={pkg} />)}
      </div>
    </div>
  );
};

// Skeleton Loader Component
const SkeletonItem = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 w-full h-fit md:h-[300px] rounded-2xl box-shadow-g">
      <div className="relative w-full md:w-[50%] max-w-4xl overflow-hidden">
        <div className="skeleton h-full w-full rounded-2xl"></div>
      </div>

      <div className="flex flex-col flex-wrap gap-3 lg:gap-6 p-3 pb-5 justify-center w-full md:w-[50%]">
        <div className="skeleton h-6 w-3/4 rounded"></div>
        <div className="skeleton h-4 w-full rounded"></div>
        <div className="skeleton h-4 w-2/3 rounded"></div>
        <div className="skeleton h-6 w-1/3 rounded"></div>
        <div className="skeleton h-10 w-full rounded"></div>
      </div>
    </div>
  );
};

const CarouselItem = ({ packageData }) => {
  const { images, title, description, price } = packageData;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleImageChange = (index) => {
    setActiveIndex(index);
  };

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-2 w-full h-fit md:h-[300px] rounded-2xl box-shadow-g">
        <div className="relative w-full md:w-[50%] max-w-4xl overflow-hidden">
          <div className="carouselscrollclass flex space-x-0 rounded-2xl h-full overflow-x-auto scrollbar-hidden relative">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Image ${index + 1}`}
                className="min-w-full object-cover shadow-lg"
              />
            ))}
          </div>
          <div className="absolute top-4 left-0 bg-white p-2 text-xs font-semibold rounded-r-full shadow-md">
            Special Offer
          </div>

          {/* Like Button */}
          <div
            className="like-btn absolute top-4 right-4 text-xl cursor-pointer"
            onClick={toggleLike}
          >
            <img
              src="/images/svg/love-b.svg"
              className={`love-b object-contain w-[20px] h-[20px] transition-opacity duration-300 ${
                isLiked ? "opacity-0" : "opacity-100"
              }`}
              alt="black love"
            />
            <img
              src="/images/svg/lover-r.svg"
              className={`love-r absolute top-0 left-0 object-contain w-[20px] h-[20px] transition-opacity duration-300 ${
                isLiked ? "opacity-100" : "opacity-0"
              }`}
              alt="red love"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-gray-900 scale-125" : "bg-gray-300"
                }`}
                onClick={() => handleImageChange(index)}
              ></span>
            ))}
          </div>
        </div>

        <div className="flex flex-col flex-wrap gap-3 lg:gap-6 p-3 pb-5 justify-center w-full md:w-[50%]">
          <div className="flex text-base flex-row text-black/80 justify-between">
            <div className="font-bold text-base">{title}</div>
          </div>
          <div className="text-gray-600 text-xs line-clamp-3 md:line-clamp-none">
            {description}
          </div>
          <div className="text-black/80 text-sm font-bold">
            {price} <span className="text-xs">night</span>
          </div>
          <div className="bg-[#002c59] px-5 py-3 text-sm text-white rounded-lg font-semibold text-center">
            Explore The Range
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
