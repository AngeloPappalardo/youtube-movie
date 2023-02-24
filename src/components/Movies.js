import axios from "axios";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { AiFillPlayCircle, AiOutlineClose } from "react-icons/ai";
import { Container } from "./Navbar";
import "../styles/Videos.css";
import NoImg from "./nessuna-foto.jpg";

function Movies() {
  const { toggle, inputValue } = useContext(Container);
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
    },100);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);
  const MuviesTitle = (movie) => {
    setMoviTitle(movie.title);
    setTrailer(!trailer);
  };
  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className="movies-container">
          {movieData.map((movie) => {
            return (
              <Fragment>
                <div id={trailer ? "container" : "NoContainer"}>
                  <AiFillPlayCircle
                    color="#fff"
                    fontSize={40}
                    id={trailer ? "playIcon" : "hide"}
                    onClick={() => MuviesTitle(movie)}
                  />
                  <img
                    src={
                      movie.poster_path
                        ? `${Images}${movie.poster_path}`
                        : NoImg
                    }
                    alt="img"
                    onClick={() => MuviesTitle(movie)}
                  />
                  <h3
                    id={movie.title.length > 28 ? "smaller-Text" : ""}
                    className={toggle ? "mainColor" : "secondaryColor"}
                  >
                    {movie.title}
                  </h3>
                </div>
              </Fragment>
            );
          })}
          <AiOutlineClose
            id={trailer ? "Nothing" : "Exit1"}
            className={toggle ? "DarkTheme" : "LightTemeClose"}
            fontSize={55}
            color="#fff"
            cursor={"pointer"}
            onClick={() => setTrailer(true)}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Movies;
