import React, { useState, useEffect, useRef } from "react";
import CustomNav from "../../modal/customNav/CustomNav";
import PackagesMenu from "../../../pages/home/elements/PackagesMenu";
import LoginSignupModal from "../../modal/logins/LoginSignupModal";
import { AiOutlineMenu, AiOutlineUserAdd } from "react-icons/ai";

const PackageHeader = () => {
    const modalRef = useRef(null);

    const openModal = () => {
        if (modalRef.current) modalRef.current.showModal();
    };
    const [activeTab, setActiveTab] = useState("tab1");
    const [showOptions, setShowOptions] = useState(false);
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    // Apply theme on mount
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    // Toggle theme
    const handleThemeToggle = () => {
        const newTheme = darkMode ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        setDarkMode(!darkMode);
    };

    return (
        <div className="hidden md:flex flex-col gap-3 p-4 pt-6 pb-2 px-3 container mx-auto 2xl:px-40 xl:px-32">
            <div className="flex flex-row justify-between items-center">
                <img
                    src="/images/logo/logo.png"
                    className="object-contain lg:w-[150px] w-32"
                    alt="Logo"
                />

                {/* Tabs: Stays & Experiences */}
                <div className={`flex gap-3 transition-all duration-300 pl-[10%] zoom-in ${showOptions ? "block" : "hidden"}`}>
                    <div
                        className={`cursor-pointer rounded-full hover:bg-gray-100 p-2 px-4 ${activeTab === "tab1" ? "font-semibold bg-gray-1" : ""}`}
                        onClick={() => setActiveTab("tab1")}
                    >
                        Stays
                    </div>
                    <div
                        className={`cursor-pointer rounded-full hover:bg-gray-100 p-2 px-4 ${activeTab === "tab2" ? "font-semibold bg-gray-1" : ""}`}
                        onClick={() => setActiveTab("tab2")}
                    >
                        Experiences
                    </div>
                </div>

                {/* Search Bar */}
                <div className={`zoom-in lg:pl-20  flex gap-3 transition-all duration-300 ${showOptions ? "hidden" : "block"}`}>
                    <div onClick={() => document.getElementById('customNav').showModal()} className="text-xs font-medium max-w-[850px]   lg:max-w-[650px] rounded-full shadow-md border border-[#DDDDDD] flex flex-row w-full justify-between items-center container mx-auto">
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
                                        src="/images/svg/searchsubmit.svg"
                                        className="object-contain w-4 h-4"
                                        alt="Search"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section: User Options */}
                <div className="flex flex-row md:gap-2 lg:gap-3 text-sm">

                    {/* Dropdown Menu */}
                    <div className="lt-01">creator</div>
                    <div className="lt-01">Become a supplier</div>
                    <div className="dropdown dropdown-end text-base ">
                        <div tabIndex={0} role="button" className="lt-01 "><AiOutlineMenu /> <AiOutlineUserAdd /></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 mt-2 box-shadow-a shadow">
                            <li onClick={openModal}><a>Sign up</a></li>
                            <li onClick={openModal}><a>Log in</a></li>
                            <li><a>Livetour your home</a></li>
                            <li><a>Help center</a></li>
                            <li className="flex flex-row gap-2 items-center justify-between">
                                <div>Dark Mode</div>
                                <input
                                    type="checkbox"
                                    className="toggle theme-controller"
                                    onChange={(e) => {
                                        document.documentElement.setAttribute(
                                            "data-theme",
                                            e.target.checked ? "dark" : "light"
                                        );
                                    }}
                                />
                            </li>

                        </ul>
                    </div>
                    <LoginSignupModal modalRef={modalRef} />
                </div>
            </div>
            <CustomNav />
            {/* <PackagesMenu /> */}
        </div>
    );
};

export default PackageHeader;
