import React, { useContext } from "react";
import "./nav.css";
import { MovieContext } from "../MovieContext";

function Nav() {
  const [movies] = useContext(MovieContext);
  return (
    <div className="nav">
      <div className="nav__logo">
        <h3> Context API example</h3>
      </div>

      <div className="nav__data">
        <p> Total movies: {movies.length}</p>
      </div>
    </div>
  );
}

export default Nav;
