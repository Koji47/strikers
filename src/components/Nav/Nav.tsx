import Button from "../Button/Button";
import "./Nav.scss";
import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  let test = 1;
  const testFunction = () => {
    test = test + 1;
  };

  return (
    <nav className="nav">
      <NavLink to="/">
        <Button label="HOME" />
      </NavLink>
      <h1 className="logo">Strikers</h1>
      <div className="nav__buttons--right">
        <NavLink to="/fighters">
          <Button label="FIGHTERS" variant="secondary" />
        </NavLink>

        <NavLink to="/strikes">
          <Button label="STRIKES" variant="secondary" />
        </NavLink>

        <NavLink to="/tutorials">
          <Button label="TUTORIALS" variant="secondary" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
