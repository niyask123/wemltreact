
import { create } from "zustand";
import { packagesData } from "../data/data";

const packageStore = create((set) => ({
    activePackage: packagesData[0]?.category || 'natural',
    places: packagesData[0]?.tours || [],

    setActivePackage: (packageName) => {
        const selectedPackage = packagesData.find(pkg => pkg.category === packageName);
        set(() => ({
            activePackage: selectedPackage ? selectedPackage.category : null,
            places: selectedPackage ? selectedPackage.tours : [],
        }));
    }
}));

export default packageStore;
