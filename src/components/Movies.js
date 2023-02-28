import axios from "axios";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { AiFillPlayCircle, AiOutlineClose } from "react-icons/ai";
import { Container } from "./Navbar";
import NoImg from "./nessuna-foto.jpg";
import TrailerMovies from "../trailers/TrailerMovies";

function Movies() {
  const { inputValue } = useContext(Container);
  const input = inputValue;
  const [movieData, setMovieData] = useState([]);
  const [trailer, setTrailer] = useState(true);
  const [moviTitle, setMoviTitle] = useState("");
  const Shown = input ? "search" : "discover";
  const Api = `https://api.themoviedb.org/3/${Shown}/movie`;
  const Images = "https://image.tmdb.org/t/p/w500/";
  const MovieCall = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: "85c673f0d202d5812960b6253f72fbdc",
        language: "IT",
        query: input,
      },
    });
    const results = data.data.results;
    setMovieData(results);
  };
  useEffect(() => {
    setTimeout(() => {
      MovieCall();
    }, 100);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);
  const MoviesTitle = (movie) => {
    setMoviTitle(movie.title);
    setTrailer(!trailer);
  };
  return (
    <Fragment>
      <div>
        <section className="movies-container">
          {movieData.map((movie) => {
            return (
              <Fragment>
                <article id={trailer ? "container" : "NoContainer"}>
                  <AiFillPlayCircle
                    color="#fff"
                    fontSize={40}
                    id={trailer ? "playIcon" : "hide"}
                    onClick={() => MoviesTitle(movie)}
                  />
                  <img
                    src={
                      movie.poster_path
                        ? `${Images}${movie.poster_path}`
                        : NoImg
                    }
                    alt="img"
                    onClick={() => MoviesTitle(movie)}
                  />
                  <h3
                    id={movie.title.length > 28 ? "smaller-Text" : ""}
                    className="mainColor"
                  >
                    {movie.title}
                  </h3>
                </article>
              </Fragment>
            );
          })}
          {trailer ? console.log() : <TrailerMovies moviesTitle={moviTitle} />}
          <AiOutlineClose
            id={trailer ? "Nothing" : "Exit1"}
            className="player"
            fontSize={55}
            color="var(--clr-text)"
            cursor={"pointer"}
            onClick={() => setTrailer(true)}
          />
        </section>
      </div>
    </Fragment>
  );
}

export default Movies;
