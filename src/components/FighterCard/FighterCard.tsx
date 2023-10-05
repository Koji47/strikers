import Button from "../Button/Button";
import "./FighterCard.scss";
import FavouriteStrikes from "../FavouriteStrikes/FavouriteStrikes";
import FightersResponse from "../../types/FighterResponse";

type FighterCardProps = {
  fighters: FightersResponse;
};

const FighterCard = ({ fighters }: FighterCardProps) => {
  let test = 1;
  const testFunction = () => {
    test = test + 1;
  };

  return (
    <div className="FighterCard">
      <h2 className="FighterCard__gym">{fighters.gym}</h2>
      <img
        src={fighters.icon_url}
        alt="Fighter Profile Picture"
        className="FighterCard__img"
      />
      <div className="FighterCard__info">
        <h2 className="FighterCard__info__name">
          {fighters.first_name} {fighters.last_name}
        </h2>
        <h3 className="FighterCard__info__discipline">{fighters.discipline}</h3>
        <h3 className="FighterCard__info__location">{fighters.location}</h3>
      </div>
      <div className="FighterCard__strikes">
        <FavouriteStrikes fighters={fighters} />
      </div>
      <div className="FighterCard__button">
        <Button
          label={"More Info"}
          onClick={testFunction}
          variant="secondary"
        />
      </div>
    </div>
  );
};

export default FighterCard;
