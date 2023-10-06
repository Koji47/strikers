import Button from "../Button/Button";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__buttons--left">
        <NavLink to="/">
          <Button label="HOME" />
        </NavLink>
      </div>
      <h1 className="logo">Strikers</h1>
      <div className="nav__buttons--right">
        <NavLink to="/fighters">
          <Button label="FIGHTERS" variant="secondary" />
        </NavLink>
        <NavLink to="/strikes">
          <Button label="STRIKES" variant="secondary" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
