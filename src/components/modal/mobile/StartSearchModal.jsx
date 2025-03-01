import React, { useState, useRef, useEffect } from 'react';
import { experiencesList, stayList } from '../../../data/dats';

const StartSearchModal = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState("stays");
    const [staysInput, setStaysInput] = useState("");
    const [experiencesInput, setExperiencesInput] = useState("");
    const [showOptions, setShowOptions] = useState(true);
    const [isInputClicked, setIsInputClicked] = useState(false);
    const modalRef = useRef(null);
    const handleInputClick = () => {
        setIsInputClicked(true);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowOptions(true);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleOptions = () => {
        setShowOptions((prev) => !prev);
    };

    return (
        <div>
            <dialog id="my_modal_2" className="modal fixed  inset-0 bg-black/20 items-center justify-center flex" open={isOpen}>
                <div ref={modalRef} className="bg-[#f7f7f7] h-full p-5 rounded-lg shadow-lg flex flex-col gap-2 w-full max-w-lg">
                    <div className="flex justify-between">
                        <form method="dialog">
                            <button onClick={onClose} className="cursor-pointer">
                                <img src="https://www.svgrepo.com/show/528912/close-circle.svg" className="h-6 w-6" alt="Close" />
                            </button>
                        </form>
                        <div className='flex flex-row gap-4'>
                            <div
                                className={`cursor-pointer font-semibold border-b-2 ${activeTab === "stays" ? "border-black" : "border-transparent"}`}
                                onClick={() => setActiveTab("stays")}
                            >
                                Stays
                            </div>
                            <div
                                className={`cursor-pointer font-semibold border-b-2 ${activeTab === "experiences" ? "border-black" : "border-transparent"}`}
                                onClick={() => setActiveTab("experiences")}
                            >
                                Experiences
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 p-4 bg-white rounded-lg shadow-sm h-full">
                        {activeTab === "stays" ? (
                            <div className="flex flex-col gap-3">
                                <h2 className="text-xl font-bold">Where to?</h2>
                                <input
                                    type="text"
                                    placeholder="Type here..."
                                    className="w-full border border-gray-300 p-2 rounded-lg"
                                    value={staysInput}
                                    onClick={toggleOptions}
                                    onChange={(e) => setStaysInput(e.target.value)}
                                />
                                <p className="text-xs">Suggested destinations</p>
                                <div className="">
                                    <div
                                        className={`${isInputClicked ? "max-h-[calc(113vh-200px)]" : "max-h-[calc(90vh-345px)]"
                                            } overflow-y-auto flex flex-col gap-3 scrollbar-hidden transition-all duration-300`}
                                    >
                                        {stayList.map((location) => (
                                            <div
                                                key={location.id}
                                                className="flex px-3 py-2 rounded-lg items-center flex-row justify-start gap-3 cursor-pointer hover:bg-gray-100"
                                            >
                                                <img
                                                    src={location.image}
                                                    className="object-contain bg-[#f4f4f4] rounded-lg w-14 h-14"
                                                    alt={location.name}
                                                />
                                                <div className="flex flex-col">
                                                    <div className="text-sm font-semibold text-black/80">
                                                        {location.name}
                                                    </div>
                                                    <div className="text-xs text-gray-500">{location.description}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        ) : (
                            <div className="flex flex-col gap-3">
                                <h2 className="text-xl font-bold">Where to?</h2>
                                <input
                                    type="text"
                                    placeholder="Type here..."
                                    className="w-full border border-gray-300 p-2 rounded-lg"
                                    value={experiencesInput}
                                    onClick={toggleOptions}
                                    onChange={(e) => setExperiencesInput(e.target.value)}
                                />
                                <p className="text-xs">Suggested Experiences</p>
                                <div className="h-auto overflow-y-hidden">
                                    {experiencesList.map((location) => (
                                        <div
                                            key={location.id}
                                            className="flex px-3 py-2 rounded-lg items-center flex-row justify-start gap-3 cursor-pointer hover:bg-gray-100"
                                        >
                                            <img
                                                src={location.image}
                                                className="object-contain bg-[#f4f4f4] rounded-lg w-14 h-14"
                                                alt={location.name}
                                            />
                                            <div className="flex flex-col">
                                                <div className="text-sm font-semibold text-black/80">
                                                    {location.name}
                                                </div>
                                                <div className="text-xs text-gray-500">{location.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div
                        className={`flex flex-col gap-3 mt-4 transition-all duration-300 ${showOptions ? "opacity-100 h-auto" : "opacity-0 h-0 "}`}
                    >
                        <div className="flex justify-between p-3 bg-white shadow-sm rounded-lg">
                            <span className="text-gray-600">When</span>
                            <span className="font-semibold">Add Dates</span>
                        </div>
                        <div className="flex justify-between p-3 bg-white shadow-sm rounded-lg">
                            <span className="text-gray-600">Who</span>
                            <span className="font-semibold">Add Guests</span>
                        </div>
                        <div className="flex justify-between">
                            <button className="bg-gray-700 text-white px-5 py-2 rounded-lg">Clear</button>
                            <button className="bg-red-600 text-white px-5 py-2 flex items-center gap-1 rounded-lg">
                                <img src="/src/assets/images/svg/searchsubmit.svg" className="h-4" alt="Search" /> Search
                            </button>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default StartSearchModal;
