import React, { useEffect, useRef, useState } from "react";
import { packagesMenuDatas } from "../../../data/PackagesData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import MainFilter from "../../../components/modal/filter/MainFilter";

const PackagesMenu = () => {
    const scrollRef = useRef(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [activePackage, setActivePackage] = useState(packagesMenuDatas[0]?.id || null); // Default active package

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            setShowLeftButton(scrollRef.current.scrollLeft > 0);
        }
    };

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);

    return (
        <div className="flex flex-row scroll-auto justify-between container mx-auto items-center">
            {showLeftButton && (
                <button
                    onClick={scrollLeft}
                    className="bg-white hidden md:block shadow-md p-2 rounded-full ml-2"
                >
                    <AiOutlineArrowLeft />
                </button>
            )}


            {
                loading ? (
                    <div className="skeleton w-full h-10"></div>
                ) : (
                    <>
                        <div
                            ref={scrollRef}
                            onScroll={handleScroll}
                            className="flex flex-row lg:gap-[40px] gap-[20px] md:gap-[35px] overflow-x-auto  scrollbar-hidden scroll-smooth items-center pr-10 mt-1"
                            style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
                        >
                            {packagesMenuDatas.map((pkg) => (
                                <div
                                    key={pkg.id}
                                    className="flex flex-col gap-1 pb-3 items-center cursor-pointer"
                                    onClick={() => setActivePackage(pkg.id)}
                                >

                                    <img
                                        src={pkg.img}
                                        alt={pkg.name}
                                        className="w-[24px] h-[24px] object-cover rounded-full"
                                    />

                                    <div className={`text-xs font-medium text-nowrap relative ${activePackage === pkg.id ? "text-black" : "text-gray-500"}`}>
                                        {pkg.name}
                                        {activePackage === pkg.id && (
                                            <div className="absolute bottom-[-6px] left-0 w-full h-[2px] bg-black"></div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={scrollRight}
                            className="bg-white shadow-md p-2 rounded-full mr-2 md:block hidden"
                        >
                            <AiOutlineArrowRight />
                        </button>
                        <button
                            className="p-2 px-4 border border-[#dddddd] mr-3 text-xs hidden :flex flex-row items-center justify-center font-medium rounded-2xl gap-2 h-[3.1rem]"
                            onClick={() => document.getElementById('packageModalMenu').showModal()}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                aria-hidden="true"
                                role="presentation"
                                focusable="false"
                                className="w-[15px] h-[15px] stroke-current stroke-[3]"
                            >
                                <path
                                    fill="none"
                                    d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3"
                                ></path>
                            </svg>
                            Filters
                        </button>
                        <MainFilter  />
                        <div className="justify-between  p-3 h-full hidden lg:flex flex-row border border-[#dddddd] rounded-2xl gap-3">
                            <div className="flex justify-between flex-row gap-3 items-center">
                                <div className="flex flex-row gap-2">
                                    <div className="text-xs font-medium text-nowrap">Display total before taxes</div>
                                </div>
                                <input type="checkbox" className="toggle" />
                            </div>
                        </div>
                    </>
                )
            }




        </div>
    );
};

export default PackagesMenu;
