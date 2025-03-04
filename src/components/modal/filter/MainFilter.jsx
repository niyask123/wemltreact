import React, { useRef } from 'react';
import PlaceFilter from './filterComponents/PlaceFilter';
import RoomsAndBeds from './filterComponents/RoomsAndBeds';
import Amenities from './filterComponents/Amenities';
import Standout from './filterComponents/Standout';
import FilterAccordion from './filterComponents/FilterAccordion';

const MainFilter = () => {
    const modalRef = useRef(null);

    const openModal = () => {
        if (modalRef.current) modalRef.current.showModal();
    };

    const closeModal = () => {
        if (modalRef.current) modalRef.current.close();
    };

    return (
        <div>
            {/* Button to Open Modal */}
            <button
                className="p-2 px-4 border border-[#dddddd] mr-3 text-xs hidden md:flex flex-row items-center justify-center font-medium rounded-2xl gap-2 h-[3.1rem]"
                onClick={openModal}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    className="w-[15px] h-[15px] stroke-current stroke-[3]"
                >
                    <path
                        fill="none"
                        d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3"
                    ></path>
                </svg>
                Filters
            </button>

            {/* DaisyUI Modal */}
            <dialog ref={modalRef} id="packageModalMenu" className="modal">
                <div className="modal-box w-full p-0 max-w-xl bg-white rounded-3xl shadow-lg flex flex-col h-[80vh]">
                    {/* Modal Header */}
                    <form method="dialog">
                        {/* Sticky Header */}
                        <div className="sticky  top-0  p-4  w-full flex justify-between gap-20 bg-white rounded-t-3xl border-b shadow-md z-10">
                            <button className="cursor-pointer">
                                <img
                                    src="https://www.svgrepo.com/show/528912/close-circle.svg"
                                    className="h-6 w-6"
                                    alt="Close"
                                />
                            </button>
                            <div className="text-sm font-semibold pl-6">Filters</div>
                            <div></div>
                        </div>
                    </form>

                    {/* Scrollable Content */}
                    <div className="flex-1 scrollbar-hidden overflow-y-auto p-6">
                        <PlaceFilter />
                        <RoomsAndBeds />
                        <Amenities />
                        <Standout />
                        <FilterAccordion />

                    </div>

                    {/* Sticky Footer */}
                    <div className="sticky box-shadow items-center  bottom-0 bg-white flex flex-row justify-between w-full p-4 border-t shadow-md z-10">
                        <div className=" text-lg font-bold " method="dialog" >
                            <form method="dialog" >
                                <div>Clear All</div>
                            </form>
                        </div>
                        <div className="btn btn-neutral">Show 1000+ Places</div>
                    </div>
                </div>

                {/* Click Outside to Close */}
                <form method="dialog" className="modal-backdrop">
                    <button>Close</button>
                </form>
            </dialog>
        </div>
    );
};

export default MainFilter;
