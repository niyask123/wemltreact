import React from 'react';
import { bookingDetails, transferTimings } from '../../../data/PackagesData';



const PackageMoreInfoModal = ({ tourName }) => {
    return (
        <>
            <button
                className="btn min-h-7 max-h-7 border-[#f1f1f1] text-gray-500 text-[11px]"
                onClick={() => document.getElementById('priceAndOffersMoreInfoModal').showModal()}
            >
                More info
            </button>

            <dialog id="priceAndOffersMoreInfoModal" className="modal">
                <div className="modal-box max-w-2xl">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">{tourName}</h3>
                    <h3 className="font-semibold text-lg mb-3">
                        Mountain Adventure</h3>

                    <div className="flex flex-col gap-3 justify-start items-start">
                        <div className="grid md:grid-cols-2 gap-3 w-full">
                            {bookingDetails.slice(0, 2).map((item, index) => (
                                <div key={index} className="flex flex-col gap-0.5 items-start">
                                    <div className="font-bold">{item.title}</div>
                                    <div className="font-semibold text-xs">{item.subtitle}</div>
                                    <div className="text-xs">{item.description}</div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-2 items-center w-full py-3">
                            <div className="font-bold text-center text-base">Timings & Duration</div>
                            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 w-full">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className='!pl-3'>Transfer Type</th>
                                            <th className='!px-3 md:!px-0'>Pickup Timings</th>
                                            <th className='!px-3 md:!px-0'>Duration Approx</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {transferTimings.map((transfer, index) => (
                                            <tr key={index}>
                                                <td className='!pl-3'>{transfer.type}</td>
                                                <td>{transfer.timing}</td>
                                                <td>{transfer.duration}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-3 w-full">
                            {bookingDetails.map((item, index) => (
                                <div key={index} className="flex flex-col items-start">
                                    <div className="font-bold">{item.title}</div>
                                    <div className="font-semibold text-xs">{item.subtitle}</div>
                                    <div className="text-xs">{item.description}</div>
                                </div>
                            ))}
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

export default PackageMoreInfoModal;
