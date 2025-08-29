
import { useState } from "react";

function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !director) return;
    onAddMovie({ title , director });
    setTitle("");
    setDirector("");
  };

  return (
    <form className="add-form flex flex-col gap-2" onSubmit={handleSubmit}>
      <label className="flex flex-col text-sm font-medium">
        Movie Title
        <input  className="border rounded-lg px-3 py-2 " type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </label>
      <label className="flex flex-col text-sm font-medium">
        Director
        <input className="border rounded-lg px-3 py-2" type="text" value={director} onChange={(e) => setDirector(e.target.value)}/>
      </label>
      <button className="bg-blue-600 text-white rounded-lg px-2 py-2 hover:bg-blue-700 " type="submit"
        
      >
        Add Movie
      </button>
    </form>
  );
}

export default AddMovieForm;
