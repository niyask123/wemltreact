
import { useState } from "react";

const PlaceFilter = () => {
  const [selectedType, setSelectedType] = useState("Any type");
  const [minPrice, setMinPrice] = useState(870);
  const [maxPrice, setMaxPrice] = useState(16000);

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="pb-5 border-b border-[#DDDDDD]">
      {/* Type of Place Section */}
      <div className="flex gap-3 flex-col pb-5 border-b border-[#DDDDDD]">
        <div className="text-lg font-semibold">Type of Place</div>
        <div className="flex flex-row gap-3 text-sm border-[#DDDDDD] border items-center p-3 w-full rounded-2xl">
          {["Any type", "Room", "Entire home"].map((type) => (
            <div
              key={type}
              className={`place-option rounded-lg w-full p-2 text-center cursor-pointer border-2 font-semibold transition-all ${
    selectedType === type ? "border-black/80" : "border-gray-300"
  }`}
              onClick={() => handleTypeClick(type)}
            >
              {type}
            </div>
          ))}
        </div>
      </div>

      {/* Price Range Section */}
      <div className="flex flex-col gap-3 mt-4">
        <div className="flex flex-col gap-2">
          <div className="text-lg font-semibold">Price range</div>
          <div className="font-semibold">Nightly prices before fees and taxes</div>
        </div>

        {/* Price Range Display */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-1 items-center justify-center">
            <div className="text-xs">Minimum</div>
            <div className="p-3 border rounded-full border-[#dddddd]">₹{minPrice}</div>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <div className="text-xs">Maximum</div>
            <div className="p-3 border rounded-full border-[#dddddd]">₹{maxPrice}+</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceFilter;
