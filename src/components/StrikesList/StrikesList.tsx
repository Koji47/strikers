import "./StrikesList.scss";
import StrikeCard from "../StrikeCard/StrikeCard";
import Strike from "../../types/StrikeResponse";

type StrikesListProps = {
  strikes: Strike[];
};

const StrikesList = ({ strikes }: StrikesListProps) => {
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
          icon_url_strike={strike.icon_url}
          speed={strike.speed}
          power={strike.power}
        />
      ))}
    </>
  );
};

export default StrikesList;
