import FightersResponse from "../../types/FighterResponse";
import StrikeResponse from "../../types/StrikeResponse";
import "./FavouriteStrikes.scss";

type FavouriteStrikesProps = {
  strikes: StrikeResponse[];
};

const FavouriteStrikes = ({ strikes }: FavouriteStrikesProps) => {
  return (
    <div className="FavouriteStrikes">
      <h4 className="FavouriteStrikes__title">Favourite Strikes</h4>
      <div className="FavouriteStrikes__list">
        {strikes[0] ? (
          <>
            <h5 className="FavouriteStrikes__list__name">{strikes[0].name}</h5>
            <h6 className="FavouriteStrikes__list__power">
              {strikes[0].power}
            </h6>
            <h6 className="FavouriteStrikes__list__speed">
              {strikes[0].speed}
            </h6>
          </>
        ) : (
          <p className="FavouriteStrikes__list__error">
            No favourite strike available
          </p>
        )}
      </div>
      <div className="FavouriteStrikes__list">
        {strikes[1] ? (
          <>
            <h5 className="FavouriteStrikes__list__name">{strikes[1].name}</h5>
            <h6 className="FavouriteStrikes__list__power">
              {strikes[1].power}
            </h6>
            <h6 className="FavouriteStrikes__list__speed">
              {strikes[1].speed}
            </h6>
          </>
        ) : (
          <p className="FavouriteStrikes__list__error">
            No favourite strike available
          </p>
        )}
      </div>
      <div className="FavouriteStrikes__list">
        {strikes[2] ? (
          <>
            <h5 className="FavouriteStrikes__list__name">{strikes[2].name}</h5>
            <h6 className="FavouriteStrikes__list__power">
              {strikes[2].power}
            </h6>
            <h6 className="FavouriteStrikes__list__speed">
              {strikes[2].speed}
            </h6>
          </>
        ) : (
          <p className="FavouriteStrikes__list__error">
            No favourite strike available
          </p>
        )}
      </div>
      <div className="FavouriteStrikes__list">
        {strikes[3] ? (
          <>
            <h5 className="FavouriteStrikes__list__name">{strikes[3].name}</h5>
            <h6 className="FavouriteStrikes__list__power">
              {strikes[3].power}
            </h6>
            <h6 className="FavouriteStrikes__list__speed">
              {strikes[3].speed}
            </h6>
          </>
        ) : (
          <p className="FavouriteStrikes__list__error">
            No favourite strike available
          </p>
        )}
      </div>
    </div>
  );
};

export default FavouriteStrikes;
