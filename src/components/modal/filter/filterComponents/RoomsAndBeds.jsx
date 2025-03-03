import { useState } from "react";


const RoomsAndBedsFilter = () => {
  const [counts, setCounts] = useState({ bedrooms: "Any", beds: "Any", bathrooms: "Any" });

  const updateCount = (type, isIncreasing) => {
    setCounts((prev) => {
      const currentValue = prev[type];
      if (currentValue === "Any") return { ...prev, [type]: 1 };
      const newValue = isIncreasing ? currentValue + 1 : Math.max(0, currentValue - 1);
      return { ...prev, [type]: newValue };
    });
  };

  return (
    <div className="flex flex-col pt-5 gap-3 border-b pb-5 border-[#dddddd]">
      <div className="text-lg font-semibold">Rooms and beds</div>
      <div className="flex flex-col gap-2 text-sm">
        {Object.entries(counts).map(([type, count]) => (
          <div key={type} className="flex flex-row justify-between items-center">
            <div className="text-base">{type.charAt(0).toUpperCase() + type.slice(1)}</div>
            <div className="w-fit px-5 flex text-blue justify-center font-medium text-[0.9rem] items-center gap-3">
              <span
                className="cursor-pointer text-2xl rounded-full border px-2 flex items-center border-[#dddddd]"
                onClick={() => updateCount(type, false)}
              >
                <img src="src\assets\images\svg\minus.svg" className="w-[15px] h-[30px]" alt="Decrease" />
              </span>
              <span className="w-8 font-bold text-center">{count}</span>
              <span
                className="cursor-pointer text-2xl rounded-full border px-2 flex items-center border-[#dddddd]"
                onClick={() => updateCount(type, true)}
              >
                <img src="src\assets\images\svg\plus.svg" className="w-[15px] h-[30px]" alt="Increase" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsAndBedsFilter;
