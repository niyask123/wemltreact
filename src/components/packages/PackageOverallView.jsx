import React from 'react';
import { OverallPackageSections } from '../../data/OverallPackagesSections';
// import { OverallPackageSections } from '../../data/PackagesData';

const PackageOverallView = () => {
    return (
        <div className="flex flex-col gap-2">
            {OverallPackageSections.map((section, index) => (
                <div key={index} className="collapse collapse-arrow bg-base-200/50">
                    <input type="radio" name="my-accordion-2" defaultChecked={index === 0} />
                    <div className="collapse-title text-base font-medium">{section.title}</div>
                    <div className="collapse-content">{section.content}</div>
                </div>
            ))}
        </div>
    );
};

export default PackageOverallView;
