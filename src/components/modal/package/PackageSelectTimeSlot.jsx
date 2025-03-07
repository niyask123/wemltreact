import React, { useState } from 'react';
import { bookingDetails, transferTimings } from '../../../data/PackagesData';



const PackageSelectTimeSlot = ({ tourName }) => {
    const [selectedTime, setSelectedTime] = useState("10:22");

    const handleCheckboxChange = (time) => {
        setSelectedTime(time);
    };
    return (
        <>
            <button
                className="btn min-h-7 max-h-7  border-[#f1f1f1] text-gray-500 text-[11px] text-nowrap"
                onClick={() => document.getElementById('selectTimeSlotModal').showModal()}
            >
                Select time slot
            </button>

            <dialog id="selectTimeSlotModal" className="modal">
                <div className="modal-box max-w-2xl">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">{tourName}</h3>
                    <h3 className="font-semibold text-lg mb-3">
                        Mountain Adventure</h3>

                    <div className="flex flex-col gap-3 justify-start items-start">
                        <div className="w-full flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <div className="">Wednesday 26 March, 2025</div>
                                <div className="btn min-h-7 max-h-7  border-[#f1f1f1] text-gray-500 text-[11px] text-nowrap">change</div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="">
                                    Exotic Bird Show</div>

                                <div className="dropdown dropdown-bottom dropdown-left">
                                    <div tabIndex={0} role="button" className="btn min-h-7 max-h-7  border-[#f1f1f1] text-gray-500 text-[11px] text-nowrap">change</div>

                                    <ul tabIndex={0} className="list-decimal  dropdown-content menu bg-base-100 rounded-box z-1 w-96 text-xs p-2 shadow-sm">
                                        <li><a> Exotic Bird Show</a></li>
                                        <li><a>Dolphin & Seal Show Regular Tickets</a></li>
                                        <li><a> Dolphin & Seal Show VIP Tickets</a></li>
                                        <li><a>Dolphinarium Majestic Swim- Sharing session</a></li>
                                        <li><a> Dolphinarium Majestic Swim - Private Session (1 to 3 People)</a></li>
                                        <li><a> Dolphin Meet and Greet Sharing SessionItem</a></li>
                                        <li><a>Dolphin Meet and Greet Private Session (1 to 3 People)</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr className=' w-full' />
                        <div className="flex flex-col gap-2">
                            <div className="text-sm font-medium text-start">Select Time Options</div>
                            <div className="flex flex-row gap-2">
                                <div className="flex gap-3 p-2 items-center rounded-2xl border">
                                    <div className="p-1 bg-green-300 rounded-full"></div>
                                    Available
                                </div>
                                <div className="flex gap-3 p-2 items-center rounded-2xl border">
                                    <div className="p-1 bg-yellow-300 rounded-full"></div>
                                    Limited Availability
                                </div>
                                <div className="flex gap-3 p-2 items-center rounded-2xl border">
                                    <div className="p-1 bg-red-300 rounded-full"></div>
                                    Sold Out
                                </div>
                            </div>

                            <div className="flex flex-row gap-2 mt-3">
                                {["10:22", "13:20", "16:20"].map((time) => (
                                    <div key={time} className="flex gap-2 p-2 font-medium items-center">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            checked={selectedTime === time}
                                            onChange={() => handleCheckboxChange(time)}
                                        />
                                        {time}
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-row gap-5 mt-3">
                                <div className="flex flex-col gap-2">
                                    <div className="">Adult 18 x AED 50.00</div>
                                    <div className="">
                                        <select
                                            className="border w-full border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 "
                                        >
                                            <option value="Option 1">Option 1</option>
                                            <option value="Option 2">Option 2</option>
                                            <option value="Option 3">Option 3</option>
                                        </select>

                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="">Child 12 x AED 30.00</div>
                                    <div className=""><select
                                        className="border w-full border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 "
                                    >
                                        <option value="Option 1">Option 1</option>
                                        <option value="Option 2">Option 2</option>
                                        <option value="Option 3">Option 3</option>
                                    </select></div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="">Infant 0 x AED 0.00
                                    </div>
                                    <div className=""><select
                                        className="border w-full border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 "
                                    >
                                        <option value="Option 1">Option 1</option>
                                        <option value="Option 2">Option 2</option>
                                        <option value="Option 3">Option 3</option>
                                    </select></div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex flex-row  justify-between   items-center">
                            <div className="text-sm font-semibold ">Total
                                AED 1,260.00</div>
                            <div className="">
                                <button className="btn rounded-full w-60  bg-blue-700 h-12 hover:bg-blue-600 text-white py-2 btn-sm  text-sm flex justify-center items-center leading-normal gap-3">Proceed</button>
                            </div>
                        </div>

                    </div>
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button>Close</button>
                </form>
            </dialog>
        </>
    );
};

export default PackageSelectTimeSlot;
