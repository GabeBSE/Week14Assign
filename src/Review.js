import React from 'react';

const Review = ({ text }) => {    //this provides the text review a user leaves on a movie
  return (
    <div className="review">
      <p>{text}</p>
    </div>
  );
};

export default Review;
