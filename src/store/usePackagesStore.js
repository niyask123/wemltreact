import { create } from "zustand";
import { packagesMenuDatas, sectonTowPlaces } from "../data/PackagesData";

const usePackageStore = create((set) => ({
    activePackage: packagesMenuDatas[0].nameId,
    places: sectonTowPlaces[packagesMenuDatas[0].nameId],

  setActivePackage: (packageName) =>
    set(() => ({
      activePackage: packageName.toLowerCase(),
      places: sectonTowPlaces[packageName.toLowerCase()],
    })),
}));

export default usePackageStore;
