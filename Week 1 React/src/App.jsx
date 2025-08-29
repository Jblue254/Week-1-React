
import { useState } from "react";
import AddMovieForm from "./assets/components/AddMovieForm";
import MovieList from "./assets/components/MovieList";

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Inception", director: "Andrew Kiprop", year: 2010 },
    { id: 2, title: "Pulp Fiction", director: "Javan kibet", year: 1994 },
    { id: 3, title: "Spirited Away", director: "Hayao Miyazaki", year: 2001 },
  ]);

  const addMovie = (movie) => {
    setMovies([...movies, { ...movie, id: Date.now() }]);
  };

  const removeMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div>
      <h1 className="font-extrabold">Movie Collection</h1>
      <AddMovieForm onAddMovie={addMovie} />
      <MovieList movies={movies} onRemoveMovie={removeMovie} />
    </div>
  );
}

export default App;