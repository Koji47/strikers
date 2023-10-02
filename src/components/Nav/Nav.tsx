import Button from "../Button/Button";
import "./Nav.scss";

const Nav = () => {
  let test = 1;
  const testFunction = () => {
    test = test + 1;
  };

  return (
    <>
      <nav className="nav">
        <Button onClick={testFunction} label="HOME" />
        <h1 className="logo">Strikers</h1>
        <div className="nav__buttons--right">
          <Button onClick={testFunction} label="FIGHTERS" variant="secondary" />

          <Button onClick={testFunction} label="STRIKES" variant="secondary" />

          <Button onClick={testFunction} label="TUTORIAL" variant="secondary" />
        </div>
      </nav>
    </>
  );
};

export default Nav;
