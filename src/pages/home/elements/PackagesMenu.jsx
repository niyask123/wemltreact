import React, { useEffect, useRef, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import MainFilter from "../../../components/modal/filter/MainFilter";
import usePackageStore from "../../../store/usePackagesStore";
import { packagesMenuDatas } from "../../../data/PackagesData";

const PackagesMenu = () => {
    const scrollRef = useRef(null);
    const { activePackage, setActivePackage } = usePackageStore();
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000); // Reduce loading time for better UX
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                setShowLeftButton(scrollRef.current.scrollLeft > 0);
                setShowRightButton(
                    scrollRef.current.scrollLeft + scrollRef.current.clientWidth < scrollRef.current.scrollWidth
                );
            }
        };

        if (scrollRef.current) {
            scrollRef.current.addEventListener("scroll", handleScroll);
            handleScroll(); // Ensure visibility updates on mount
        }

        return () => {
            if (scrollRef.current) {
                scrollRef.current.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);


    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });

            setTimeout(() => {
                if (scrollRef.current) {
                    setShowLeftButton(scrollRef.current.scrollLeft > 0);
                    setShowRightButton(
                        scrollRef.current.scrollLeft + scrollRef.current.clientWidth < scrollRef.current.scrollWidth
                    );
                }
            }, 300);
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });

            setTimeout(() => {
                if (scrollRef.current) {
                    setShowLeftButton(scrollRef.current.scrollLeft > 0);
                    setShowRightButton(
                        scrollRef.current.scrollLeft + scrollRef.current.clientWidth < scrollRef.current.scrollWidth
                    );
                }
            }, 300);
        }
    };
    return (
        <div className="flex flex-row justify-between container mx-auto items-center relative">
            {/* Left Scroll Button */}
            {showLeftButton && (
                <button
                    onClick={scrollLeft}
                    className="bg-white hidden md:block shadow-md p-2 rounded-full ml-2"
                >
                    <AiOutlineArrowLeft />
                </button>
            )}


            {loading ? (
                <div className="w-full h-10 animate-pulse bg-gray-200 rounded-md"></div>
            ) : (
                <>
                    {/* Packages Menu Scrollable */}
                    <div
                        ref={scrollRef}
                        className="flex flex-row lg:gap-[40px] gap-[20px] md:gap-[35px] overflow-x-auto scrollbar-hidden items-center pr-10 mt-1"
                        style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
                    >
                        {packagesMenuDatas.map((pkg) => (
                            <div
                                key={pkg.id}
                                className="flex flex-col gap-1 pb-3 items-center cursor-pointer"
                                onClick={() => setActivePackage(pkg.nameId)}
                            >
                                <img
                                    src={pkg.img}
                                    alt={pkg.name}
                                    className="w-[24px] h-[24px] object-cover rounded-full"
                                />
                                <div
                                    className={`text-xs font-medium text-nowrap relative ${activePackage === pkg.nameId
                                            ? "text-black"
                                            : "text-gray-500"
                                        }`}
                                >
                                    {pkg.name}
                                    {activePackage === pkg.nameId && (
                                        <div className="absolute bottom-[-6px] left-0 w-full h-[2px] bg-black"></div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Scroll Button */}
                    <button
                        onClick={scrollRight}
                        className="bg-white shadow-md p-2 rounded-full mr-2 md:block hidden"
                    >
                        <AiOutlineArrowRight />
                    </button>

                    {/* Filter Modal */}
                    <MainFilter />

                    {/* Toggle Option */}
                    <div className="p-3 h-full hidden lg:flex flex-row border border-[#dddddd] rounded-2xl gap-3">
                        <div className="flex justify-between flex-row gap-3 items-center">
                            <div className="text-xs font-medium text-nowrap">
                                Display total before taxes
                            </div>
                            <input type="checkbox" className="toggle" />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default PackagesMenu;
