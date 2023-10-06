import FighterCard from "../../components/FighterCard/FighterCard";
import "./Fighters.scss";
import Fighters from "../../types/FighterResponse";
import { useState } from "react";
import Select from "../../components/Select/Select";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import Loading from "../../components/Loading/Loading";

type FightersPageProps = {
  fighters: Fighters[];
};

const FightersPage = ({ fighters }: FightersPageProps) => {
  const [filterByDiscipline, setFilterByDiscipline] = useState("All");
  const filteredFightersByDiscipline = fighters.filter((fighter) =>
    filterByDiscipline === "All"
      ? true
      : fighter.discipline === filterByDiscipline
  );

  const handleChangeFilterByDiscipline = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterByDiscipline(e.target.value);
  };

  const optionsByDiscipline = [
    { name: "Muay Thai", id: "Muay Thai" },
    { name: "Boxing", id: "Boxing" },
  ];

  if (!fighters) return <Loading />;

  return (
    <>
      <div className="create-strike">
        <NavLink to={"/strike/create"}>
          <Button label={"Create Strike"} />
        </NavLink>
      </div>
      <div className="select-container">
        <Select
          options={optionsByDiscipline}
          onChange={handleChangeFilterByDiscipline}
          labelText="Filter By:"
          label="filterSelect"
          defaultOption="All"
          defaultValue={filterByDiscipline}
        />
      </div>
      {filteredFightersByDiscipline.length === 0 ? (
        <div className="error">
          <h1>No Fighters Available</h1>
        </div>
      ) : (
        filteredFightersByDiscipline.map((fighter, index) => (
          <div key={index}>
            <FighterCard fighter={fighter} key={index} />
          </div>
        ))
      )}
    </>
  );
};

export default FightersPage;
