function MovieItem({ movie, onRemoveMovie }) {
  return (
    <div className="list-item flex justify-between items-center border-b py-2">
      <div>
        <h3 className="font-semibold">{movie.title}</h3>
        <p className="text-sm text-gray-600">
          Directed by {movie.director} ({movie.year})
        </p>
      </div>
      <button
        onClick={() => onRemoveMovie(movie.id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
}

export default MovieItem;
