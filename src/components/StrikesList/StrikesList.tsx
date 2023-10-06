import "./StrikesList.scss";
import StrikeCard from "../StrikeCard/StrikeCard";
import Strike from "../../types/StrikeResponse";
import { useState } from "react";
import Select from "../Select/Select";

type StrikesListProps = {
  strikes: Strike[];
};

const StrikesList = ({ strikes }: StrikesListProps) => {
  const [filter, setFilter] = useState("All");

  const filteredStrikes = strikes.filter((strike) =>
    filter === "All" ? true : strike.strike_type === filter
  );

  const handleChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const options = [
    { name: "Punch", id: "Punch" },
    { name: "Kick", id: "Kick" },
  ];

  return (
    <>
      <div className="select-container">
        <Select
          options={options}
          onChange={handleChangeFilter}
          labelText="Filter By:"
          label="filterSelect"
          defaultOption="All"
          defaultValue={filter}
        />
      </div>
      {filteredStrikes.length === 0 ? (
        <div className="error">
          <h1>No Strikes Available</h1>
        </div>
      ) : (
        filteredStrikes.map((strike) => (
          <StrikeCard
            key={strike.id}
            id={strike.id}
            video_url_tutorial={strike.video_url_tutorial}
            video_url_fighter={strike.video_url_fighter}
            name={strike.name}
            strike_type={strike.strike_type}
            speed={strike.speed}
            power={strike.power}
          />
        ))
      )}
    </>
  );
};

export default StrikesList;
