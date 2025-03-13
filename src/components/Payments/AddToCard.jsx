import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../headerFooter/footer/Footer";
import SmFooterPayment from "./SmFooterPayment";
import { travelPackages } from "../../data/PackagesData";



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
                        <div className="md:col-span-7 md:p-3 px-4 md:px-6 rounded-3xl lg:col-span-8 box-shadow-g flex flex-col gap-1">
                            {/* <div className="">
                                <h2 className="text-2xl font-bold">Cart</h2>
                                {packageName ? (
                                    <p className="mt-4">{packageName}</p>
                                ) : (
                                    <p className="mt-4">Your cart is empty.</p>
                                )}
                            </div> */}


                            <div className="p-4 px-0 grid grid-cols-12 gap-3 pb-8 border-b">
                                <div className="col-span-12 text-start font-semibold">Lead Passenger Details</div>
                                <div className="flex  flex-flex gap-2 col-span-12 lg:col-span-6 justify-between">
                                    <input type=" input validator" className="border border-black/50 py-2 text-sm rounded-lg text-black px-3 w-full flex-1 font-normal" placeholder="Full Name" />
                                </div>
                                <div className="flex flex-flex gap-2 col-span-12 lg:col-span-6 justify-between">
                                    <input type="text " className="border border-black/50 py-2 text-sm rounded-lg text-black px-3 w-full flex-1 font-normal" placeholder="Last Name" />
                                </div>
                                <div className="flex flex-flex gap-2 col-span-12 lg:col-span-4 justify-between">
                                    <input type="text " className="border border-black/50 py-2 text-sm rounded-lg text-black px-3 w-full flex-1 font-normal" placeholder="Email Id" />
                                </div>
                                <div className="flex flex-flex gap-2 col-span-12 lg:col-span-3 justify-between">
                                    <select className="select input input-bordered border-black/50 focus:ring-0 rounded-lg focus:outline-none hover:ring-0 w-full  text-xs">
                                        <option disabled selected value="" className="">Natioality</option>
                                        <option value="+44">UK (+44)</option>
                                    </select>
                                </div>
                                <div className="flex flex-flex col-span-12  lg:col-span-5 justify-between">
                                    <select className="select input rounded-r-none rounded-lg border-r-0 border-black/50 input-bordered focus:ring-0 focus:outline-none hover:ring-0 w-full md:w-36 text-xs">
                                        <option disabled selected value="" className="">ISD Code</option>
                                        <option value="+44">UK (+44)</option>
                                    </select>
                                    <input
                                        type="number"
                                        placeholder="Enter Number"
                                        className="input input-bordered rounded-lg w-full focus:ring-0 border-black/50 rounded-l-none  focus:outline-none hover:ring-0"
                                    />
                                </div>
                                <div className="flex flex-flex col-span-12">

                                    <textarea className="border border-black/50 py-2 text-sm rounded-lg text-black px-3 w-full flex-1 font-normal textarea-bordered " placeholder="Special Request"></textarea>
                                </div>
                                <div className="flex ">
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <input type="checkbox" defaultChecked className="checkbox  checkbox-sm" />
                                            <span className="label-text text-sm font-medium">Update booking information in <br className="md:hidden" /> your account</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 px-0 grid lg:grid-cols-12 gap-3 pb-8 border-b">
                                <div className="flex flex-col col-span-6 gap-2">
                                    <div className=" text-start font-semibold text-sm ">Exotic Bird Show <span className="text-xs">- Without Transfers</span> </div>
                                    <div className="flex  flex-flex gap-2 col-span-6 justify-between">
                                        <input type=" input validator" className="border border-black/50 py-2 text-sm rounded-lg text-black px-3 w-full flex-1 font-normal" placeholder="Remark" />
                                    </div>
                                </div>
                                <div className="flex flex-col col-span-6 gap-2">
                                    <div className=" text-start font-semibold text-sm ">Exotic Bird Show <span className="text-xs">- Without Transfers</span> </div>
                                    <div className="flex  flex-flex gap-2 col-span-6 justify-between">
                                        <input type=" input validator" className="border border-black/50 py-2 text-sm rounded-lg text-black px-3 w-full flex-1 font-normal" placeholder="Remark" />
                                    </div>
                                </div>
                                <div className="flex flex-col col-span-6 gap-2">
                                    <div className=" text-start font-semibold text-sm ">Exotic Bird Show <span className="text-xs">- Without Transfers</span> </div>
                                    <div className="flex  flex-flex gap-2 col-span-6 justify-between">
                                        <input type=" input validator" className="border border-black/50 py-2 text-sm rounded-lg text-black px-3 w-full flex-1 font-normal" placeholder="Remark" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 px-0 gap-3 grid lg:grid-cols-12  ">
                                <div className="col-span-12 text-start font-semibold">Choose a Payment Method</div>
                                <div className="flex border p-3 rounded-2xl flex-col col-span-12 lg:col-span-6 gap-2 border-black/50">
                                    <div className="flex  flex-col gap-2 col-span-6 justify-between">
                                        <div className="flex gap-3">
                                            <div className="form-control">
                                                <label className="label cursor-pointer">
                                                    <input type="radio" name="radio-1" className="radio radio-sm border-black/70" />
                                                    <span className="label-text text-sm font-medium " >Credit Card / Debit Card</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex border p-3 rounded-2xl flex-col col-span-12 lg:col-span-6 gap-2 border-black/50">
                                    <div className="flex  flex-col gap-2 col-span-6 justify-between">
                                        <div className="flex gap-3">
                                            <div className="form-control">
                                                <label className="label cursor-pointer">
                                                    <input type="radio" name="radio-1" className="radio radio-sm border-black/70" />
                                                    <span className="label-text text-sm font-medium " >Pointspay</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex col-span-12">
                                    <div className="form-control">
                                        <label className="label cursor-pointer items-start">
                                            <input type="checkbox" defaultChecked className="checkbox  checkbox-sm" />
                                            <div className="flex flex-col">
                                                <span className="label-text text-sm font-medium flex flex-wrap">By Clicking Pay Now You agree  that <br className="md:hidden" /> you  have <br className="lg:hidden" /> read and understood our </span>
                                                <span className="label-text text-xs font-medium text-red-600">Terms & Conditions.</span>
                                            </div>
                                        </label>
                                        <button className="btn mt-3 md:hidden rounded-full bg-blue-700 h-12 hover:bg-blue-600 text-white py-2.5 w-full text-sm flex justify-center items-center">
                                            Pay now
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>


                        {/* Sticky Payment Section */}
                        <div className="md:col-span-5 lg:col-span-4">
                            <div className="sticky top-20">
                                <div className="flex flex-col rounded-3xl box-shadow-g">
                                    {travelPackages.map((item, index) => (
                                        <div key={index} className="collapse px-3 collapse-arrow border-base-300 overflow-visible">
                                            <input type="radio" name="my-accordion-2" defaultChecked={index === 0} />
                                            <div className="collapse-title font-semibold truncate">{item.title}</div>
                                            <div className="collapse-content text-sm">
                                                <div className="flex flex-col gap-3">
                                                    <div className="w-full lg:w-auto">
                                                        <div className="h-full rounded-2xl flex flex-col gap-2 justify-evenly">
                                                            <div>
                                                                <span className="text-lg font-semibold">{item.price}</span>/night
                                                            </div>
                                                            <div className="text-sm font-medium flex flex-col gap-2">
                                                                {item.details.map((detail, idx) => (
                                                                    <div key={idx} className="flex justify-between">
                                                                        <div className="whitespace-nowrap">{detail.label}</div>
                                                                        <div className="text-right">{detail.value}</div>
                                                                    </div>
                                                                ))}

                                                                <div className="flex justify-between text-red-600">
                                                                    <div>Last Date to Cancel:</div>
                                                                    <div>{item.cancelPolicy}</div>
                                                                </div>

                                                                <div className="flex flex-wrap gap-2 justify-between">
                                                                    <input
                                                                        type="text"
                                                                        className="border py-2 rounded-lg px-3 flex-1 font-normal text-sm w-full md:w-auto"
                                                                        placeholder="Enter Coupon Code %"
                                                                    />
                                                                    <button className="btn text-xs rounded-lg bg-blue-700 text-white px-4 py-2 hover:bg-blue-600">
                                                                        Apply
                                                                    </button>
                                                                </div>
                                                            </div>

                                                            <hr />

                                                            <div className="flex flex-row font-bold text-sm justify-between">
                                                                <div>Total</div>
                                                                <div>{item.details.find((d) => d.label === "Total")?.value}</div>
                                                            </div>

                                                            <hr />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    <hr />

                                    {/* Final Amount & Pay Now */}
                                    <div className="flex p-3 px-6 flex-col gap-2">
                                        <div className="flex font-medium justify-between">
                                            <div>Final Amount</div>
                                            <div>₹8,894</div>
                                        </div>

                                        <button className="btn rounded-full bg-blue-700 h-12 hover:bg-blue-600 text-white py-2.5 w-full text-sm flex justify-center items-center">
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
