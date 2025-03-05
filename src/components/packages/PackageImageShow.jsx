import React, { useState, useRef } from "react";
import { ChevronUp, ChevronDown, Maximize, ChevronLeft, ChevronRight } from "lucide-react"; // Using Lucide icons

const PakcageImageShow = ({ images }) => {
  // State to track the main image
  const [mainImage, setMainImage] = useState(images[0]);
  const [showFullText, setShowFullText] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ref for the thumbnails container
  const thumbnailRef = useRef(null);

  // Scroll function
  const scrollThumbnails = (direction) => {
    if (thumbnailRef.current) {
      const scrollAmount = 100; // Adjust scroll amount as needed
      thumbnailRef.current.scrollBy({
        top: direction === "up" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Function to handle next and previous image
  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setMainImage(images[newIndex]);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setMainImage(images[newIndex]);
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Main Image and Thumbnails */}
      <div className="w-full flex flex-col md:flex-row gap-2">
        {/* Main Image Display */}
        <div className="flex-1 max-h-96  flex items-center justify-center relative group">
          <img
            src={mainImage}
            alt="Main Image"
            className="object-cover h-full w-full  md:px-0 rounded-2xl transition-transform duration-300 "
          />

          {/* Zoom Button */}
          <button
            onClick={() => setIsFullscreen(true)}
            className="absolute top-2 left-2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Maximize size={20} />
          </button>

          {/* Overlay Text with Show More/Less */}
          <div className={`absolute bottom-0 flex flex-col gap-2 overflow-auto  rounded-3xl text-sm left-0 w-full bg-black bg-opacity-50 text-white  px-4 transition-all duration-300 ${showFullText ? "py-6 h-full  flex" : "py-2 h-20"}`}>
            <p className={`${showFullText ? "whitespace-normal" : "line-clamp-3 w-full"}`}>
            <div className="font-semibold md:text-sm 2xl:text-2xl">About this space</div>
            <div className="font-semibold md:text-sm 2xl:text-2xl">About this space</div>
            <div className="font-semibold md:text-sm 2xl:text-2xl">About this space</div>
            <div className="font-semibold md:text-sm 2xl:text-2xl">About this space</div>
            </p>
            <button
              onClick={() => setShowFullText(!showFullText)}
              className="text-white text-xs underline mt-1"
            >
              {showFullText ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>

        {/* Thumbnails with Scroll Buttons */}
        <div className="flex flex-col items-center gap-2 relative">
          {/* Scroll Up Button */}
          <button
            onClick={() => scrollThumbnails("up")}
            className="p-2 hidden md:block absolute top-32 -right-10 bg-gray-300 rounded-full hover:bg-gray-400 transition"
          >
            <ChevronUp size={20} />
          </button>

          {/* Thumbnail Images Grid */}
          <div
            ref={thumbnailRef}
            className="flex-1 md:grid flex flex-row lg:grid-cols-2 md:grid-cols-1 pt-0 gap-3 w-full max-h-96 overflow-y-auto md:pt-0 md:p-3 rounded-md scrollbar-hidden"
            style={{ scrollBehavior: "smooth" }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-32 object-cover rounded-md cursor-pointer hover:shadow-md hover:scale-105 transition-transform duration-200"
                onClick={() => {
                  setMainImage(img);
                  setCurrentIndex(index);
                }}
              />
            ))}
          </div>

          {/* Scroll Down Button */}
          <button
            onClick={() => scrollThumbnails("down")}
            className="p-2 hidden md:block absolute bottom-32 -right-10 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            <ChevronDown size={20} />
          </button>
        </div>
      </div>

      {/* Fullscreen View */}
      {isFullscreen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
    onClick={() => setIsFullscreen(false)} // Click outside to close
  >
    <div
      className="relative flex items-center justify-center"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 text-white p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
      >
        <ChevronLeft size={30} />
      </button>

      {/* Fullscreen Image */}
      <img src={mainImage} alt="Fullscreen" className="max-w-full max-h-[70vh] object-contain" />

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 text-white p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
      >
        <ChevronRight size={30} />
      </button>
    </div>

    {/* Close Button */}
    <button
      onClick={() => setIsFullscreen(false)}
      className="absolute top-4 right-4 text-white p-3 bg-red-500 rounded-full hover:bg-red-600"
    >
      ✕
    </button>
  </div>
)}

    </div>
  );
};

export default PakcageImageShow;
