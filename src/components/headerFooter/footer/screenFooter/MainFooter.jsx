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
      { title: "Item 1", description: "Description 1" },
      { title: "Item 2", description: "Description 2" },
      { title: "Item 3", description: "Description 3" },
      { title: "Item 4", description: "Description 4" },
      { title: "Item 5", description: "Description 5" },
      { title: "Item 6", description: "Description 6" },
      { title: "Item 7", description: "Description 7" },
      { title: "Item 8", description: "Description 8" },
      { title: "Item 9", description: "Description 9" },
      { title: "Item 10", description: "Description 10" },
      { title: "Item 11", description: "Description 11" },
      { title: "Item 12", description: "Description 12" },
      { title: "Item 13", description: "Description 13" },
      { title: "Item 14", description: "Description 14" },
      { title: "Item 15", description: "Description 15" },
    ],
    "Arts & Culture": [
      { title: "Item A", description: "Description A" },
      { title: "Item B", description: "Description B" },
      { title: "Item C", description: "Description C" },
      { title: "Item D", description: "Description D" },
      { title: "Item E", description: "Description E" },
      { title: "Item 6", description: "Description 6" },
      { title: "Item 7", description: "Description 7" },
      { title: "Item 8", description: "Description 8" },
      { title: "Item 9", description: "Description 9" },
      { title: "Item 10", description: "Description 10" },
      { title: "Item 11", description: "Description 11" },
      { title: "Item 12", description: "Description 12" },
      { title: "Item 13", description: "Description 13" },
      { title: "Item 14", description: "Description 14" },
      { title: "Item 15", description: "Description 15" },
    ],
    "Culture Data": [
      { title: "Data 1", description: "Culture 1" },
      { title: "Data 2", description: "Culture 2" },
      { title: "Data 3", description: "Culture 3" },
      { title: "Data 4", description: "Culture 4" },
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
              <div className="text-xl font-bold mb-4">
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
                      ? "border-b-2 border-black text-black"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab(tab.name)}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Items Grid */}
            <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-x-3 gap-y-4">
              {activeItems
                .slice(0, expanded ? activeItems.length : 11)
                .map((item, index) => (
                  <div key={index} className="flex flex-col gap-0">
                    <div className="text-sm font-bold">{item.title}</div>
                    <div className="text-xs text-gray-500 hover:text-black">
                      {item.description}
                    </div>
                  </div>
                ))}

              {/* Show More at 12th position */}
              {!expanded && activeItems.length > 11 && (
                <button
                  className="text-sm text-black underline text-start flex items-center"
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

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
            {sections.map((section, index) => (
              <div
                key={index}
                className="flex text-sm lg:text-xs xl:text-xs md:text-xs flex-col gap-2"
              >
                <div className="font-bold">{section.title}</div>
                {section.links.map((link, linkIndex) => (
                  <div
                    key={linkIndex}
                    className="text-gray-500 font-medium hover:underline cursor-pointer"
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
              <div className="flex flex-row text-nowrap gap-1">
                ⭐ <div>English (IN)</div>
              </div>
              <div className="flex flex-row text-nowrap gap-1">
                <span>₹</span>
                <div>INR</div>
              </div>
              <div className="flex flex-row text-nowrap gap-1">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/facebook-icon.svg"
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
