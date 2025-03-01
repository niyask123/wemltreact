
import React, { useRef } from 'react'
import { cardData } from '../../../data/dats';


const FirstSection = () => {
  const scrollContainerRef = useRef(null);

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
          <div className="col-span-1 justify-center lg:items-start items-center flex flex-col p-3 md:p-6 lg:p-6 bg-red-100/50 rounded-lg gap-1 md:gap-3 lg:gap-1">
            <div className="text-[#ef1b27] text-xl font-semibold">Our Best Sellers</div>
            <div className="text-xs md:text-sm font-medium">Perfect for Every Special Celebration!</div>
            <button className="bg-[#002C59] px-5 py-3 text-xs text-white rounded-lg font-semibold">
              Shop All Best Sellers
            </button>
          </div>
          <div className="relative w-full col-span-3">
            <button
              onClick={() => scroll("left")}
              className="absolute hidden md:block left-0 top-1/2 p-2 border border-gray-400 bg-gray-100/45 rounded-full"
            >
              &#9664;
            </button>

            <div
              className="flex gap-5 flex-row md:w-[90%] mx-auto overflow-x-auto scrollbar-hidden scroll-smooth"
              ref={scrollContainerRef}
            >
              <div className="flex gap-5 w-max">
                {cardData.map((card) => (
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
                                  <span>👤</span> People
                                </div>
                                <div className="truncate w-[65%] text-right">{card.location}</div>
                              </div>
                              <div className="flex gap-1">
                                <span>⭐</span> <span className="font-bold">{card.rating}</span>5 (5)
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
              &#9654;
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default FirstSection
