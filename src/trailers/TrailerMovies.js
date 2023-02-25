import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import "../styles/TrailerMovie.css"

const TrailerMovies = ({ moviesTitle, toggle,  }) => {
  const [video, setVideo] = useState("");
  const [videoURL, setVideoURL] = useState("");

  function handleSerch() {
    setVideo(moviesTitle)
    movieTrailer(video).then((res) => {
      setVideoURL(res);
    });
  }
  useEffect(() => {
    handleSerch()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[videoURL])
  return (
    <Fragment>
      <div className="container"></div>
      <div className="player">
        <div id={toggle ? "TrailerMovie-name-dark" : "TrailerMovie-name-light"}>{moviesTitle}</div>
        <ReactPlayer url={videoURL} controls={true} muted={false} />
      </div>
    </Fragment>
  );
};

export default TrailerMovies;
