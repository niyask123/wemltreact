import React, { useState, useRef, useEffect } from 'react';
import usePackageStore from '../../store/usePackagesStore';
import { useParams } from 'react-router-dom';

const DetailsPayment = ({setShowPriceAndOffers}) => {
    
    const { packageName } = useParams(); // Get package name from URL
    const { places } = usePackageStore(); // Get all package places
    const dropdownRef = useRef(null);

    const selectedPlace = places.find(
        (place) => place.location.toLowerCase().replace(/\s+/g, "-") === packageName
    );

    const [guests, setGuests] = useState({
        adults: 1,
        children: 0,
        infants: 0,
        pets: 0,
    });

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const updateGuestCount = (type, value) => {
        setGuests((prev) => ({
            ...prev,
            [type]: Math.max(0, prev[type] + value), // Prevent negative values
        }));
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className='xl:col-span-4 lg:col-span-5 '>
            <div className="h-full box-shadow-g  rounded-2xl p-6 flex flex-col gap-2 justify-evenly">
                <div>
                    <span className='text-lg font-semibold'>{selectedPlace.price}</span>/night
                </div>
                <div className="grid text-xs font-medium rounded-lg grid-cols-2 border border-gray-400">
                    <div className="flex flex-col p-3 py-2 gap-1 border border-gray-400 border-l-0 border-t-0 ">
                        <div className="capitalize">CHECK-IN</div>
                        <div>{selectedPlace.checkinDate}</div>
                    </div>
                    <div className="flex flex-col p-3 py-2  gap-1 border border-gray-400 border-l-0 border-r-0 border-t-0 ">
                        <div>CHECKOUT</div>
                        <div>{selectedPlace.checkoutDate}</div>
                    </div>

                    {/* Dropdown */}
                    <div
                        ref={dropdownRef}
                        tabIndex={0}
                        role="button"
                        className={`col-span-2 dropdown p-3 py-2 flex justify-center flex-col gap-1 relative ${isDropdownOpen ? 'dropdown-open' : ''}`}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <div>GUESTS</div>
                        <div>{guests.adults + guests.children} guests, {guests.infants} infant</div>

                        {isDropdownOpen && (
                            <ul className="absolute top-full left-0 w-full text-xs menu gap-2 p-4 shadow bg-base-100 rounded-lg z-10 ">
                                {[
                                    { type: "adults", label: "Adults", description: "Age 13+" },
                                    { type: "children", label: "Children", description: "Ages 2–12" },
                                    { type: "infants", label: "Infants", description: "Under 2" },
                                    { type: "pets", label: "Pets", description: "Bringing a service animal?" },
                                ].map((item, index) => (
                                    <div key={index} className="flex justify-between p-1 w-full">
                                        <div className="flex flex-row w-full justify-between px-0 hover:bg-transparent outline-none focus:outline-none  ">
                                            <div className='outline-none focus:outline-none focus:bg-transparent' >
                                                <span className="block font-semibold">{item.label}</span>
                                                <span className="text-xs text-gray-500">{item.description}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button
                                                    className="btn btn-xs btn-outline"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        updateGuestCount(item.type, -1);
                                                    }}
                                                >
                                                    −
                                                </button>
                                                <span>{guests[item.type]}</span>
                                                <button
                                                    className="btn btn-xs btn-outline"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        updateGuestCount(item.type, 1);
                                                    }}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <li className="text-xs text-gray-500 mt-2">
                                    Pets aren't allowed.{" "}

                                </li>
                                <li className="mt-2 flex justify-end">
                                    <button
                                        className="btn btn-sm"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsDropdownOpen(false);
                                        }}
                                    >
                                        Close
                                    </button>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                <button
          onClick={() => setShowPriceAndOffers(prev => !prev)}
          className="btn rounded-full bg-blue-700 h-12 hover:bg-blue-600 text-white py-2.5 btn-sm w-full text-sm flex justify-center items-center leading-normal"
        >
          Reserve / Check availability
        </button>
                    <div className="text-xs text-center">
                        You won't be charged yet
                    </div>
                </div>
                <div className="text-sm font-medium flex flex-col gap-2">
                    <div className="flex justify-between">
                        <div className="">₹12,499 x 5 nights</div>
                        <div className="">₹62,496</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="">Cleaning fee</div>
                        <div className="">₹500</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="">Airbnb service fee</div>
                        <div className="">₹8,894</div>
                    </div>
                </div>
                <hr />
                <div className="flex flex-row font-bold text-sm justify-between">
                    <div className="">Total before taxes</div>
                    <div className="">₹71,890</div>
                </div>
                <hr />
                <div className="flex bg-[#eafbf7] gap-2 p-3 rounded-2xl flex-row font-semibold items-start text-sm ">
                    <div className=""><img src="/images/svg/tick-circle.svg" className='w-5 object-contain mt-1' alt="" /></div>
                    <div className="text-xs">
                        <span className='text-sm font-semibold underline cursor-pointer'> Free Cancellation </span> up to 24 hours before the experience start (Location time)
                    </div>
                </div>
                <div className="flex bg-[#fbf5ea] gap-2 p-3 rounded-2xl flex-row font-semibold items-start text-sm ">
                    <div className=""><img src="/images/svg/fire-colour.svg" className='w-5 object-contain mt-1' alt="" /></div>
                    <div className="text-xs">
                        <span className='text-xs font-semibold '> Don't miss out! </span> <br />This is usually booked 41 days in advance.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsPayment;
