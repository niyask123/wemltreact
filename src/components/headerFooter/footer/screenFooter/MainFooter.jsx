import React, { useState } from "react";

const MainFooter = () => {
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

  return (
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
  );
};

export default MainFooter;
