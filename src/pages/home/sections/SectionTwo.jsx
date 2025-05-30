import React, { useState, useEffect } from "react";
// import { places } from "../../../data/dats";
import loveRed from "/images/svg/lover-r.svg";
import loveBlack from "/images/svg/love-b.svg";
import usePackageStore from "../../../store/usePackagesStore";
import { useNavigate } from "react-router-dom";

const SectionTwo = () => {
    const { places = [] } = usePackageStore(); // Ensure `places` is at least an empty array
    const navigate = useNavigate();
    const [liked, setLiked] = useState({});
    const [currentImage, setCurrentImage] = useState(
        places.reduce((acc, place) => ({ ...acc, [place.id]: 0 }), {}) // Initialize with 0 for each place
    );
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        // Simulating a loading delay for fetching data
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const toggleLike = (id) => {
        setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const handleScroll = (id, event) => {
        const scrollLeft = event.target.scrollLeft;
        const imageWidth = event.target.offsetWidth;
        const index = Math.round(scrollLeft / imageWidth); // Calculate current image index

        setCurrentImage((prev) => ({
            ...prev,
            [id]: index,
        }));
    };

    const [visibleCount, setVisibleCount] = useState(10);
    const [page, setPage] = useState(1);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        const updateVisibleCount = () => {
            const width = window.innerWidth;
            if (width >= 1536) {
                setVisibleCount(10); // 2xl
            } else if (width >= 1280) {
                setVisibleCount(12); // xl
            } else if (width >= 1024) {
                setVisibleCount(9); // lg
            } else if (width >= 768) {
                setVisibleCount(10); // md
            } else {
                setVisibleCount(10); // default for small screens
            }
        };

        updateVisibleCount(); // Initial check
        window.addEventListener("resize", updateVisibleCount);
        return () => window.removeEventListener("resize", updateVisibleCount);
    }, []);



    const handleShowMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handleShowLess = () => {
        setPage(1);
    };

    // Get the correct set of items based on page number
    const displayedItems = places.slice(0, page * visibleCount);

    return (
        <div>
            <div className="p-3 pt-0 flex flex-col gap-4 bg-white container mx-auto">
                <div className="flex justify-center flex-col gap-3 2xl:grid-cols-5 md:gap-5 lg:grid-cols-3 md:grid xl:grid-cols-4 md:grid-cols-2 xl:py-6">
                    {loading
                        ? // Skeleton loader when data is loading
                        [...Array(4)].map((_, index) => (
                            <div
                                key={index}
                                className="btn-primary zoom-in flex flex-col gap-2 w-full h-[400px] rounded-2xl box-shadow-g"
                            >
                                <div className="relative w-full max-w-4xl overflow-hidden h-full">
                                    <div className="skeleton w-full h-full rounded-2xl"></div>
                                </div>
                                <div className="flex flex-col gap-0 p-3 pb-5">
                                    <div className="skeleton h-4 w-1/2 mb-2"></div>
                                    <div className="skeleton h-3 w-1/4 mb-2"></div>
                                    <div className="skeleton h-3 w-1/3 mb-2"></div>
                                    <div className="skeleton h-5 w-1/2 mt-3"></div>
                                </div>
                            </div>
                        ))
                        : // Display actual places once data is loaded
                        displayedItems.map((place) => (
                            <div
                                key={place.id}
                                onClick={() =>
                                    place.location
                                        ? navigate(`/package/${place.location.toLowerCase().replace(/\s+/g, "-")}`)
                                        : null
                                }
                                className="btn-primary relative zoom-in flex flex-col gap-2 w-full h-[400px] rounded-2xl box-shadow-g"
                            >
                                <div className="relative w-full max-w-4xl overflow-hidden h-full">
                                    <div
                                        className="carouselscrollclass flex space-x-0 rounded-2xl h-full overflow-x-auto scrollbar-hidden relative"
                                        onScroll={(event) => handleScroll(place.id, event)}
                                    >
                                        {place.images.map((img, index) => (
                                            <img
                                                key={index}
                                                src={img}
                                                alt="House"
                                                className="min-w-full object-cover shadow-lg"
                                            />
                                        ))}
                                    </div>
                                    <div className="absolute top-4 left-4 bg-white p-2 text-xs font-semibold rounded-full shadow-md text-black">
                                        Guest favorite
                                    </div>
                                    <div
                                        className="like-btn absolute top-4 right-4 text-xl cursor-pointer"
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevents the click event from reaching the parent
                                            toggleLike(place.id);
                                        }}
                                    >
                                        <img
                                            src={loveBlack}
                                            className={`love-b object-contain w-[20px] h-[20px] transition-opacity duration-300 ${liked[place.id] ? "opacity-0" : "opacity-100"
                                                }`}
                                            alt="black love"
                                        />
                                        <img
                                            src={loveRed}
                                            className={`love-r absolute top-0 left-0 object-contain w-[20px] h-[20px] transition-opacity duration-300 ${liked[place.id] ? "opacity-100" : "opacity-0"
                                                }`}
                                            alt="red love"
                                        />
                                    </div>
                                    <div
                                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
                                        id="dots"
                                    >
                                        {place.images.map((_, index) => (
                                            <span
                                                key={index}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImage[place.id] === index
                                                    ? "bg-gray-900 scale-125"
                                                    : "bg-gray-300"
                                                    }`}
                                            ></span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-0 p-3 pb-5">
                                    <div className="flex text-base flex-row text-black/80 justify-between">
                                        <div className="font-bold text-sm">{place.location}</div>
                                        <div className="flex font-bold gap-0.5">
                                            <div>⭐</div>
                                            <div>{place.rating}</div>
                                        </div>
                                    </div>
                                    <div className="text-gray-600 text-xs">{place.distance}</div>
                                    <div className="text-gray-600 text-xs">{place.date}</div>
                                    <div className="text-black/80 text-sm font-bold">
                                        {place.price} <span className="text-xs">night</span>
                                    </div>
                                </div>
                            </div>

                        ))}
                </div>
                <div className="flex justify-center my-4">
                    {displayedItems.length < places.length ? (
                        <div className="flex flex-col gap-3">
                            <p className="text-lg font-semibold text-black">
                                Continue exploring farms
                            </p>
                            <button
                                onClick={handleShowMore}
                                className="px-4 py-2 rounded-2xl font-semibold bg-[#242323ee] text-white "
                            >
                                Show More
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={handleShowLess}
                            className="px-4 py-2 rounded-2xl font-semibold bg-[#242323ee] text-white "
                        >
                            Show Less
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;
