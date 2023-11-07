import React, { Component } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';

class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {   // Initialize the state within the Movie component
      userReview: '',  // Initialize user's review text
    };
  }

  // Handle the submission of a review
  handleInputChange = (e) => {
    this.setState({ userReview: e.target.value });
  };

  onReviewSubmit = () => {
    const { movie, onReviewSubmit } = this.props;
    const { userReview } = this.state;

    if (userReview) {
      // Pass the review text to the parent component for submission
      onReviewSubmit(movie.id, userReview);

      // Clear the review input field after submission
      this.setState({ userReview: '' });
    }
  };

  render() {  //Here is where the images, title, rating, a list of reviews,
              //a review input form, with button are displayed. 
    const { movie } = this.props;
              //These components receive movie data as props and show it with a user review input form.
    return (
      <div className="movie">
        <img src={require(`./Images/${movie.image}`)} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>Rating: {movie.rating}</p>
        <Stars rating={movie.rating} />

        <div className="review-list">
          <h2>Reviews</h2>
          <ReviewList reviews={movie.reviews} />
        </div>

        <div className="form-group">
          <textarea
            className="form-control"
            rows="1"
            cols="50"
            placeholder="Write your review..."
            value={this.state.userReview}
            onChange={this.handleInputChange}
          />
          <button onClick={this.onReviewSubmit} className="btn btn-primary">
            Submit Review {/*onReviewSubmit function is called when the Submit
                          Review button is clicked to handle review submittions */}
          </button>
        </div>
      </div>
    );
  }
}

export default Movie;
