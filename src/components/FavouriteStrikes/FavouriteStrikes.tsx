import StrikeResponse from "../../types/StrikeResponse";
import "./FavouriteStrikes.scss";

type FavouriteStrikesProps = {
  strikes: StrikeResponse[];
};

const FavouriteStrikes = ({ strikes }: FavouriteStrikesProps) => {
  return (
    <div className="FavouriteStrikes">
      <h4 className="FavouriteStrikes__title">Favourite Strikes</h4>
      <div className="FavouriteStrikes__list-container">
        {strikes.map((strike, index) => (
          <div className="FavouriteStrikes__list" key={index}>
            {strike ? (
              <div className="FavouriteStrikes__strike">
                <h5 className="FavouriteStrikes__list__name">{strike.name}</h5>
                <div className="FavouriteStrikes__list__stats">
                  <h6 className="FavouriteStrikes__list__power">
                    Power: {strike.power}
                  </h6>
                  <h6 className="FavouriteStrikes__list__speed">
                    Speed: {strike.speed}
                  </h6>
                </div>
              </div>
            ) : (
              <p className="FavouriteStrikes__list__error">
                No favourite strike available
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouriteStrikes;
