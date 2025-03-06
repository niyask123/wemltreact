import React, { useState } from "react";
// import "daisyui";
import { reviewsData } from "../../data/PackagesData";

const PackageReviews = () => {
  const [selectedReview, setSelectedReview] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const showMore = () => setVisibleCount(reviewsData.length);
  const showLess = () => setVisibleCount(6);

  return (
    <div className="px-0 mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviewsData.slice(0, visibleCount).map((review) => (
          <div
            key={review.id}
            className="flex zoom-in p-4 gap-3 px-4 rounded-2xl  box-shadow-g cursor-pointer"
            onClick={() => setSelectedReview(review)}
          >
            <div className="flex flex-col items-center w-[8rem]">
              <img
                src={review.img}
                className="rounded-full w-14 h-14 object-cover"
                alt={review.name}
              />
              <div className="text-sm font-medium">{review.name}</div>
              <div className="text-xs font-medium">{review.date}</div>
            </div>
            <div className="text-xs font-semibold flex flex-col gap-2">
              {review.review.slice(0, 80)}...
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, index) => (
                  <img
                    key={index}
                    className="object-contain w-4"
                    alt="star"
                    src="/images/svg/star.svg"
                  />
                ))}
              </div>
              <div className="p-1 bg-[#eafbf7] w-fit rounded-lg text-xs flex justify-center items-center px-6">
                {review.reviewStatus}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Buttons */}
      <div className="flex justify-center mt-4">
        {visibleCount < reviewsData.length ? (
          <button className="px-4 py-2 rounded-2xl font-semibold bg-[#242323ee] text-white " onClick={showMore}>See More</button>
        ) : (
          <button className="px-4 py-2 rounded-2xl font-semibold bg-[#242323ee] text-white " onClick={showLess}>See Less</button>
        )}
      </div>

      {/* DaisyUI Modal */}
      {selectedReview && (
        <dialog id="review-modal" className="modal modal-open">
          <div className="modal-box">
            <button
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={() => setSelectedReview(null)}
            >
              ✕
            </button>
            <div className="flex flex-col items-center text-center">
              <img
                src={selectedReview.img}
                className="rounded-full w-20 h-20 object-cover mb-3"
                alt={selectedReview.name}
              />
              <h2 className="text-lg font-bold">{selectedReview.name}</h2>
              <p className="text-sm text-gray-500">{selectedReview.date}</p>
            </div>
            <p className="mt-4 text-sm">{selectedReview.review}</p>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default PackageReviews;