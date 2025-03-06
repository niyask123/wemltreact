import React, { useState } from 'react';

const PriceAndOffers = () => {
    // Initial state for multiple rows
    const [options, setOptions] = useState([
        {
            id: 1,
            tourName: 'Mountain Adventure',
            transfer: 'Without Transfer',
            adult: '0',
            child: '0',
            infant: '0',
            date: '10-10-2025',
            totalAmount: 300
        },
        {
            id: 2,
            tourName: 'Dolphin & Seal Show Regular Tickets',
            transfer: 'Without Transfer',
            adult: '0',
            child: '0',
            infant: '0',
            date: '10-10-2025',
            totalAmount: 150
        },
        {
            id: 3,
            tourName: 'Dolphin & Seal Show VIP Tickets',
            transfer: 'Without Transfer',
            adult: '0',
            child: '0',
            infant: '0',
            date: '10-10-2025',
            totalAmount: 205
        },
        {
            id: 4,
            tourName: 'Desert Safari Adventure',
            transfer: 'Private transfer',
            adult: '0',
            child: '0',
            infant: '0',
            date: '10-10-2025',
            totalAmount: 700
        },
        // Add more tour options here as needed
    ]);

    // Handler to update state when a selection changes for a particular option row
    const handleSelectionChange = (e, field, id) => {
        const updatedOptions = options.map(option => {
            if (option.id === id) {
                return { ...option, [field]: e.target.value };
            }
            return option;
        });
        setOptions(updatedOptions);
    };

    return (
        <div>
            <div className="overflow-x-auto box-shadow-g mt-6 rounded-2xl">
                <table className="table">
                    {/* Table header */}
                    <thead>
                        <tr className='text-xs'>
                            <th>Tour Option</th>
                            <th>Transfer Option</th>
                            <th>Tour Date</th>
                            <th>Adult</th>
                            <th>Child</th>
                            <th>Infant</th>
                            <th>Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map through the options and create rows for each item */}
                        {options.map((option) => (
                            <tr key={option.id}>
                                <td className='flex gap-2 items-center'>
                                    <input type="checkbox" className="checkbox" />
                                    <div className="flex flex-col gap-0 text-xs">
                                        <div className='font-medium text-nowrap'>{option.tourName}</div>
                                        <div className='text-[11px] font-medium text-nowrap'>Select Time Slot</div>
                                        <div className='text-[#ef1b27] text-[11px] text-nowrap'>Not refundable</div>
                                    </div>
                                </td>

                                <td>
                                    <select
                                        value={option.transfer}
                                        onChange={(e) => handleSelectionChange(e, 'transfer', option.id)}
                                        className="border border-gray-300 rounded-lg px-3 py-2 w-[12rem] max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="Without Transfer" className="text-gray-400 text-nowrap text-xs">Without Transfer</option>
                                        <option value="Private transfer text-nowrap">Private transfer</option>
                                    </select>
                                </td>

                                <td>
                                    <input
                                        type="date"
                                        value={option.date}
                                        onChange={(e) => handleSelectionChange(e, 'date', option.id)}
                                        className="border border-gray-300 rounded-lg px-3 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </td>

                                <td>
                                    <select
                                        value={option.adult}
                                        onChange={(e) => handleSelectionChange(e, 'adult', option.id)}
                                        className="border border-gray-300 rounded-lg px-3 py-2 md:w-full  max-w-xs w-[5rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="0" className="text-gray-400">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </td>

                                <td>
                                    <select
                                        value={option.child}
                                        onChange={(e) => handleSelectionChange(e, 'child', option.id)}
                                        className="border border-gray-300 rounded-lg px-3 py-2 w-[5rem] md:w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="0" className="text-gray-400">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </td>

                                <td>
                                    <select
                                        value={option.infant}
                                        onChange={(e) => handleSelectionChange(e, 'infant', option.id)}
                                        className="border border-gray-300 rounded-lg px-3 py-2 w-[5rem] md:w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="0" className="text-gray-400">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </td>

                                <td>
                                    {/* Total amount calculation (could be dynamic based on selections) */}
                                    ${option.totalAmount}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PriceAndOffers;
