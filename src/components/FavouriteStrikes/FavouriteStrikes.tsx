import "./FavouriteStrikes.scss";

type Strike = {
  name: string;
  power: string;
  speed: string;
};

type FavouriteStrikesProps = {
  strikes: Strike[];
};

const FavouriteStrikes = ({ strikes }: FavouriteStrikesProps) => {
  return (
    <div className="FavouriteStrikes">
      <h4 className="FavouriteStrikes__title">Favourite Strikes</h4>
      <div className="FavouriteStrikes__list">
        {strikes.map((strike, index) => (
          <div key={index} className={`FavouriteStrikes__list__${index + 1}`}>
            <h5 className="FavouriteStrikes__list__name">{strike.name}</h5>
            <h6 className="FavouriteStrikes__list__power">{strike.power}</h6>
            <h6 className="FavouriteStrikes__list__speed">{strike.speed}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouriteStrikes;
