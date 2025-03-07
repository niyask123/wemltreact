import React, { useState, useMemo } from 'react';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { priceAndOffersTableData } from '../../data/PackagesData';
import PackageMoreInforModal from '../modal/package/PackageMoreInforModal';
import PackageSelectTimeSlot from '../modal/package/PackageSelectTimeSlot';
import { BaggageClaim } from 'lucide-react';

const PriceAndOffers = () => {
    const [options, setOptions] = useState(priceAndOffersTableData);

    // Handle selection change for dropdowns and input fields
    const handleSelectionChange = (e, field, id) => {
        const updatedOptions = options.map(option =>
            option.id === id ? { ...option, [field]: e.target.value } : option
        );
        setOptions(updatedOptions);
    };

    // Handle checkbox selection
    const handleCheckboxChange = (id) => {
        setOptions(prevOptions =>
            prevOptions.map(option =>
                option.id === id ? { ...option, selected: !option.selected } : option
            )
        );
    };

    const columns = useMemo(() => [
        {
            header: 'Tour Option',
            accessorKey: 'tourName',
            cell: ({ row }) => (
                <div className="flex items-center gap-3 justify-between pl-4 w-fit">
                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            checked={row.original.selected}
                            onChange={() => handleCheckboxChange(row.original.id)}
                            className="cursor-pointer checkbox-md checkbox"
                        />
                        <div className="flex flex-col gap-0 justify-start items-start text-start w-40">
                            <span>{row.original.tourName}</span>
                            <span className={row.original.fundStatus === "Refundable" ? "text-green-500" : "text-red-500"}>{row.original.fundStatus}</span>
                        </div>
                        <div className="flex 2xl:flex-row gap-1  lg:w- lg:flex-col">
                            {/* <div className="btn min-h-7 max-h-7 2xl:mr-2 border-[#f1f1f1] text-gray-500 text-[11px] text-nowrap">{row.original.timeSlot}</div> */}
                            <PackageSelectTimeSlot />
                            <PackageMoreInforModal />
                        </div>
                    </div>

                </div>

            )
        },
        {
            header: 'Transfer Option',
            accessorKey: 'transfer',
            cell: ({ row }) => (
                <select
                    value={row.original.transfer}
                    onChange={(e) => handleSelectionChange(e, 'transfer', row.original.id)}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-[10rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="Without Transfer">Without Transfer</option>
                    <option value="Private Transfer">Private Transfer</option>
                </select>
            )
        },
        {
            header: 'Tour Date',
            accessorKey: 'date',
            cell: ({ row }) => (
                <input
                    type="date"
                    value={row.original.date}
                    onChange={(e) => handleSelectionChange(e, 'date', row.original.id)}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            )
        },
        {
            header: 'Adult',
            accessorKey: 'adult',
            cell: ({ row }) => (
                <select
                    value={row.original.adult}
                    onChange={(e) => handleSelectionChange(e, 'adult', row.original.id)}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-[5rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {[...Array(5).keys()].map((num) => (
                        <option key={num} value={num}>{num}</option>
                    ))}
                </select>
            )
        },
        {
            header: 'Child',
            accessorKey: 'child',
            cell: ({ row }) => (
                <select
                    value={row.original.child}
                    onChange={(e) => handleSelectionChange(e, 'child', row.original.id)}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-[5rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {[...Array(5).keys()].map((num) => (
                        <option key={num} value={num}>{num}</option>
                    ))}
                </select>
            )
        },
        {
            header: 'Infant',
            accessorKey: 'infant',
            cell: ({ row }) => (
                <select
                    value={row.original.infant}
                    onChange={(e) => handleSelectionChange(e, 'infant', row.original.id)}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-[5rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {[...Array(5).keys()].map((num) => (
                        <option key={num} value={num}>{num}</option>
                    ))}
                </select>
            )
        },
        {
            header: 'Total Amount',
            accessorKey: 'totalAmount',
            cell: ({ row }) => `$${row.original.totalAmount}`
        }
    ], [options]);

    const table = useReactTable({
        data: options,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="overflow-x-auto box-shadow-g mt-6 rounded-2xl">
            <table className="table table-xs w-full">
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(column => (
                                <th key={column.id} className="text-center text-xs font-semibold !pr-3">
                                    {flexRender(column.column.columnDef.header, column.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id} className={row.original.selected ? "bg-gray-100/50" : ""}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className="text-center text-xs !w-fit">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex flex-row justify-end my-3 px-6 items-center w-full">
                <button className="btn rounded-full w-60  bg-blue-700 h-12 hover:bg-blue-600 text-white py-2.5 btn-sm  text-sm flex justify-center items-center leading-normal gap-3"><BaggageClaim className='size-5' /> Add to cart</button>
            </div>
        </div>
    );
};

export default PriceAndOffers;
