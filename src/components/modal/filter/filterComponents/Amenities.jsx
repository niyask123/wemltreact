
import { useState } from "react";

const Amenities = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleAmenities = () => {
    setShowMore(!showMore);
  };

  const essentials = [
    { img: "/images/filter/wifi.svg", label: "Wifi" },
    { img: "/images/filter/kitchen.svg", label: "Kitchen" },
    { img: "/images/filter/washing-machine.svg", label: "Washing machine" },
    { img: "/images/filter/air-conditioning.svg", label: "Air conditioning" },
    { img: "/images/filter/fader-heater.svg", label: "Heating" },
    { img: "/images/filter/workspace.svg", label: "Dedicated workspace" },
    { img: "/images/filter/tv.svg", label: "TV" },
    { img: "/images/filter/hair-dryer.svg", label: "Hair dryer" },
    { img: "/images/filter/iron.svg", label: "Iron" },
  ];

  const features = [
    { img: "/images/filter/pool.svg", label: "Pool" },
    { img: "/images/filter/hot-tub.svg", label: "Hot tub" },
    { img: "/images/filter/parking.svg", label: "Free parking" },
    { img: "/images/filter/ev-charger.svg", label: "EV charger" },
    { img: "/images/filter/cot.svg", label: "Cot" },
    { img: "/images/filter/king-bed.svg", label: "King bed" },
    { img: "/images/filter/gym.svg", label: "Gym" },
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
                  src={`${item.img}`}
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
                      src={`${item.img}`}
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
