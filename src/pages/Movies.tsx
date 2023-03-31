import { useState, useEffect } from 'react';
import movieData from '../MovieData.json';

type Movie = {
  Category: string;
  Title: string;
  Year: string | number;
  Director: string;
  Rating: string;
};

export function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const formattedMovies = movieData.MovieData.map((movie) => ({
      ...movie,
      Year:
        typeof movie.Year === 'number' ? movie.Year : parseInt(movie.Year, 10),
    }));
    setMovies(formattedMovies);
  }, []);

  return (
    <div className="container">
      <h1 className="mb-4">Movie List</h1>
      {movies.length > 0 ? (
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>Category</th>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie: Movie) => (
              <tr key={movie.Title}>
                <td>{movie.Category}</td>
                <td>{movie.Title}</td>
                <td>{movie.Year}</td>
                <td>{movie.Director}</td>
                <td>{movie.Rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <p className="text-center">Loading...</p>
        </div>
      )}
    </div>
  );
}

export default Movies;
