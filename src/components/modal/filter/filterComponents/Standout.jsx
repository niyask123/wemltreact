import { useState } from "react";

const Standout = () => {
  // State for 'Standout stays' single toggle
  const [active, setActive] = useState(false);

  // State for 'Standout options' multi-selection
  const [selected, setSelected] = useState([]);

  const toggleBorder = () => {
    setActive(!active);
  };

  const toggleOption = (option) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const options = [
    { id: "instant", label: "Instant book", imgSrc: "./src/assets/images/filter/instant.svg" },
    { id: "checkin", label: "Self check-in", imgSrc: "./src/assets/images/filter/check-in.svg" },
    { id: "pets", label: "Allows pets", imgSrc: "./src/assets/images/filter/pets.svg" },
  ];

  return (
    <div className="flex flex-col gap-6">
        {/* Standout Options */}
      <div className="flex pb-5 pt-5 border-b flex-col gap-3 border-[#dddddd]">
        <div className="text-lg font-semibold">Standout options</div>
        <div className="flex flex-wrap gap-4">
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => toggleOption(option.id)}
              className={`border p-3 py-2 gap-1 flex flex-row rounded-full cursor-pointer justify-center items-center transition-all ${
                selected.includes(option.id) ? "border-blue-500" : "border-gray-300"
              }`}
            >
              <img src={option.imgSrc} className="w-[20px] h-[30px]" alt={option.label} />
              <div>{option.label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Standout Stays */}
      <div className="flex pb-5 pt-5 border-b flex-col gap-3 border-[#dddddd]">
        <div className="text-lg font-semibold">Standout stays</div>
        <div
          onClick={toggleBorder}
          className={`border ${active ? "border-black" : "border-gray-300"} hover:border-gray-400 transition-all items-center p-3 gap-3 px-5 flex flex-row rounded-full w-fit cursor-pointer`}
        >
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className="w-8 h-8 fill-current"
          >
            <path d="M16 2L20 12H30L22 18L26 28L16 22L6 28L10 18L2 12H12L16 2Z" fill="currentColor"/>
          </svg>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <div className="text-base font-bold">Guest Favourite</div>
              <div className="text-sm text-gray-600">
                The most loved homes on LiveTour
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Standout;
