import FighterCard from "../../components/FighterCard/FighterCard";
import "./Fighters.scss";
import Fighters from "../../types/FighterResponse";

type FightersPageProps = {
  fighters: Fighters[];
};

const FightersPage = ({ fighters }: FightersPageProps) => {
  return (
    <>
      {fighters.map((fighters, index) => (
        <FighterCard fighters={fighters} key={index} />
      ))}
    </>
  );
};

export default FightersPage;
