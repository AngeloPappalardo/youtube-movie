import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";

const TrailerTvShows = ({ TvShowsTitle }) => {
  const [video, setVideo] = useState("");
  const [videoURL, setVideoURL] = useState("");

  function handleSerch() {
    setVideo(TvShowsTitle);
    movieTrailer(video).then((res) => {
      setVideoURL(res);
    });
  }
  useEffect(() => {
    handleSerch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoURL]);
  return (
    <Fragment>
      <div className="container-trailer"></div>
      <div className="player">
        <div className="container-title">{TvShowsTitle}</div>
        <ReactPlayer url={videoURL} controls={true} muted={false} />
      </div>
    </Fragment>
  );
};

export default TrailerTvShows;
