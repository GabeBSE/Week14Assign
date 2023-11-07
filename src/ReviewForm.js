import React, { Component } from 'react';

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userReview: '', // Store user's review
    };
  }

  handleInputChange = (e) => {
    this.setState({ userReview: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { userReview } = this.state;
    const { onReviewSubmit } = this.props;

    // Call a function to handle the submission of the user's review
    onReviewSubmit(userReview);

    // Clear the form input
    this.setState({ userReview: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <textarea
        className="form-control"
          placeholder="Write your review..."
          value={this.state.userReview}
          onChange={this.handleInputChange}
        />
        </div>
        <button type="submit">Submit Review</button> 
      </form>
    );
  }
}

export default ReviewForm;
