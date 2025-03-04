import React, { useState, useRef, useEffect } from 'react';
import { stayList } from '../../../data/dats';
import { AiOutlineArrowLeft, AiOutlineSearch } from 'react-icons/ai';

const SearchModalSM = () => {
  const [isInputClicked, setIsInputClicked] = useState(false);
  const [showOptions, setShowOptions] = useState(true); // Added missing state
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Open the modal using ref instead of document.getElementById */}
      <label className="flex items-center gap-2 w-full border border-gray-300 p-2 rounded-lg">
        <AiOutlineSearch />
        <input
          type="text"
          className="w-full border-none focus:outline-none"
          onClick={() => {
            setIsInputClicked(true);
            document.getElementById('searchModalSM').showModal();
          }}
          placeholder="Search location..."
        />
      </label>

      <dialog id="searchModalSM" className="modal" ref={modalRef}>



        <div className="modal-box box-shadow-ab !translate-y-[3rem]  w-full scrollbar-hidden overflow-hidden rounded-b-none rounded-t-3xl box-shadow-g">

          <div className="overflow-y-auto h-screen pb-32 flex flex-col gap-3 scrollbar-hidden  transition-all duration-300">
            <div className="sticky items-center gap-2 pt-8 top-0  p-1.5 bg-white flex flex-row">
              <form method="dialog" className=" hover:cursor-pointer flex items-center">
                <button> <AiOutlineArrowLeft /></button>
              </form>

              <div className="flex  w-full">
                <input type="text" className='w-full border rounded-lg py-2.5 text-sm lt-02-b-c px-3' placeholder='Search destination' />
              </div>
            </div>
            {stayList.map((location, index) => (
              <div
                key={`${location.id}-${index}`} // Ensuring unique keys
                className="flex px-3 py-2 rounded-lg items-center flex-row justify-start gap-3 cursor-pointer hover:bg-gray-100"
              >
                <img
                  src={location.image}
                  className="object-contain bg-[#f4f4f4] rounded-lg w-14 h-14"
                  alt={location.name}
                />
                <div className="flex flex-col">
                  <div className="text-sm font-semibold text-black/80">
                    {location.name}
                  </div>
                  <div className="text-xs text-gray-500">{location.description}</div>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Close button to properly close the modal */}
        <form method="dialog" className="modal-backdrop bg-white">
          <button>Close</button>
        </form>
      </dialog>
    </div>
  );
};

export default SearchModalSM;
