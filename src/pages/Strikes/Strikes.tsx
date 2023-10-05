import StrikesList from "../../components/StrikesList/StrikesList";
import Strike from "../../types/StrikeResponse";

type StrikesProps = {
  strikes: Strike[];
};

const Strikes = ({ strikes }: StrikesProps) => {
  return (
    <div>
      <StrikesList strikes={strikes} />
    </div>
  );
};

export default Strikes;
