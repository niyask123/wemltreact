import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../headerFooter/footer/Footer";
import SmFooterPayment from "./SmFooterPayment";
import { finalAmount, tourPackages } from "../../data/PackagesData";



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
                        <div className="md:col-span-7 p-3 px-6 rounded-3xl lg:col-span-8 box-shadow-g flex flex-col gap-1">
                            {/* <div className="">
                                <h2 className="text-2xl font-bold">Cart</h2>
                                {packageName ? (
                                    <p className="mt-4">{packageName}</p>
                                ) : (
                                    <p className="mt-4">Your cart is empty.</p>
                                )}
                            </div> */}


                            <div className="p-4 px-0 grid grid-cols-12 gap-3">
                                <div className="col-span-12 text-center font-semibold">Lead Passenger Details</div>
                                <div className="flex  flex-flex gap-2 col-span-6 justify-between">
                                    <input type=" input validator" className="border py-2 text-sm rounded px-3 w-full flex-1 font-normal" placeholder="Full Name" />
                                </div>
                                <div className="flex flex-flex gap-2 col-span-6 justify-between">
                                    <input type="text " className="border py-2 text-sm rounded px-3 w-full flex-1 font-normal" placeholder="Last Name" />
                                </div>
                                <div className="flex flex-flex gap-2 col-span-4 justify-between">
                                    <input type="text " className="border py-2 text-sm rounded px-3 w-full flex-1 font-normal" placeholder="Email Id" />
                                </div>
                                <div className="flex flex-flex gap-2 col-span-3 justify-between">
                                    <select className="select input input-bordered focus:ring-0 focus:outline-none hover:ring-0 w-full  text-xs">
                                        <option disabled selected value="" className="">Natioality</option>
                                        <option value="+44">UK (+44)</option>
                                    </select>
                                </div>
                                <div className="flex flex-flex  col-span-5 justify-between">

                                    <select className="select input rounded-r-none input-bordered focus:ring-0 focus:outline-none hover:ring-0 w-full md:w-36 text-xs">
                                        <option disabled selected value="" className="">ISD Code</option>
                                        <option value="+44">UK (+44)</option>
                                    </select>
                                    <input
                                        type="number"
                                        placeholder="Enter Number"
                                        className="input input-bordered w-full focus:ring-0 rounded-l-none  focus:outline-none hover:ring-0"
                                    />
                                </div>
                                <div className="flex flex-flex col-span-12">

                                    <textarea className="border py-2 text-sm rounded px-3 w-full flex-1 font-normal textarea-bordered " placeholder="Special Request"></textarea>
                                </div>
                                <div className="flex ">
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <input type="checkbox" defaultChecked className="checkbox  checkbox-sm" />
                                            <span className="label-text text-sm font-medium">Update booking information in your account</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>


                        {/* Sticky Payment Section */}
                        <div className="md:col-span-5 lg:col-span-4">
                            <div className="sticky top-20">

                                <div className="flex flex-col rounded-3xl box-shadow-g">
                                    {tourPackages.map((tour, index) => (
                                        <div key={tour.id} className="collapse px-3 collapse-arrow border-base-300 overflow-visible">
                                            <input type="radio" name="my-accordion-2" defaultChecked={index === 0} />
                                            <div className="collapse-title font-semibold truncate">{tour.title}</div>
                                            <div className="collapse-content text-sm">
                                                <div className="flex flex-col gap-3">
                                                    <div className="w-full md:w-auto ">
                                                        <div className="h-full rounded-2xl flex flex-col gap-2 justify-evenly">
                                                            <div>
                                                                <span className="text-lg font-semibold">{tour.pricePerNight}</span>/night
                                                            </div>
                                                            <div className="text-sm font-medium flex flex-col gap-2">
                                                                <div className="flex justify-between">
                                                                    <div>Tour Option</div>
                                                                    <div>{tour.tourOption}</div>
                                                                </div>
                                                                <div className="flex justify-between">
                                                                    <div>Date</div>
                                                                    <div>{tour.date}</div>
                                                                </div>
                                                                <div className="flex justify-between">
                                                                    <div>Airbnb service fee</div>
                                                                    <div>{tour.serviceFee}</div>
                                                                </div>
                                                                <div className="flex justify-between">
                                                                    <div>Transfer Type</div>
                                                                    <div>{tour.transferType}</div>
                                                                </div>
                                                                <div className="flex justify-between">
                                                                    <div className="pr-20 text-nowrap">Transfer Timings</div>
                                                                    <div className="tooltip" data-tip={tour.transferTimings}>
                                                                        <button className="truncate">Park Timing to Friday..</button>
                                                                    </div>
                                                                </div>
                                                                <div className="flex text-red-600 justify-between">
                                                                    <div>Last Date to Cancel:</div>
                                                                    <div>{tour.lastCancellationDate}</div>
                                                                </div>
                                                                <div className="flex justify-between">
                                                                    <div>Availability</div>
                                                                    <div>{tour.availability}</div>
                                                                </div>
                                                                <div className="flex justify-between">
                                                                    <div>Amount Incl. VAT:</div>
                                                                    <div>{tour.amountInclVAT}</div>
                                                                </div>
                                                                <div className="flex gap-2 justify-between">
                                                                    <input type="text" className="border py-2 rounded-lg px-3 flex-1 font-normal" placeholder="Enter Coupon Code %" />
                                                                    <button className="btn text-xs rounded-lg">Apply</button>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            <div className="flex flex-row font-bold text-sm justify-between">
                                                                <div>Total</div>
                                                                <div>{tour.total}</div>
                                                            </div>
                                                            <hr />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    <hr />
                                    <div className="flex p-3 px-6 flex-col gap-2">
                                        <div className="flex font-medium justify-between">
                                            <div>Final Amount</div>
                                            <div>{finalAmount}</div>
                                        </div>
                                        <button className="btn rounded-full bg-blue-700 h-12 hover:bg-blue-600 text-white py-2.5 btn-sm w-full text-sm flex justify-center items-center leading-normal">
                                            Pay now
                                        </button>
                                        <div className="text-xs text-center">You won't be charged yet</div>
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
