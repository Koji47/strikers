import { MouseEvent } from "react";
import Button from "../Button/Button";
import "./FighterCard.scss";

type FighterCardProps = {
  gym: string;
  first_name: string;
  last_name: string;
  discipline: string;
  location: string;
  strike_1: string;
  strike_1_power: string;
  strike_1_speed: string;
  strike_2: string;
  strike_2_power: string;
  strike_2_speed: string;
  strike_3: string;
  strike_3_power: string;
  strike_3_speed: string;
  strike_4: string;
  strike_4_power: string;
  strike_4_speed: string;
  picture_url: string;
};

const FighterCard = ({
  gym,
  picture_url,
  first_name,
  last_name,
  discipline,
  location,
  strike_1,
  strike_1_power,
  strike_1_speed,
  strike_2,
  strike_2_power,
  strike_2_speed,
  strike_3,
  strike_3_power,
  strike_3_speed,
  strike_4,
  strike_4_power,
  strike_4_speed,
}: FighterCardProps) => {
  let test = 1;
  const testFunction = () => {
    test = test + 1;
  };

  return (
    <div className="FighterCard-container">
      <h2 className="FighterCard-container__gym">{gym}</h2>
      <img
        src={picture_url}
        alt="Fighter Profile Picture"
        className="FighterCard-container__img"
      />
      <div className="FighterCard-container__info">
        <h2 className="FighterCard-container__info__name">
          {first_name} {last_name}
        </h2>
        <h3 className="FighterCard-container__info__discipline">
          {discipline}
        </h3>
        <h3 className="FighterCard-container__info__location">{location}</h3>
      </div>
      <div className="FighterCard-container__favourite-strikes">
        <h4 className="FighterCard-container__favourite-strikes__title">
          Favourite strikes
        </h4>
        <div className="FighterCard-container__favourite-strikes__strikes">
          <div className="FighterCard-container__favourite-strikes__strikes__1">
            <h5 className="FighterCard-container__favourite-strikes__strikes__1__name">
              {strike_1}
            </h5>
            <h6 className="FighterCard-container__favourite-strikes__strikes__1__power">
              {strike_1_power}
            </h6>
            <h6 className="FighterCard-container__favourite-strikes__strikes__1__speed">
              {strike_1_speed}
            </h6>
          </div>
          <div className="FighterCard-container__favourite-strikes__strikes__2">
            <h5 className="FighterCard-container__favourite-strikes__strikes__2__name">
              {strike_2}
            </h5>
            <h6 className="FighterCard-container__favourite-strikes__strikes__2__power">
              {strike_2_power}
            </h6>
            <h6 className="FighterCard-container__favourite-strikes__strikes__2__speed">
              {strike_2_speed}
            </h6>
          </div>
          <div className="FighterCard-container__favourite-strikes__strikes__3">
            <h5 className="FighterCard-container__favourite-strikes__strikes__3__name">
              {strike_3}
            </h5>
            <h6 className="FighterCard-container__favourite-strikes__strikes__3__power">
              {strike_3_power}
            </h6>
            <h6 className="FighterCard-container__favourite-strikes__strikes__3__speed">
              {strike_3_speed}
            </h6>
          </div>
          <div className="FighterCard-container__favourite-strikes__strikes__4">
            <h5 className="FighterCard-container__favourite-strikes__strikes__4__name">
              {strike_4}
            </h5>
            <h6 className="FighterCard-container__favourite-strikes__strikes__4__power">
              {strike_4_power}
            </h6>
            <h6 className="FighterCard-container__favourite-strikes__strikes__4__speed">
              {strike_4_speed}
            </h6>
          </div>
        </div>
      </div>
      <Button label={"More Info"} onClick={testFunction} />
    </div>
  );
};

export default FighterCard;
