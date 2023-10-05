import FightersResponse from "../../types/FighterResponse";
import "./FavouriteStrikes.scss";

type FavouriteStrikesProps = {
  fighters: FightersResponse;
};

const FavouriteStrikes = ({ fighters }: FavouriteStrikesProps) => {
  return (
    <div className="FavouriteStrikes">
      <h4 className="FavouriteStrikes__title">Favourite Strikes</h4>
      <div className="FavouriteStrikes__list">
        {fighters.strikes1 ? (
          <>
            <h5 className="FavouriteStrikes__list__name">
              {fighters.strikes1.name}
            </h5>
            <h6 className="FavouriteStrikes__list__power">
              {fighters.strikes1.power}
            </h6>
            <h6 className="FavouriteStrikes__list__speed">
              {fighters.strikes1.speed}
            </h6>
          </>
        ) : (
          <p>No favourite strike available</p>
        )}
      </div>
      <div className="FavouriteStrikes__list">
        {fighters.strikes2 ? (
          <>
            <h5 className="FavouriteStrikes__list__name">
              {fighters.strikes2.name}
            </h5>
            <h6 className="FavouriteStrikes__list__power">
              {fighters.strikes2.power}
            </h6>
            <h6 className="FavouriteStrikes__list__speed">
              {fighters.strikes2.speed}
            </h6>
          </>
        ) : (
          <p>No favourite strike available</p>
        )}
      </div>
      <div className="FavouriteStrikes__list">
        {fighters.strikes3 ? (
          <>
            <h5 className="FavouriteStrikes__list__name">
              {fighters.strikes3.name}
            </h5>
            <h6 className="FavouriteStrikes__list__power">
              {fighters.strikes3.power}
            </h6>
            <h6 className="FavouriteStrikes__list__speed">
              {fighters.strikes3.speed}
            </h6>
          </>
        ) : (
          <p>No favourite strike available</p>
        )}
      </div>
      <div className="FavouriteStrikes__list">
        {fighters.strikes4 ? (
          <>
            <h5 className="FavouriteStrikes__list__name">
              {fighters.strikes4.name}
            </h5>
            <h6 className="FavouriteStrikes__list__power">
              {fighters.strikes4.power}
            </h6>
            <h6 className="FavouriteStrikes__list__speed">
              {fighters.strikes4.speed}
            </h6>
          </>
        ) : (
          <p>No favourite strike available</p>
        )}
      </div>
    </div>
  );
};

export default FavouriteStrikes;
