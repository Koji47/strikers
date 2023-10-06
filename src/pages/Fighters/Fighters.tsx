import FighterCard from "../../components/FighterCard/FighterCard";
import "./Fighters.scss";
import Fighters from "../../types/FighterResponse";
import { useState } from "react";
import Select from "../../components/Select/Select";

type FightersPageProps = {
  fighters: Fighters[];
};

const FightersPage = ({ fighters }: FightersPageProps) => {
  const [filterByDiscipline, setFilterByDiscipline] = useState("All");
  // const anything = Object.values(fighters[0]).map((fighter) => {
  //   // console.log(fighter);
  //   if (typeof fighter === "object") {
  //     Object.values(fighter).map((value) => {
  //       console.log(value);

  //       return value;
  //     });
  //   }
  //   return fighter;
  // });

  // const strikesArray = ["strikes1", "strikes2", "strikes3", "strikes4"];
  // const favouriteStrikes = Object.keys(fighters).map((key, index) => {
  //   if (strikesArray.includes(key)) {
  //     return Object.values(fighters)[index];
  //   }
  // });

  // console.log(anything);

  // console.log(fighters[0]);

  // console.log(typeof fighters[0].strikes1);

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

  return (
    <>
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
