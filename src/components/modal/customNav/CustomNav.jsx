import React, { useState } from 'react'

const CustomNav = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const [showOptions, setShowOptions] = useState(true);
    return (
        <div>
            <dialog id="customNav" className="modal px-4 md:px-0 flex-col flex w-full">
                <div className="modal-box w-full max-h-40 min-h-40 max-w-full pt-5 p-6 rounded-none bg-white  shadow-lg">
                    {/* Tabs: "Stay" and "Experiences" */}
                    <div className={`flex gap-0 transition-all duration-300 justify-center zoom-in ${showOptions ? "block" : "hidden"}`}>
                        <div
                            className={`cursor-pointer  rounded-full hover:bg-gray-100 p-2 px-4  ${activeTab === "tab1" ? " font-semibold" : ""
                                }`}
                            onClick={() => setActiveTab("tab1")}
                        >
                            Stays
                        </div>
                        <div
                            className={`cursor-pointer  rounded-full hover:bg-gray-100 p-2 px-4  ${activeTab === "tab2" ? " font-semibold" : ""
                                }`}
                            onClick={() => setActiveTab("tab2")}
                        >
                            Experiences
                        </div>

                    </div>

                    {/* Modal Content */}
                    <div className="py-6 space-y-4">
                        <div className={`zoom-in  text-xs font-medium max-w-[850px] lg:max-w-[650px]  rounded-full box-shadow border-[1px] border-[#DDDDDD] flex flex-row gap-3 w-full justify-between items-center fade-in show container mx-auto ${showOptions ? "block" : "hidden"}`}>
                            {activeTab === "tab1" && (
                                <div className="text-xs zoom-in font-medium  flex flex-row w-full justify-between items-center container mx-auto">
                                    <div className="flex-1 rounded-full hover:bg-gray-200 transition-all duration-200">
                                        <button className="dropdown-btn text-nowrap px-3 pl-6 py-2 flex flex-col ">
                                            Where
                                            <span
                                                className="text-[11px] text-gray-500 truncate max-w-32 block"
                                                title="Search Destinations"
                                            >
                                                Search Destinations
                                            </span>
                                        </button>
                                    </div>
                                    <div className="h-6 border"></div>
                                    <div className="hidden sm:flex justify-center flex-1 rounded-full hover:bg-gray-200 transition-all duration-200">
                                        <button className="dropdown-btn text-nowrap px-3 py-2 flex flex-col rounded-full  hover:bg-gray-200 transition-all duration-200">
                                            Check In
                                            <span className="text-[11px] text-gray-500 truncate max-w-28 block">
                                                Add Dates
                                            </span>
                                        </button>
                                    </div>
                                    <div className="h-6 border"></div>
                                    <div className="hidden justify-center sm:flex flex-1 rounded-full hover:bg-gray-200 transition-all duration-200">
                                        <button className="dropdown-btn text-nowrap px-3 py-2 flex flex-col ">
                                            Check Out
                                            <span className="text-[11px] text-gray-500 truncate max-w-28 block">
                                                Add Dates
                                            </span>
                                        </button>
                                    </div>
                                    <div className="h-6 border"></div>
                                    <div className="flex items-center space-x-2 group hover:bg-gray-200 rounded-full transition-all duration-200">
                                        <div className="flex-1 lg:w-32 w-32  lg:pl-3">
                                            <button className="dropdown-btn text-nowrap px-3 py-2 flex flex-col rounded-full">
                                                Who
                                                <span className="text-[11px] text-gray-500 truncate max-w-28 block">
                                                    Guests
                                                </span>
                                            </button>
                                        </div>
                                        <div className="relative flex flex-col">
                                            <button className="p-3 bg-[#ef1b27] rounded-full">
                                                <img
                                                    src="src/assets/images/svg/searchsubmit.svg"
                                                    className="object-contain w-4 h-4"
                                                    alt="Search"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "tab2" && (
                                <div className="text-xs zoom-in font-medium  flex flex-row w-full justify-between items-center container mx-auto">
                                    <div className="flex-1 rounded-full hover:bg-gray-200 transition-all duration-200">
                                        <button className="dropdown-btn text-nowrap px-3 pl-6 py-2 flex flex-col ">
                                            Where
                                            <span
                                                className="text-[11px] text-gray-500 truncate max-w-32 block"
                                                title="Search Destinations"
                                            >
                                                Search destinations
                                            </span>
                                        </button>
                                    </div>
                                    <div className="h-6 border"></div>
                                    <div className="hidden sm:flex flex-1 justify-center rounded-full hover:bg-gray-200 transition-all duration-200">
                                        <button className="dropdown-btn text-nowrap px-3 py-2 flex flex-col rounded-full  hover:bg-gray-200 transition-all duration-200">
                                            Date
                                            <span className="text-[11px] text-gray-500 truncate max-w-28 block">
                                                Add Dates
                                            </span>
                                        </button>
                                    </div>

                                    <div className="h-6 border"></div>
                                    <div className="flex items-center space-x-2 group hover:bg-gray-200  rounded-full transition-all duration-200">
                                        <div className="flex-1 lg:w-32 w-48  lg:pl-3">
                                            <button className="dropdown-btn text-nowrap px-3 pl-6 lg:pl-3 py-2 flex flex-col rounded-full">
                                                Who
                                                <span className="text-[11px] text-gray-500 truncate max-w-28 block">
                                                    Add gurest
                                                </span>
                                            </button>
                                        </div>
                                        <div className="relative flex flex-col">
                                            <button className="p-3 bg-[#ef1b27] rounded-full">
                                                <img
                                                    src="src/assets/images/svg/searchsubmit.svg"
                                                    className="object-contain w-4 h-4"
                                                    alt="Search"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <form method="dialog" className="modal-backdrop h-full">
                    <button>Close</button>
                </form>
            </dialog>
        </div>
    )
}

export default CustomNav
