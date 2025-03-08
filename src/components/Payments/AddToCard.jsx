import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../headerFooter/footer/Footer";
import SmFooterPayment from "./SmFooterPayment";


const AddToCard = () => {

    const location = useLocation();
    const { packageName } = location.state || {};

    return (
        <>

            <div className="container mx-auto 2xl:px-32 xl:px-20 p-5">
                <div className="flex flex-col gap-3">


                    {/* Grid Layout with Sticky Payment Section */}
                    <div className="grid md:grid-cols-12 gap-6">
                        {/* Left Content (Images and Details) */}
                        <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-1">
                            <div className="container mx-auto p-6">
                                <h2 className="text-2xl font-bold">Cart</h2>
                                {packageName ? (
                                    <p className="mt-4">You have added <strong>{packageName}</strong> to your cart.</p>
                                ) : (
                                    <p className="mt-4">Your cart is empty.</p>
                                )}
                            </div>

                            <div className="grid grid-cols-3">
                                <div className="flex bg-[#eafbf7] gap-2 p-3 rounded-2xl flex-row font-semibold items-start text-sm ">
                                    <div className=""><img src="/images/svg/tick-circle.svg" className='w-5 object-contain mt-1' alt="" /></div>
                                    <div className="text-xs">
                                        <span className='text-sm font-semibold underline cursor-pointer'> Free Cancellation </span> up to 24 hours before the experience start (Location time)
                                    </div>
                                </div>
                                <div className="flex bg-[#fbf5ea] gap-2 p-3 rounded-2xl flex-row font-semibold items-start text-sm ">
                                    <div className=""><img src="/images/svg/fire-colour.svg" className='w-5 object-contain mt-1' alt="" /></div>
                                    <div className="text-xs">
                                        <span className='text-xs font-semibold '> Don't miss out! </span> <br />This is usually booked 41 days in advance.
                                    </div>
                                </div>
                            </div>
                            <div className=""></div>


                        </div>

                        {/* Sticky Payment Section */}
                        <div className="md:col-span-5 lg:col-span-4">
                            <div className="sticky top-20">
                                <div className="flex flex-col gap-3">
                                    <div className='xl:col-span-4 lg:col-span-5 '>
                                        <div className="h-full box-shadow-g  rounded-2xl p-6 flex flex-col gap-2 justify-evenly">
                                            <div>
                                                <span className='text-lg font-semibold'>2500</span>/night
                                            </div>
                                            <div className="text-sm font-medium flex flex-col gap-2">
                                                <div className="flex justify-between">
                                                    <div className="">Tour Option</div>
                                                    <div className="">IMG Entry tickets</div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="">Date</div>
                                                    <div className="">8/3/2025</div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="">Airbnb service fee</div>
                                                    <div className="">₹8,894</div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="">Transfer Type</div>
                                                    <div className="">Without Transfers</div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="pr-20 text-nowrap">Transfer Timings</div>
                                                    <div className="tooltip" data-tip="Park Timings: Sunday to Friday - 12:00 PM To 10:00 PM Saturday - 12:00 PM To 11:00 PM">
                                                        <button className=" truncate">Park Timing to Friday..</button>
                                                    </div>

                                                </div>


                                                <div className="flex text-red-600 justify-between">
                                                    <div className="">Last Date to Cancel:</div>
                                                    <div className="">Non Refundable</div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="">Availability</div>
                                                    <div className="">Available</div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="">Amount Incl. VAT:</div>
                                                    <div className="">AED 225.00</div>
                                                </div>
                                                <hr />
                                                <div className="flex flex-flex gap-2 justify-between">
                                                    <input type="text " className="border py-2 rounded-lg px-3 flex-1 font-medium" placeholder="Enter Coupon Code %" />
                                                    <button className="btn text-xs rounded-lg">Apply</button>
                                                </div>

                                            </div>
                                            <hr />
                                            <div className="flex flex-row font-bold text-sm justify-between">
                                                <div className="">Total before taxes</div>
                                                <div className="">₹71,890</div>
                                            </div>
                                            <hr />
                                            <div className="flex flex-col gap-2">
                                                <button
                                                    className="btn rounded-full bg-blue-700 h-12 hover:bg-blue-600 text-white py-2.5 btn-sm w-full text-sm flex justify-center items-center leading-normal"

                                                >
                                                    Pay now
                                                </button>

                                                <div className="text-xs text-center">
                                                    You won't be charged yet
                                                </div>
                                            </div>



                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* Mobile Footer for Payment (Include it here so it gets the function) */}
            <SmFooterPayment />

            {/* Add Footer */}
            <Footer />
        </>
    );
};

export default AddToCard;
