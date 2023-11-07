import React, { Component } from 'react';

class Stars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      hoverRating: 0, // Initialize hoverRating
    };
  }

  handleRatingChange = (newRating) => {
    this.setState({ rating: newRating });
  };

  handleHoverRatingChange = (newRating) => {
    this.setState({ hoverRating: newRating });
  };

  render() {                      //This is what is showing the  rating system on the movie cards
    const { rating, hoverRating } = this.state;

    const renderStars = () => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push(
          <span
            key={i}
            className={`star ${i <= rating || i <= hoverRating ? 'filled' : ''}`}
            onMouseEnter={() => this.handleHoverRatingChange(i)} // Add hover effect
            onMouseLeave={() => this.handleHoverRatingChange(0)} // Reset hover effect
            onClick={() => this.handleRatingChange(i)}
          >
            &#9733;
          </span>
        );
      }
      return stars;
    };

    return (        
      <div className="stars">
        {renderStars()}
        <p>Rating: {rating} out of 5</p>
      </div>
    );
  }
}

export default Stars;
