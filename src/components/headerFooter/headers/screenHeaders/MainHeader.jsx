import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineUserAdd } from "react-icons/ai";
import LoginSignupModal from "../../../modal/logins/LoginSignupModal";
import PackagesMenu from "../../../../pages/home/elements/PackagesMenu";
import { div } from "framer-motion/client";

const MainHeader = () => {
    const [showOptions, setShowOptions] = useState(true);
    const [activeTab, setActiveTab] = useState("tab1");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setShowOptions(window.scrollY <= 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // loading time
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, [])
    return (

        <div className="hidden md:flex flex-col gap-3 p-4 pt-6 pb-2 px-3 container mx-auto">
            <div className="flex flex-row justify-between items-center">
                <div>
                    {
                        loading ? (
                            <div className="skeleton w-36 h-10"></div>
                        ) : (
                            <img
                                src="src/assets/images/logo/logo.png"
                                className="object-contain lg:w-[150px] w-32"
                                alt="Logo"
                            />
                        )
                    }

                </div>


                {/* Tabs: "Stay" and "Experiences" */}
                <div className={`flex gap-3 transition-all duration-300 pl-[10%] ${showOptions ? "block" : "hidden"}`}>

                    {
                        loading ? (
                            <>
                                <div className="skeleton w-20 h-6"></div>
                                <div className="skeleton w-24 h-6"></div>
                            </>
                        ) : (
                            <>
                                <div
                                    className={`cursor-pointer  rounded-md ${activeTab === "tab1" ? " font-semibold" : ""
                                        }`}
                                    onClick={() => setActiveTab("tab1")}
                                >
                                    Stays
                                </div>
                                <div
                                    className={`cursor-pointer  rounded-md ${activeTab === "tab2" ? " font-semibold" : ""
                                        }`}
                                    onClick={() => setActiveTab("tab2")}
                                >
                                    Experiences
                                </div>
                            </>
                        )
                    }



                </div>

                {/* New Content when scrolling DOWN */}
                <div className={`zoom-in  flex gap-3 transition-all duration-300 ${showOptions ? "hidden" : "block"}`}>
                    <div>


                        <div className="text-xs font-medium max-w-[850px]  lg:max-w-[650px] rounded-full shadow-md border border-[#DDDDDD] flex flex-row w-full justify-between items-center container mx-auto">
                            <div className="flex-1">
                                <button className="dropdown-btn text-nowrap px-3 pl-6 py-3 flex flex-col rounded-full hover:bg-gray-200 transition-all duration-200">
                                    Anywhere

                                </button>
                            </div>
                            <div className="h-6 border"></div>
                            <div className="hidden sm:flex flex-1 ">
                                <button className="dropdown-btn text-nowrap px-3 py-3 flex flex-col rounded-full  hover:bg-gray-200 transition-all duration-200">
                                    Any week

                                </button>
                            </div>
                            <div className="h-6 border"></div>


                            <div className="flex items-center space-x-2 group hover:bg-gray-200 rounded-full transition-all duration-200">
                                <div className="flex-1">
                                    <button className="dropdown-btn text-nowrap px-3 py-3 flex flex-col rounded-full">
                                        Add guests

                                    </button>
                                </div>
                                <div className="relative flex flex-col">
                                    <button className="p-2 bg-[#ef1b27] rounded-full">
                                        <img
                                            src="src/assets/images/svg/searchsubmit.svg"
                                            className="object-contain w-4 h-4"
                                            alt="Search"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>

                <div className="flex flex-row md:gap-2 lg:gap-3 text-xs ">
                    {
                        loading ? (
                            <div className="skeleton w-40 h-6"></div>
                        ) : (
                            <>
                                <div className="lt-01">creator</div>
                                <div className="lt-01">Become a supplier</div>
                                <div className="dropdown dropdown-end text-base">
                                    <div tabIndex={0} role="button" className="lt-01"><AiOutlineMenu /> <AiOutlineUserAdd /></div>
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                        <li onClick={() => document.getElementById('my_modal_3').showModal()} className=""><a>Sign up</a></li>
                                        <li onClick={() => document.getElementById('my_modal_3').showModal()}><a>Log in</a></li>
                                        <li><a>Livetour your home</a></li>
                                        <li><a>Help center</a></li>
                                        <li className="flex flex-row gap-2 items-center justify-between"><div>Dark Mood</div> <input type="checkbox" value="synthwave" className="toggle theme-controller" /></li>
                                    </ul>
                                </div>
                                <LoginSignupModal />
                            </>
                        )
                    }

                </div>
            </div>

            {/* Tab content */}


            {
                loading ? (
                    <div className="skeleton w-full h-12 rounded-full"></div>
                ) : (
                    <div className={`zoom-in  text-xs font-medium max-w-[850px] lg:max-w-[650px]  rounded-full box-shadow border-[1px] border-[#DDDDDD] flex flex-row gap-3 w-full justify-between items-center fade-in show container mx-auto ${showOptions ? "block" : "hidden"}`}>
                        {activeTab === "tab1" && (
                            <div className="text-xs font-medium  flex flex-row w-full justify-between items-center container mx-auto">
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
                            <div className="text-xs font-medium  flex flex-row w-full justify-between items-center container mx-auto">
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
                )
            }


            <PackagesMenu />
        </div>

    );
};

export default MainHeader;
