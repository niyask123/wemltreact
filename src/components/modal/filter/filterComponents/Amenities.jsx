
import { useState } from "react";

const Amenities = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleAmenities = () => {
    setShowMore(!showMore);
  };

  const essentials = [
    { img: "wifi.svg", label: "Wifi" },
    { img: "kitchen.svg", label: "Kitchen" },
    { img: "washing-machine.svg", label: "Washing machine" },
    { img: "air-conditioning.svg", label: "Air conditioning" },
    { img: "fader-heater.svg", label: "Heating" },
    { img: "workspace.svg", label: "Dedicated workspace" },
    { img: "tv.svg", label: "TV" },
    { img: "hair-dryer.svg", label: "Hair dryer" },
    { img: "iron.svg", label: "Iron" },
  ];

  const features = [
    { img: "pool.svg", label: "Pool" },
    { img: "hot-tub.svg", label: "Hot tub" },
    { img: "parking.svg", label: "Free parking" },
    { img: "ev-charger.svg", label: "EV charger" },
    { img: "cot.svg", label: "Cot" },
    { img: "king-bed.svg", label: "King bed" },
    { img: "gym.svg", label: "Gym" },
  ];

  return (
    <div className="flex pb-5 border-b border-[#DDDDDD] pt-5 flex-col gap-3">
      <div className="text-lg font-semibold">Amenities</div>
      <div className="transition-all duration-500 ease-in-out">
        <div className="flex flex-col gap-2">
          <div className="text-sm font-semibold">Essentials</div>
          <div className="flex text-sm flex-wrap gap-3">
            {essentials.slice(0, showMore ? essentials.length : 6).map((item, index) => (
              <div
                key={index}
                className="border p-3 py-1.5 gap-1 flex flex-row rounded-full border-[#dddddd] justify-center items-center"
              >
                <img
                  src={`./src/assets/images/filter/${item.img}`}
                  className="w-[20px] h-[30px]"
                  alt={item.label}
                />
                <div>{item.label}</div>
              </div>
            ))}
          </div>

          {showMore && (
            <div className="flex flex-col gap-2 transition-all duration-500 ease-in-out">
              <div className="text-sm font-semibold">Features</div>
              <div className="flex flex-wrap gap-3">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="border p-3 py-1.5 gap-1 flex flex-row rounded-full border-[#dddddd] justify-center items-center"
                  >
                    <img
                      src={`./src/assets/images/filter/${item.img}`}
                      className="w-[24px] h-[30px]"
                      alt={item.label}
                    />
                    <div>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <button
        onClick={toggleAmenities}
        className="pr-4 underline font-semibold text-start transition-all duration-300 ease-in-out"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Amenities;
