import React, { Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Movies from "./Movies";
import TvShows from "./TvShows";
import Trending from "./Trends";
import NavbarSection from "./NavbarSection";

export const Container = React.createContext();

function Navbar() {
  const [inputValue, setInputValue] = useState("");

  return (
    <Container.Provider value={{ inputValue }}>
      <Fragment>
        <header className="pb-5">
          <NavbarSection
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
