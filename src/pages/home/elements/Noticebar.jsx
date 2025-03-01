import { useEffect, useState } from "react";
import { noticesContnet } from "../../../data/dats";



const Noticebar = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % noticesContnet.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="container mx-auto px-3 hidden md:block transition-all duration-500 ease-in-out transform"
      id="closeNotContainereBtn"
    >
      <div className="relative flex flex-col md:flex-row items-center rounded-lg justify-evenly bg-[#f7f7f7] shadow-md text-xs md:text-sm font-medium p-3 overflow-hidden w-full">
        {/* Left Content */}
        <div className="flex flex-row gap-1 items-center justify-center">
          <img
            src="./src/assets/images/svg/exchange.svg"
            className="object-contain w-4 h-4 md:w-5 md:h-5"
            alt=""
          />
          <div>Free Exchanges</div>
        </div>

        {/* Center Content (Changing Notice) */}
        <div
          className="flex flex-row gap-1 lg:max-w-96 lg:min-w-96 md:max-w-56 md:min-w-56 items-center justify-center transition-all duration-500"
        >
          <img
            src={noticesContnet[index].img}
            className="object-contain w-4 h-4 md:w-5 md:h-5 transition-transform duration-500"
            alt=""
          />
          <div className={`truncate ${noticesContnet[index].color}`}>{noticesContnet[index].text}</div>
        </div>

        {/* Right Content */}
        <div className="flex flex-row gap-1 items-center justify-center">
          <img
            src="./src/assets/images/svg/delivery.svg"
            className="object-contain w-4 h-4 md:w-5 md:h-5"
            alt=""
          />
          <div>Same day delivery in Dubai</div>
        </div>

        {/* Close Button */}
        <img
          src="https://www.svgrepo.com/show/528912/close-circle.svg"
          className="absolute w-4 right-2 cursor-pointer"
          alt="Close"
          onClick={() => setIsVisible(false)}
        />
      </div>
    </div>
  );
};

export default Noticebar;
