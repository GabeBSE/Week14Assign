import React, { Component } from 'react';
import Movie from './Movie';


class MovieList extends Component {
  constructor() {
    super();
    // Initialize your movie data here as an array
    this.state = {
      movies: [
        { id: 1, title: 'Captain America: Civil War', rating: 4.5, reviews: [], image: 'Captain America Civil War.jpg' },
        { id: 2, title: 'Doctor Strange', rating: 3.8, reviews: [], image: 'Doctor Strange.jpg' },
        { id: 3, title: 'Guardians of the Galaxy Vol.2', rating: 3.8, reviews: [], image: 'GOTG V2.jpg' },
        { id: 4, title: 'Spider-Man: Homecoming', rating: 3.8, reviews: [], image: 'Spider-Man Homecoming.jpg' },
        { id: 5, title: 'Thor: Ragnarok', rating: 3.8, reviews: [], image: 'Thor Ragnarok.jpg' },
        { id: 6, title: 'Black Panther', rating: 3.8, reviews: [], image: 'Black Panther.jpg' },
        { id: 7, title: 'Avengers: Infinity War', rating: 3.8, reviews: [], image: 'Avengers Infinity War.jpg'},
        { id: 8, title: 'Ant-Man and the Wasp', rating: 3.8, reviews: [], image: 'Ant Man and the Wasp.jpg' },
        { id: 9, title: 'Captain Marvel', rating: 3.8, reviews: [], image: 'Captain Marvel.jpg' },
        { id: 10, title: 'Avengers: End Game', rating: 3.8, reviews: [], image: 'Avengers End Game.jpg' },
        { id: 11, title: 'Spider-Man: Far From Home', rating: 3.8, reviews: [], image: 'Spider Man Far From Home.jpg' },
        { id: 12, title: 'Ant-Man', rating: 3.8, reviews: [], image: 'Ant-Man.jpg' },
        // Add more movie objects here
      ]
    };
  }

  // You can add methods for handling data and interactions here COMPLETED
  // Define the onReviewSubmit function
   onReviewSubmit = (movieId, review) =>  {
    // Create a copy of the movies array
    const updatedMovies = [...this.state.movies];

    // Find the movie by its id
    const movie = updatedMovies.find((m) => m.id === movieId);

    if (movie) {
      // Update the reviews for the movie
      movie.reviews.push(review);
      // Update the state to trigger a re-render
      this.setState({ movies: updatedMovies });
    }
  };

  render() {
    return (
      <div> {/* Render the main page of the Movie-Rate application */}
        <h1 className="movie-list-title">Movie-Rate</h1>
        <div className="row">
          {this.state.movies.map((movie) => (
            <div className="col-md-4" key={movie.id}>
              <Movie movie={movie} onReviewSubmit={this.onReviewSubmit} /> {/* Render individual movie cards with review functionality */}
            </div>
           
          ))}
        </div>
      </div>
    );
  }
}

export default MovieList;  
