import axios from "axios";
import { AiFillPlayCircle, AiOutlineClose } from "react-icons/ai";
import React, { Fragment, useContext, useEffect, useState } from "react";
import NoImg from "./nessuna-foto.jpg";
import { Container } from "./Navbar";
import "../styles/Videos.css";
import TrailerTvShows from "../trailers/TrailerTvShows";

function TvShows() {
  const { toggle, inputValue } = useContext(Container);
  const input = inputValue;
  const [showData, setShowData] = useState([]);
  const [trailer, setTrailer] = useState(true);
  const [title, setTitle] = useState("");
  const Shown = input ? "search" : "discover";
  const Api = `https://api.themoviedb.org/3/${Shown}/tv`;
  const Images = "https://image.tmdb.org/t/p/w500/";
  const TvShows = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: "85c673f0d202d5812960b6253f72fbdc",
        language: "IT",
        query: input,
      },
    });
    const results = data.data.results;
    setShowData(results);
  };
  useEffect(() => {
    setTimeout(() => {
      TvShows();
    }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);
  const TvShowsTitle = (shows) => {
    setTitle(shows.name);
    setTrailer(!trailer);
  };
  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <section className="movies-container">
          {showData.map((shows) => {
            return (
              <Fragment key={shows.id}>
                <article id={trailer ? "container" : "NoContainer"}>
                  <AiFillPlayCircle
                    color="#fff"
                    fontSize={40}
                    id={trailer ? "playIcon" : "hide"}
                    onClick={() => TvShowsTitle(shows)}
                  />
                  <img
                    src={
                      shows.poster_path
                        ? `${Images}${shows.poster_path}`
                        : NoImg
                    }
                    alt="img"
                    onClick={() => TvShowsTitle(shows)}
                  />
                  <h3
                    id={shows.name.length > 28 ? "smaller-Text" : ""}
                    className={toggle ? "mainColor" : "secondaryColor"}
                  >
                    {shows.name}
                  </h3>
                </article>
              </Fragment>
            );
          })}
          {trailer ? console.log() : <TrailerTvShows TvShowsTitle={title} toggle={toggle} />}
          <AiOutlineClose
            id={trailer ? "Nothing" : "Exit1"}
            className={toggle ? "DarkTheme" : "LightTemeClose"}
            fontSize={55}
            color={toggle ? "#fff" : "#ff206e"}
            cursor={"pointer"}
            onClick={() => setTrailer(true)}
          />
        </section>
      </div>
    </Fragment>
  );
}

export default TvShows;
