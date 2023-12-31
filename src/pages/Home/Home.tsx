import FighterCard from "../../components/FighterCard/FighterCard";
import FeaturedStrike from "../../components/FeaturedStrike/FeaturedStrike";
import StrikeResponse from "../../types/StrikeResponse";
import FightersResponse from "../../types/FighterResponse";
import Loading from "../../components/Loading/Loading";

type HomeProps = {
  strikes: StrikeResponse;
  fighters: FightersResponse[];
  index: number;
};

const Home = ({ strikes, fighters, index }: HomeProps) => {
  const slicedFighters = fighters.slice(0, index);

  if (!strikes || !fighters) return <Loading />;

  return (
    <>
      <FeaturedStrike strikes={strikes} />

      {slicedFighters.map((fighter, i) => (
        <FighterCard fighter={fighter} key={i} />
      ))}
    </>
  );
};

export default Home;
