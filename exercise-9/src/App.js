import MoviesList from "./components/MoviesList";
import "./App.css";
import {React, useState} from "react";

const App = () => {

  const [movies,SetMovies] = useState ([]);
  const [error, setError] = useState(null);
  /*const movies = [
    {
      id: 1,
      title: "Movie 1",
      openingText: "A long time ago...",
      releaseDate: "1977-05-25",
    },
    {
      id: 2,
      title: "Movie 2",
      openingText: "An even longer time ago...",
      releaseDate: "1999-05-19",
    },
  ]; */

  const fetchMoviesHandler = async () => {
    setError(null);
    try{
      const response = await fetch ("https://swapi.dev/api/films/")

    if (!response.ok){
      throw new Error("Something went wrong!")
    }

    const data = await response.json();



    const transformedMovies = data.results.map((movieData) => {
      return {

      id: movieData.episode_id,
      title: movieData.title,
      openingText: movieData.opening_crawl,
      releaseDate: movieData.release_date,
    };
  });



    SetMovies(transformedMovies);
    }  catch (error){
      setError(error.message);
    }


  };

  let content;

  if (error){
    content = <p>{error}</p>
  } else {
    content = <MoviesList movies = {movies} ></MoviesList>;
  }

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {error && <p>{error}</p>}
        <MoviesList movies={movies} />
      </section>
    </>
  );
};

export default App;
