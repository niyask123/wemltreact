import React, { useState } from 'react'
import { mobCategories } from '../../../../data/dats';

const MdHeader = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    return (
        <div>
            <div className="flex flex-row gap-5 overflow-x-auto scrollbar-hide pb-2">
                {mobCategories.map((category) => (
                    <div
                        key={category.id}
                        className={`flex flex-col gap-2 justify-between items-center cursor-pointer ${activeCategory === category.id ? "border-b-2 border-[#3C3C3C] scale-105" : ""
                            }`}
                        onClick={() => setActiveCategory(category.id)}
                    >
                        <div className="w-[24px] h-[24px]">
                            <img src={category.img} alt={category.name} />
                        </div>
                        <div className="text-xs text-nowrap pb-1">{category.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MdHeader
