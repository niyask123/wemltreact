import React, { useRef, useState, useEffect } from 'react';
import { cardData } from '../../../data/dats';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const FirstSection = () => {
  const scrollContainerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetching delay
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="lg:grid lg:grid-cols-4 flex flex-col gap-4 p-3 py-6">
          <div
            className="col-span-1 lg:justify-start lg:pt-10 justify-center lg:items-start items-center flex flex-col p-3 md:p-6 lg:p-6 rounded-lg gap-1 md:gap-3 lg:gap-1  bg-[url('/images/main/lt-1.png')] bg-cover bg-center bg-no-repeat"
          >
            <div className="text-[#ef1b27] text-xl font-semibold">Our Best Sellers</div>
            <div className="text-xs md:text-sm font-medium">
              Perfect for Every Special Celebration!
            </div>
            <button className="bg-[#002C59] px-5 py-3 text-xs text-white rounded-lg font-semibold">
              Shop All Best Sellers
            </button>
          </div>


          <div className="relative w-full col-span-3">
            <button
              onClick={() => scroll("left")}
              className="absolute hidden md:block left-0 top-1/2 p-2 border border-gray-400 bg-gray-100/45 rounded-full"
            >
              <AiOutlineArrowLeft />
            </button>

            <div
              className="flex gap-5 flex-row md:w-[90%] mx-auto overflow-x-auto scrollbar-hidden scroll-smooth"
              ref={scrollContainerRef}
            >
              <div className="flex gap-5 w-max">
                {loading
                  ? // Skeleton Loader when data is loading
                  [...Array(4)].map((_, index) => (
                    <div key={index} className="flex-none">
                      <div className="w-64 h-[350px] bg-white border border-gray-200 rounded-lg shadow-sm p-3">
                        <div className="skeleton w-full h-40 mb-3"></div>
                        <div className="skeleton h-4 w-3/4 mb-2"></div>
                        <div className="skeleton h-3 w-1/2 mb-2"></div>
                        <div className="skeleton h-3 w-1/3 mb-2"></div>
                        <div className="skeleton h-10 w-full mt-3"></div>
                      </div>
                    </div>
                  ))
                  : // Display actual cards when data is loaded
                  cardData.map((card) => (
                    <div key={card.id} className="flex-none">
                      <div className="w-64 h-[350px] bg-white border border-gray-200 rounded-lg shadow-sm">
                        <div className="relative">
                          <img className="rounded-t-lg" src={card.imgSrc} alt="product image" />
                          <div className="absolute top-3 text-white text-[10px] p-1 pr-2 rounded-r-lg bg-blue-600 flex gap-1">
                            <div>1</div>
                            <div>Exclusive</div>
                          </div>
                        </div>
                        <div className="p-3 pb-0 relative">
                          <div className="flex flex-col gap-2">
                            <div className="flex flex-col border-b pb-1 gap-1">
                              <div className="text-sm font-semibold line-clamp-2 tracking-tight text-gray-900">
                                {card.title}
                              </div>
                              <div className="text-[11px] tracking-tight text-gray-400">{card.description}</div>
                              <div className="flex flex-col text-[11px]">
                                <div className="flex justify-between items-center w-full">
                                  <div className="flex gap-1">
                                    <span><img src="/images/svg/people-blue.svg" className="object-contain w-2.5" alt="" /></span> People
                                  </div>
                                  <div className="flex flex-row gap-1 w-[65%] overflow-hidden text-ellipsis whitespace-nowrap justify-end"><img src="/images/svg/people-blue.svg" className="object-contain w-2.5" alt="" /> {card.location}</div>
                                </div>
                                <div className="flex gap-1">
                                  <span><img src="/images/svg/rating-star-green.svg" className="object-contain w-2.5" alt="" /></span> <span className="font-bold">{card.rating}</span>5 (5)
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2">
                                {card.newPrice}
                              </button>
                              <div className="flex flex-row gap-3 absolute justify-center items-end right-0">
                                <span className="text-xs font-bold text-gray-400 line-through">{card.oldPrice}</span>
                                <span className="top-3 text-white text-xs p-1 pl-2 rounded-l-lg bg-red-600 flex gap-1 font-medium">
                                  {card.discount}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <button
              onClick={() => scroll("right")}
              className="absolute hidden md:block right-0 top-1/2 p-2 border border-gray-400 bg-gray-100/45 rounded-full"
            >
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
