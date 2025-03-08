import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import usePackageStore from '../../store/usePackagesStore';
import { FooterTabs, FooterTabsData, sectionsFooter } from '../../data/FooterData';

const SmFooterPayment = ({onReserveClick}) => {
  const [activeTab, setActiveTab] = useState("Popular");
  const [expanded, setExpanded] = useState(false);



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

  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);

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
          onClick={onReserveClick}
            className="btn rounded-full bg-blue-700 h-12 px-10 hover:bg-blue-600 text-white py-2.5 btn-sm text-sm flex justify-center items-center leading-normal">
            Reserve
          </button>
        </div>
      </div>



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
                    className={`pb-2 ${activeTab === tab.name
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
              {sectionsFooter.map((section, index) => (
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
                  <img src="https://www.svgrepo.com/show/480913/earth-12.svg" className="h-3 w-3" alt="glob" /> <div>English (IN)</div>
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