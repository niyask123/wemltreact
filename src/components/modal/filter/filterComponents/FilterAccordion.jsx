



import { useState } from "react";
import houseImg from "../../../../assets/images/filter/house.svg";
import flatImg from "../../../../assets/images/filter/flat.svg";
import guestHouseImg from "../../../../assets/images/filter/guest-house.svg";
import hotelImg from "../../../../assets/images/filter/hotel.svg";

const FilterAccordion = () => {
  const propertyTypes = [
    { img: houseImg, label: "House" },
    { img: flatImg, label: "Flat" },
    { img: guestHouseImg, label: "Guest House" },
    { img: hotelImg, label: "Hotel" },
  ];

  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-3 pt-5 pb-5 mx-auto w-full ">
      {/** Accessibility Features - Property Type */}
      <div className="border-b border-gray-300 rounded-lg overflow-hidden">
        <h2>
          <button
            type="button"
            className="flex justify-between w-full p-4 text-gray-800 font-medium focus:outline-none"
            onClick={() => toggleAccordion(1)}
          >
            <span className="text-lg font-semibold">Accessibility Features</span>
            <span className={`transform transition-transform ${openAccordion === 1 ? "rotate-180" : "rotate-0"}`}>
              ▼
            </span>
          </button>
        </h2>
        <div className={`transition-all duration-300 ${openAccordion === 1 ? "max-h-screen" : "max-h-0 overflow-hidden"}`}>
          <div className="flex flex-wrap gap-3 px-2">
            {propertyTypes.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 p-3 py-2  gap-1 flex flex-row rounded-full mb-3 cursor-pointer justify-center items-center"
              >
                <img src={item.img} className="w-[24px] h-[22px]" alt={item.label} />
                <div>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/** Accessibility Features - General, Bedroom, Bathroom */}
      <div className="border-b border-gray-300 rounded-lg overflow-hidden">
        <h2>
          <button
            type="button"
            className="flex justify-between w-full p-4 text-gray-800 font-medium focus:outline-none"
            onClick={() => toggleAccordion(2)}
          >
            <span className="text-lg font-semibold">Accessibility Features</span>
            <span className={`transform transition-transform ${openAccordion === 2 ? "rotate-180" : "rotate-0"}`}>
              ▼
            </span>
          </button>
        </h2>
        <div className={`transition-all duration-300 ${openAccordion === 2 ? "max-h-screen" : "max-h-0 overflow-hidden"}`}>
          <div className="p-4 space-y-4">
            {["General", "Bedroom", "Bathroom"].map((category) => (
              <div key={category}>
                <h2 className="text-lg font-semibold text-gray-800">{category}</h2>
                <div className="space-y-3 font-semibold">
                  {["Step-free access", "Wide entrance", "Grab bars"].map((feature, index) => (
                    <label key={index} className="flex items-center space-x-2 text-gray-700">
                      <input type="checkbox" className="checkbox checkbox-primary" />
                      <span>{feature}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/** Host Language */}
      <div className="border-b border-gray-300 rounded-lg overflow-hidden">
        <h2>
          <button
            type="button"
            className="flex justify-between w-full p-4 text-gray-800 font-medium focus:outline-none"
            onClick={() => toggleAccordion(3)}
          >
            <span className="text-lg font-semibold">Host Language</span>
            <span className={`transform transition-transform ${openAccordion === 3 ? "rotate-180" : "rotate-0"}`}>
              ▼
            </span>
          </button>
        </h2>
        <div className={`transition-all duration-300 ${openAccordion === 3 ? "max-h-screen" : "max-h-0 overflow-hidden"}`}>
          <div className="p-4 grid grid-cols-2 gap-2">
            {["French", "Chinese", "English"].map((language) => (
              <label key={language} className="flex items-center space-x-2 text-gray-700">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span>{language}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterAccordion;
