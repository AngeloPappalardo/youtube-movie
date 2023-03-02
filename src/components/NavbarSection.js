import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiSearch, HiSun, HiMoon } from "react-icons/hi";

function NavbarSection({ setInputValue }) {
  const [thame, setThame] = useState("dark-font");

  const changeTheme = () => {
    if (thame === "dark-font") {
      setThame("light-font");
    } else {
      setThame("dark-font");
    }
  };
  useEffect(() => {
    document.documentElement.className = thame;
  }, [thame]);

  return (
    <Fragment>
      <nav>
        <div className="nav-options">
          <h1>FILMACT</h1>
          <div className="menu">
            <NavLink
              to=""
              style={({ isActive }) => {
                return { color: isActive ? "#fff" : "#EE9B00" };
              }}
            >
              <span>Movies</span>
            </NavLink>
            <NavLink
              to="/TvShows"
              style={({ isActive }) => {
                return { color: isActive ? "#fff" : "#EE9B00" };
              }}
            >
              <span>Tv Shows</span>
            </NavLink>
            <NavLink
              to="/Trending"
              style={({ isActive }) => {
                return { color: isActive ? "#fff" : "#EE9B00" };
              }}
            >
              <span>Trending</span>
            </NavLink>
          </div>
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <HiSearch fontSize={21} color=" var( --clr-nav)" id="search" />
          <div id="Color-switcher" onClick={changeTheme}>
            <div className="toggle"></div>
            <HiSun
              className="toggle-svg"
              fontSize={30}
              color="rgb(246 223 0)"
            />
            <HiMoon
              className="toggle-svg"
              fontSize={30}
              color="rgb(155 155 217)"
            />
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default NavbarSection;
