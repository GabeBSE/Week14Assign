import React from 'react';
import Review from './Review';
                                  // This a container inside of a Movie that holds Review components

const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <Review key={index} text={review} />
      ))}
    </div>
  );
};

export default ReviewList;
