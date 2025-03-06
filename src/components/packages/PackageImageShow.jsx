import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PackageImageShow = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);
  const thumbnailRef = useRef(null);

  const scrollThumbnails = (direction) => {
    if (thumbnailRef.current) {
      const scrollAmount = 150;
      thumbnailRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleImageClick = () => {
    setZoomLevel((prevZoom) => {
      if (prevZoom === 1) return 2; // Zoom in
      return 1; // Reset zoom
    });
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const maxMoveX = (zoomLevel - 1) * 50; // Limit movement
    const maxMoveY = (zoomLevel - 1) * 50;
    let newX = e.clientX - startPos.x;
    let newY = e.clientY - startPos.y;

    newX = Math.max(-maxMoveX, Math.min(newX, maxMoveX));
    newY = Math.max(-maxMoveY, Math.min(newY, maxMoveY));

    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="xl:col-span-8 lg:col-span-7">
      <div className="w-full   rounded-lg">
        {/* Main Image */}
        <div className="overflow-hidden rounded-2xl relative flex justify-center items-center">
          <img
            ref={imageRef}
            src={mainImage}
            alt="Main Image"
            className="object-cover max-h-96 h-96 w-full md:px-0 rounded-2xl transition-transform duration-300 cursor-pointer"
            style={{
              transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
              cursor: zoomLevel > 1 ? "grab" : "pointer",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onClick={handleImageClick}
          />
        </div>

        {/* Thumbnails with Navigation Buttons */}
        <div className="relative w-full flex items-center mt-3">
          {/* Left Button */}
          <button
            className="absolute left-3 z-10 bg-gray-200/60 border border-gray-400 text-gray-700 p-1 rounded-full shadow-md hover:bg-gray-300/50 transition"
            onClick={() => scrollThumbnails("left")}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Thumbnail List */}
          <div
            ref={thumbnailRef}
            className="flex flex-row overflow-x-auto gap-3 w-full p-3 px-0 rounded-md scrollbar-hidden"
            style={{ scrollBehavior: "smooth" }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-32 h-32 object-cover rounded-md cursor-pointer hover:shadow-md hover:scale-105 transition-transform duration-200 ${
                  currentIndex === index ? "scale-95 transition-transform duration-200" : ""
                }`}
                onClick={() => {
                  setMainImage(img);
                  setCurrentIndex(index);
                  setZoomLevel(1);
                  setPosition({ x: 0, y: 0 });
                }}
              />
            ))}
          </div>

          {/* Right Button */}
          <button
            className="absolute right-3 z-10 bg-gray-200/60 border border-gray-400 text-gray-700 p-1 rounded-full shadow-md hover:bg-gray-300/50 transition"
            onClick={() => scrollThumbnails("right")}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageImageShow;
