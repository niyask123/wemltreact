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
        // {
        //     id: 2,
        //     tourName: 'Dolphin & Seal Show Regular Tickets',
        //     transfer: 'Without Transfer',
        //     adult: '0',
        //     child: '0',
        //     infant: '0',
        //     date: '10-10-2025',
        //     totalAmount: 150
        // },
        // {
        //     id: 3,
        //     tourName: 'Dolphin & Seal Show VIP Tickets',
        //     transfer: 'Without Transfer',
        //     adult: '0',
        //     child: '0',
        //     infant: '0',
        //     date: '10-10-2025',
        //     totalAmount: 205
        // },
        // {
        //     id: 4,
        //     tourName: 'Desert Safari Adventure',
        //     transfer: 'Private transfer',
        //     adult: '0',
        //     child: '0',
        //     infant: '0',
        //     date: '10-10-2025',
        //     totalAmount: 700
        // },
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
        <div className=''>
            <div className="overflow-x-auto box-shadow-g mt-6 rounded-2xl">


                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        {/* head */}
                        <thead>
                            <tr>

                                <th className='!pl-3'>Tour Option</th>
                                <th className='text-center'>Transfer Option</th>
                                <th className='text-center'>Tour Date</th>
                                <th className='text-center'>Adult</th>
                                <th className='text-center'>Child</th>
                                <th className='text-center'>Infant</th>
                                <th className='text-center'>Total Amount</th>
                            </tr>
                        </thead>
                        <tbody>

                            {options.map((option) => (
                                <tr key={option.id}>

                                    <td className=''>
                                        <div className="flex px-2 items-center gap-2 justify-between">
                                            <div className="flex gap-3">
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                                <div className="flex items-center gap-3">

                                                    <div>
                                                        <div className="font-bold">Hart Hagerty</div>
                                                        <div className=" opacity-50">United States</div>
                                                        <div className=" opacity-50 text-[11px] text-red-600">Non Refundable</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-2 px-3 btn min-h-2 max-h-fit bg-[#eafbf7] border-none text-gray-600 rounded-3xl text-[11px] font-semibold">More Inf</div>
                                        </div>
                                    </td>
                                    <td className='text-center'>
                                        <select
                                            value={option.transfer}
                                            onChange={(e) => handleSelectionChange(e, 'transfer', option.id)}
                                            className="border border-gray-300 rounded-lg px-3 py-2 w-[10rem] max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="Without Transfer" className="text-gray-400 text-nowrap text-xs">Without Transfer</option>
                                            <option value="Private transfer text-nowrap">Private transfer</option>
                                        </select>
                                    </td>
                                    <td className='text-center'>
                                        <input
                                            type="date"
                                            value={option.date}
                                            onChange={(e) => handleSelectionChange(e, 'date', option.id)}
                                            className="border border-gray-300 rounded-lg px-3 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </td>
                                    <th className='text-center'>
                                        <select
                                            value={option.adult}
                                            onChange={(e) => handleSelectionChange(e, 'adult', option.id)}
                                            className="border border-gray-300 rounded-lg px-3 py-2 md:w-8rem   xl:max-w-xs w-[5rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="0" className="text-gray-400">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </th>
                                    <th className='text-center'>
                                        <select
                                            value={option.adult}
                                            onChange={(e) => handleSelectionChange(e, 'child', option.id)}
                                            className="border border-gray-300 rounded-lg px-3 py-2 md:w-8rem   xl:max-w-xs w-[5rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="0" className="text-gray-400">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </th>
                                    <th className='text-center'>
                                        <select
                                            value={option.adult}
                                            onChange={(e) => handleSelectionChange(e, 'infent', option.id)}
                                            className="border border-gray-300 rounded-lg px-3 py-2 md:w-8rem   xl:max-w-xs w-[5rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="0" className="text-gray-400">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </th>
                                    <th className='text-center'>
                                        ${option.totalAmount}
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>



            </div>
        </div>
    );
};

export default PriceAndOffers;
