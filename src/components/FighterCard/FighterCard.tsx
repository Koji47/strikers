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

  // const strikesArray = ["strikes1", "strikes2", "strikes3", "strikes4"];
  // const favouriteStrikes = Object.keys(fighter).map((key, keyIndex) => {
  //   if (strikesArray.includes(key)) {
  //     const strike = Object.values(fighter).map((value, valueIndex) => {
  //       if (valueIndex === keyIndex) {
  //         console.log(value);
  //         return value;
  //       }
  //     });
  //     return strike[0];
  //   }
  // });
  // console.log(favouriteStrikes);

  let test = 1;
  const testFunction = () => {
    test = test + 1;
  };

  return (
    <div className="FighterCard">
      <h2 className="FighterCard__gym">{fighter.gym}</h2>
      <img
        src={fighter.profile_picture}
        alt="Fighter Profile Picture"
        className="FighterCard__img"
      />
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
          <Button label={"Edit"} onClick={testFunction} variant="secondary" />
        </NavLink>
      </div>
    </div>
  );
};

export default FighterCard;
