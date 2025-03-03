import React, { useEffect, useState } from 'react';
import { mobCategories } from '../../../../data/dats';
import StartSearchModal from '../../../modal/mobile/StartSearchModal';
import { Link } from 'react-router-dom';
import LoginSignupModal from '../../../modal/logins/LoginSignupModal';
import { AiOutlineMenu, AiOutlineUserAdd } from 'react-icons/ai';
import PackagesMenu from '../../../../pages/home/elements/PackagesMenu';

const Header = () => {
    const [loading, setLoading] = useState(true);
    // loading time
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, [])
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    return (
        <div>
            <nav
                className="bg-white container mx-auto shadow-md md:hidden sticky top-0 p-3 pb-0 w-full flex flex-col gap-3"
                style={{ zIndex: 1 }}
            >
                <div className="flex flex-row gap-3 items-center">
                    <button
                        onClick={() => document.getElementById('my_modal_2').showModal()}
                        className=" bg-white text-sm border items-center border-gray-200 flex flex-row justify-center gap-2 text-black/80 my-2 w-full shadow-sm font-bold py-3.5 px-4 rounded-full"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{ display: 'block', height: 12, width: 12, fill: 'currentcolor' }}
                        >
                            <path d="M13 0a13 13 0 0 1 10.5 20.67l7.91 7.92-2.82 2.82-7.92-7.91A12.94 12.94 0 0 1 13 26a13 13 0 1 1 0-26zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"></path>
                        </svg>
                        Start your search
                    </button>

                    <StartSearchModal />
                    <div className="dropdown dropdown-end">
                        {/* <div tabIndex={0} role="" className="p-2 px-3 py-3.5 rounded-full relative border flex flex-row gap-2 border-[#dddddd] items-center h-fit shadow-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                aria-hidden="true"
                                role="presentation"
                                focusable="false"
                                style={{ display: 'block', fill: 'none', height: 20, width: 20, stroke: 'currentcolor', strokeWidth: 3 }}
                            >
                                <g fill="none">
                                    <path d="M2 16h28M2 24h28M2 8h28"></path>
                                </g>
                            </svg>
                        </div> */}


                        <div className="flex flex-row md:gap-2 lg:gap-3 text-xs ">
                            {
                                loading ? (
                                    <div className="skeleton w-40 h-6"></div>
                                ) : (
                                    <>

                                        <div className="dropdown dropdown-end text-base">
                                            <div tabIndex={0} role="button" className="lt-01"> <AiOutlineUserAdd /></div>
                                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                                <li onClick={() => document.getElementById('my_modal_3').showModal()} className=""><a>Sign up</a></li>
                                                <li onClick={() => document.getElementById('my_modal_3').showModal()}><a>Log in</a></li>
                                                <li><a>Livetour your home</a></li>
                                                <li><a>Help center</a></li>
                                                <li><a>Creator</a></li>
                                                <li><a>Become a supplier</a></li>
                                                <li className="flex flex-row gap-2 items-center justify-between"><div>Dark Mood</div> <input type="checkbox" value="synthwave" className="toggle theme-controller" /></li>
                                            </ul>
                                        </div>

                                    </>

                                )
                            }

                        </div>
                        {/* <div tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <div className="flex flex-col text-xs font-medium gap-1 py-3">
                                <div className="hover:bg-gray-200 transition-colors duration-300">
                                    <Link to={""} className="flex flex-row gap-1 py-2 p-3 items-center">
                                        <img src="./src/assets/images/svg/home-drop.svg" className="w-[13px] h-[12px] object-contain" alt="Home" />
                                        <div>Livetour your home</div>
                                    </Link>
                                </div>
                                <div className="hover:bg-gray-200 transition-colors duration-300">
                                    <div className="flex flex-row gap-1 py-2 p-3 items-center">
                                        <img src="./src/assets/images/svg/sign-in.svg" className="w-[13px] h-[12px] object-contain" alt="Sign In" />
                                        <div>Sign Up</div>
                                    </div>
                                </div>
                                <div className="hover:bg-gray-200 transition-colors duration-300">
                                    <Link to={""} className="flex flex-row gap-1 py-2 p-3 items-center">
                                        <img src="./src/assets/images/svg/help.svg" className="w-[13px] h-[12px] object-contain" alt="Help" />
                                        <div>Help center</div>
                                    </Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <LoginSignupModal />
                </div>

                {/* <div className="flex flex-row gap-5 overflow-x-auto scrollbar-hidden pb-2 ">
                    {mobCategories.map((category) => (
                        <div
                            key={category.id}
                            className={`flex flex-col gap-2 justify-between items-center cursor-pointer ${activeCategory === category.id ? "border-b-2 border-[#3C3C3C] scale-105" : ""
                                }`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            <div className="w-[24px] h-[24px]">
                                <img src={category.img} alt={category.name} />
                            </div>
                            <div className="text-xs text-nowrap pb-1">{category.name}</div>
                        </div>
                    ))}
                </div> */}
                <PackagesMenu/>
            </nav>
        </div>
    );
};

export default Header;
