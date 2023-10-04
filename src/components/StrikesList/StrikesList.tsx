import "./StrikesList.scss";
import StrikeCard from "../StrikeCard/StrikeCard";
import Strike from "../../types/Strike";
import { useState, useEffect, ChangeEvent } from "react";

type StrikesListProps = {
  strikes: Strike[];
};

const StrikesList = ({ strikes }: StrikesListProps) => {
  const [strikesDB, setStrikesDB] = useState<Strike[]>([]);

  // if (!strikes || strikes.length === 0) {
  //   return <div>No Strikes Available</div>;
  // }

  return (
    <>
      {strikes.map((strike) => (
        <StrikeCard
          key={strike.id}
          video_url_tutorial={strike.video_url_tutorial}
          video_url_fighter={strike.video_url_fighter}
          name={strike.name}
          image_url_strike={strike.image_url}
          speed={strike.speed}
          power={strike.power}
        />
      ))}
    </>
  );
};

export default StrikesList;
