import React, { Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Movies from "./Movies";
import TvShows from "./TvShows";
import Trending from "./Trends";
import "../styles/NavbarStyle.css";
import NavbarSection from "./NavbarSection";

export const Container = React.createContext();

function Navbar() {
  const [toggle, setTogle] = useState(true);
  const [inputValue, setInputValue] = useState("");
  return (
    <Container.Provider value={{ toggle, inputValue }}>
      <Fragment>
        <header className="container">
          <NavbarSection
            toggle={toggle}
            setTogle={setTogle}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </header>
        <Routes>
          <Route path="" element={<Movies />} />
          <Route path="TvShows" element={<TvShows />} />
          <Route path="Trending" element={<Trending />} />
        </Routes>
      </Fragment>
    </Container.Provider>
  );
}

export default Navbar;
