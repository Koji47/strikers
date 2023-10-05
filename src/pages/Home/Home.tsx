import FighterCard from "../../components/FighterCard/FighterCard";
import FeaturedStrike from "../../components/FeaturedStrike/FeaturedStrike";
import StrikeResponse from "../../types/StrikeResponse";
import FightersResponse from "../../types/FighterResponse";

type HomeProps = {
  strikes: StrikeResponse;
  fighters: FightersResponse[];
  index: number;
};

const Home = ({ strikes, fighters, index }: HomeProps) => {
  const slicedFighters = fighters.slice(0, index);
  console.log(slicedFighters);

  return (
    <>
      <FeaturedStrike strikes={strikes} />

      {slicedFighters.map((fighter, i) => (
        <FighterCard fighters={fighter} key={i} />
      ))}
    </>
  );
};

export default Home;
