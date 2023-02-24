import axios from "axios";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { AiFillPlayCircle, AiOutlineClose } from "react-icons/ai";
import { Container } from "./Navbar";
import NoImg from "./nessuna-foto.jpg";
import "../styles/NavbarStyle.css";

function Trends() {
  const { toggle, inputValue } = useContext(Container);
  const input = inputValue;
  const Shown = input ? "search" : "trending";
  const Api = "https://api.themoviedb.org/3";

  const TrendsShown = `/trending/all/week`;
  const [trendArry, setTrendArry] = useState([]);

  const [trailer, setTrailer] = useState(true);
  const [trendTitle, setTrendTitle] = useState("");
  const Images = "https://image.tmdb.org/t/p/w500/";

  const Trends = async () => {
    const data = await axios.get(`${Api}${TrendsShown}`, {
      params: {
        api_key: "85c673f0d202d5812960b6253f72fbdc",
        language: "IT",
      },
    });
    const results = data.data.results;
    setTrendArry(results);
  };
  useEffect(() => {
    setTimeout(() => {
      Trends();
    }, 100);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);
  const TrendTitle = (trend) => {
    setTrendTitle(trend.title);
    setTrailer(!trailer);
  };
  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className="movies-container">
          {trendArry.map((trend) => {
            return (
              <Fragment>
                <div id={trailer ? "container" : "NoContainer"}>
                  <AiFillPlayCircle
                    color="#fff"
                    fontSize={40}
                    id={trailer ? "playIcon" : "hide"}
                    onClick={() => TrendTitle(trend)}
                  />
                  <img
                    src={
                      trend.poster_path
                        ? `${Images}${trend.poster_path}`
                        : NoImg
                    }
                    alt="img"
                    onClick={() => TrendTitle(trend)}
                  />
                  <h3
                    id="smaller-Text"
                    className={toggle ? "mainColor" : "secondaryColor"}
                  >
                    {trend.title}
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

export default Trends;
