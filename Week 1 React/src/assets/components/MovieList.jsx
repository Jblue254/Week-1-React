import MovieItem from "./MovieItem";

function MovieList({ movies, onRemoveMovie }) {
  if (movies.length === 0) {
    return <p className="text-gray-500">No movies yet. Add one above!</p>;
  }

  return (
    <div className="flex flex-col gap-2 mt-4">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} onRemoveMovie={onRemoveMovie} />
      ))}
    </div>
  );
}

export default MovieList;
