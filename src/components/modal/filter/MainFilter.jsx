import React from 'react'
import PlaceFilter from './filterComponents/PlaceFilter'
import RoomsAndBeds from './filterComponents/RoomsAndBeds'
import Amenities from './filterComponents/Amenities'
import Standout from './filterComponents/Standout'
import FilterAccordion from './filterComponents/FilterAccordion'

const MainFilter = () => {
    return (
        <div>
            <>
                <dialog id="packageModalMenu" className="modal">
                    <div className="modal-box w-full p-0 max-w-xl bg-white rounded-3xl shadow-lg flex flex-col h-[80vh]">
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
                        <div className="flex-1 overflow-y-auto p-6 scrollbar-hidden">
<PlaceFilter/>
<RoomsAndBeds/>
<Amenities/>
<Standout/>
<FilterAccordion/>

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
                        <button >Close</button>
                    </form>
                </dialog>

            </>
        </div>
    )
}

export default MainFilter
