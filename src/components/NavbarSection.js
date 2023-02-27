import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavbarStyle.css";
import { HiSearch } from "react-icons/hi";



function NavbarSection({ toggle, setTogle, setInputValue }) {
  return (
    <Fragment>
      <nav className={toggle ? "" : "navBarColor"}>
        <div className="nav-options">
          <h1 id={toggle ? "" : "heading"}>FILMACT</h1>
          <div className="menu">
            <NavLink
              to=""
              style={({ isActive }) => {
                return { color: isActive ? "#fff" : "#EE9B00" };
              }}
            >
              <span id={toggle ? "Movies" : "MoviesLight"}>Movies</span>
            </NavLink>
            <NavLink
              to="/TvShows"
              style={({ isActive }) => {
                return { color: isActive ? "#fff" : "#EE9B00" };
              }}
            >
              <span id={toggle ? "Movies" : "MoviesLight"}>Tv Shows</span>
            </NavLink>
            <NavLink
              to="/Trending"
              style={({ isActive }) => {
                return { color: isActive ? "#fff" : "#EE9B00" };
              }}
            >
              <span id={toggle ? "Movies" : "MoviesLight"}>Trending</span>
            </NavLink>
          </div>
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <HiSearch
            fontSize={21}
            color={toggle ? "black" : "#ff206e"}
            id="search"
          />
          <div id="Color-switcher" onClick={() => setTogle(!toggle)}>
            <div
              id={toggle ? "Color-switcher-mover" : "Color-switcher-moved"}
            ></div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default NavbarSection;
