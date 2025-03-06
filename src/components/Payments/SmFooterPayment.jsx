import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import usePackageStore from '../../store/usePackagesStore';

const SmFooterPayment = () => {
     const [activeTab, setActiveTab] = useState("Popular");
      const [expanded, setExpanded] = useState(false);
    
      // Tabs Array
      const FooterTabs = [
        { id: 1, name: "Popular" },
        { id: 2, name: "Arts & Culture" },
        { id: 3, name: "Culture Data" },
      ];
    
      // Data for each tab
      const FooterTabsData = {
        Popular: [
          { title: " Canmore", description: "Flat rentals" },
          { title: " Benalmadena", description: "Beach house rentals" },
          { title: " Marbella", description: "House rentals" },
          { title: " Mijas", description: "Pet-friendly rentals" },
          { title: " Jasper", description: "Cabin rentals" },
          { title: " Mountain View", description: "Cabin rentals" },
          { title: " Devonport", description: "Mallacoota" },
          { title: " Mallacoota", description: "Pet-frindly rentals" },
          { title: " Ibiza", description: "Holiday rentals" },
          { title: " Anaheim", description: "Family-friendly rentals" },
          { title: " Jasper", description: "Cabin rentals" },
          { title: "Paso Robles", description: "Cabin rentals" },
          { title: " Santa Barbara", description: "Cottage rentals" },
          { title: " Sonoma", description: "House rentals" },
          { title: " Santa barbara", description: "Cottage rentals" },
          { title: " Canmore", description: "Flat rentals" },
          { title: " Benalmadena", description: "Beach house rentals" },
          { title: " Marbella", description: "House rentals" },
          { title: " Mijas", description: "Pet-friendly rentals" },
          { title: " Jasper", description: "Cabin rentals" },
          { title: " Mountain View", description: "Cabin rentals" },
          { title: " Devonport", description: "Mallacoota" },
          { title: " Mallacoota", description: "Pet-frindly rentals" },
          { title: " Ibiza", description: "Holiday rentals" },
          { title: " Anaheim", description: "Family-friendly rentals" },
          { title: " Jasper", description: "Cabin rentals" },
          { title: "Paso Robles", description: "Cabin rentals" },
          { title: " Santa Barbara", description: "Cottage rentals" },
          { title: " Sonoma", description: "House rentals" },
          { title: " Santa barbara", description: "Cottage rentals" },
        ],
        "Arts & Culture": [
          { title: " Canmore", description: "Flat rentals" },
          { title: " Benalmadena", description: "Beach house rentals" },
          { title: " Marbella", description: "House rentals" },
          { title: " Mijas", description: "Pet-friendly rentals" },
          { title: " Jasper", description: "Cabin rentals" },
          { title: " Mountain View", description: "Cabin rentals" },
          { title: " Devonport", description: "Mallacoota" },
          { title: " Mallacoota", description: "Pet-frindly rentals" },
          { title: " Ibiza", description: "Holiday rentals" },
          { title: " Anaheim", description: "Family-friendly rentals" },
          { title: " Jasper", description: "Cabin rentals" },
          { title: "Paso Robles", description: "Cabin rentals" },
          { title: " Santa Barbara", description: "Cottage rentals" },
          { title: " Sonoma", description: "House rentals" },
          { title: " Santa barbara", description: "Cottage rentals" },
          { title: " Canmore", description: "Flat rentals" },
          { title: " Benalmadena", description: "Beach house rentals" },
          { title: " Marbella", description: "House rentals" },
          { title: " Mijas", description: "Pet-friendly rentals" },
          { title: " Jasper", description: "Cabin rentals" },
          { title: " Mountain View", description: "Cabin rentals" },
          { title: " Devonport", description: "Mallacoota" },
          { title: " Mallacoota", description: "Pet-frindly rentals" },
          { title: " Ibiza", description: "Holiday rentals" },
          { title: " Anaheim", description: "Family-friendly rentals" },
          { title: " Jasper", description: "Cabin rentals" },
          { title: "Paso Robles", description: "Cabin rentals" },
          { title: " Santa Barbara", description: "Cottage rentals" },
          { title: " Sonoma", description: "House rentals" },
          { title: " Santa barbara", description: "Cottage rentals" },
          { title: " Canmore", description: "Flat rentals" },
          { title: " Benalmadena", description: "Beach house rentals" },
          { title: " Marbella", description: "House rentals" },
          { title: " Mijas", description: "Pet-friendly rentals" },
          { title: " Jasper", description: "Cabin rentals" },
          { title: " Mountain View", description: "Cabin rentals" },
          { title: " Devonport", description: "Mallacoota" },
          { title: " Mallacoota", description: "Pet-frindly rentals" },
          { title: " Ibiza", description: "Holiday rentals" },
          { title: " Anaheim", description: "Family-friendly rentals" },
          { title: " Jasper", description: "Cabin rentals" },
          { title: "Paso Robles", description: "Cabin rentals" },
          { title: " Santa Barbara", description: "Cottage rentals" },
          { title: " Sonoma", description: "House rentals" },
          { title: " Santa barbara", description: "Cottage rentals" },
        ],
        "Culture Data": [
          { title: " Canmore", description: "Flat rentals" },
          { title: " Benalmadena", description: "Beach house rentals" },
          { title: " Marbella", description: "House rentals" },
          { title: " Mijas", description: "Pet-friendly rentals" },
          { title: " Jasper", description: "Cabin rentals" },
          { title: " Mountain View", description: "Cabin rentals" },
          { title: " Devonport", description: "Mallacoota" },
          { title: " Mallacoota", description: "Pet-frindly rentals" },
          { title: " Ibiza", description: "Holiday rentals" },
          { title: " Anaheim", description: "Family-friendly rentals" },
          { title: " Jasper", description: "Cabin rentals" },
          { title: "Paso Robles", description: "Cabin rentals" },
          { title: " Santa Barbara", description: "Cottage rentals" },
          { title: " Sonoma", description: "House rentals" },
          { title: " Santa barbara", description: "Cottage rentals" },
        ],
      };
    
      const sections = [
        {
          title: "Support",
          links: [
            "Help Centre",
            "AirCover",
            "Anti-discrimination",
            "Disability support",
            "Cancellation options",
            "Report neighbourhood concern",
          ],
        },
        {
          title: "Hosting",
          links: [
            "Help Centre",
            "AirCover",
            "Anti-discrimination",
            "Disability support",
            "Cancellation options",
            "Report neighbourhood concern",
          ],
        },
        {
          title: "Livetour",
          links: [
            "Help Centre",
            "AirCover",
            "Anti-discrimination",
            "Disability support",
            "Cancellation options",
            "Report neighbourhood concern",
          ],
        },
      ];
    
    
      // Get the active tab's data
      const activeItems = FooterTabsData[activeTab] || [];


    const { packageName } = useParams(); // Get package name from URL
    const { places } = usePackageStore(); // Get all package places
    const dropdownRef = useRef(null);

    const selectedPlace = places.find(
        (place) => place.location.toLowerCase().replace(/\s+/g, "-") === packageName
    ) || {};

    const [guests, setGuests] = useState({
        adults: 1,
        children: 0,
        infants: 0,
        pets: 0,
    });

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        <>
            <div className="md:hidden block">
                <div
                    className="fixed bottom-0 rounded-t-2xl left-0 w-full flex-row bg-white shadow-md p-3 flex justify-between px-5 items-center border-t transition-transform duration-300 z-20">
                    <div className="flex flex-col gap-1 items-center">
                        <div className='text-sm font-semibold underline'> <span></span> {selectedPlace.price} /night</div>
                        <div className='text-xs font-semibold  py-1 px-4 bg-gray-200 rounded-full flex flex-row gap-1'>
                            <div className=""><img src="/images/svg/ok.svg" className='object-contain w-4' alt="" /></div>
                            <div className="">Free Cancellation</div>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="btn rounded-full bg-blue-700 h-12 px-10 hover:bg-blue-600 text-white py-2.5 btn-sm text-sm flex justify-center items-center leading-normal">
                        Reserve
                    </button>
                </div>
            </div>

            {/* Full-screen Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white w-full h-full flex flex-col p-4 relative items-center justify-center">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 left-4 text-lg bg-gray-200 p-2 rounded-full">
                            <img src="/images/svg/back.svg" className='object-contain w-6' alt="" />
                        </button>
                        <div className="flex-col flex  gap-3 p-6 box-shadow-g rounded-3xl">
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
                                <button className="btn rounded-full  bg-blue-700 h-12 hover:bg-blue-600 text-white py-2.5 btn-sm w-full text-sm flex justify-center items-center leading-normal">
                                    Reserve
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
                </div>
            )}


<div className="bg-[#f7f7f7]">
      <div className="flex flex-col container mx-auto gap-12 border-b">
        <div className="flex flex-col py-20 container mx-auto  gap-12 border-b p-4">
          <div className="flex flex-col container mx-auto gap-3 border-b pb-12 border-[#dddddd]">
            <div className="flex flex-col gap-3">
              <div className="text-xl font-semibold mb-4">
                Inspiration for future getaways
              </div>
            </div>
            {/* Tabs Section */}
            <div className="flex gap-4 text-sm font-semibold mb-3 border-b">
              {FooterTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`pb-2 ${
                    activeTab === tab.name
                      ? "border-b-2 border-black zoom-in text-black"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab(tab.name)}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Items Grid */}
            <div className="grid  lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-x-3 gap-y-4">
              {activeItems
                .slice(0, expanded ? activeItems.length : 11)
                .map((item, index) => (
                  <div key={index} className="flex zoom-in flex-col gap-0">
                    <div className="text-sm font-semibold">{item.title}</div>
                    <div className="text-xs text-gray-500 hover:text-black">
                      {item.description}
                    </div>
                  </div>
                ))}

              {/* Show More at 12th position */}
              {!expanded && activeItems.length > 11 && (
                <button
                  className="text-sm  text-black underline text-start flex items-center"
                  onClick={() => setExpanded(true)}
                >
                  Show More
                </button>
              )}
              {/* Show Less at the end */}
              {expanded && (
                <button
                  className="text-sm text-black underline text-start flex items-center mt-3"
                  onClick={() => setExpanded(false)}
                >
                  Show Less
                </button>
              )}
            </div>
          </div>

          <div className="grid  lg:grid-cols-3 grid-cols-1 gap-6">
            {sections.map((section, index) => (
              <div
                key={index}
                className="flex text-sm lg:text-xs xl:text-xs md:text-xs flex-col gap-2"
              >
                <div className="font-bold">{section.title}</div>
                {section.links.map((link, linkIndex) => (
                  <div
                    key={linkIndex}
                    className="text-gray-500 text-xs font-medium hover:underline cursor-pointer"
                  >
                    {link}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="flex flex-col-reverse gap-4 md:flex-row justify-between items-center">
            <div className="text-xs md:text-xs lg:text-xs flex flex-row gap-1 md:flex-row flex-wrap justify-center">
              <div className="text-nowrap">@ 2025 Livetour</div>
              <div className="">.</div>
              <div className="">Privacy</div>
              <div className="">.</div>
              <div className="">Terms</div>
              <div className="">.</div>
              <div className="">Sitemap</div>
              <div className="">.</div>
              <div className="text-nowrap">Company Details</div>
            </div>

            <div className="text-xs md:text-xs font-semibold lg:text-xs flex flex-row gap-3 md:flex-row items-center justify-center">
              <div className="flex flex-row text-nowrap gap-1 items-center">
                <img src="https://www.svgrepo.com/show/480913/earth-12.svg" className="h-3 w-3"  alt="glob" /> <div>English (IN)</div>
              </div>
              <div className="flex flex-row text-nowrap gap-1">
                <span>₹</span>
                <div>INR</div>
              </div>
              <div className="md:flex hidden  flex-row text-nowrap gap-1">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                    alt="Facebook"
                    className="h-5 w-5"
                  />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/twitter-icon.svg"
                    alt="Twitter"
                    className="h-5 w-5"
                  />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/instagram-icon.svg"
                    alt="Instagram"
                    className="h-5 w-5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    );
};

export default SmFooterPayment;