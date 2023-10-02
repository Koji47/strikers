import Button from "../Button/Button";
import "./FighterCard.scss";
import FavouriteStrikes from "../FavouriteStrikes/FavouriteStrikes";

type FighterCardProps = {
  gym: string;
  first_name: string;
  last_name: string;
  discipline: string;
  location: string;
  strikes: {
    name: string;
    power: string;
    speed: string;
  }[];
  picture_url: string;
};

const FighterCard = ({
  gym,
  picture_url,
  first_name,
  last_name,
  discipline,
  location,
  strikes,
}: FighterCardProps) => {
  let test = 1;
  const testFunction = () => {
    test = test + 1;
  };

  return (
    <div className="FighterCard">
      <h2 className="FighterCard__gym">{gym}</h2>
      <img
        src={picture_url}
        alt="Fighter Profile Picture"
        className="FighterCard__img"
      />
      <div className="FighterCard__info">
        <h2 className="FighterCard__info__name">
          {first_name} {last_name}
        </h2>
        <h3 className="FighterCard__info__discipline">{discipline}</h3>
        <h3 className="FighterCard__info__location">{location}</h3>
      </div>
      <div className="FighterCard__strikes">
        <FavouriteStrikes strikes={strikes} />
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
