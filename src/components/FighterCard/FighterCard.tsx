import Button from "../Button/Button";
import "./FighterCard.scss";
import FightersResponse from "../../types/FighterResponse";
import FavouriteStrikes from "../FavouriteStrikes/FavouriteStrikes";
import { NavLink } from "react-router-dom";

type FighterCardProps = {
  fighter: FightersResponse;
};

const FighterCard = ({ fighter }: FighterCardProps) => {
  const strikeData: any[] = [];
  Object.values(fighter).map((value) => {
    if (typeof value === "object") {
      strikeData.push(value);
    }
  });

  return (
    <div className="FighterCard">
      <img
        src={fighter.profile_picture}
        alt="Fighter Profile Picture"
        className="FighterCard__img"
      />
      <h2 className="FighterCard__gym">{fighter.gym}</h2>
      <div className="FighterCard__info">
        <h2 className="FighterCard__info__name">
          {fighter.first_name} {fighter.last_name}
        </h2>
        <h3 className="FighterCard__info__discipline">{fighter.discipline}</h3>
        <h3 className="FighterCard__info__location">{fighter.location}</h3>
      </div>
      <FavouriteStrikes strikes={strikeData} />
      <div className="FighterCard__button">
        <NavLink to="/strike">
          <Button label={"Edit"} variant="secondary" />
        </NavLink>
      </div>
    </div>
  );
};

export default FighterCard;
