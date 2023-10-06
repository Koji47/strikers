import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import StrikesList from "../../components/StrikesList/StrikesList";
import Strike from "../../types/StrikeResponse";
import "./Strikes.scss";

type StrikesProps = {
  strikes: Strike[];
};

const Strikes = ({ strikes }: StrikesProps) => {
  return (
    <div>
      <div className="create-strike">
        <NavLink to={"/strike/create"}>
          <Button label={"Create Strike"} />
        </NavLink>
      </div>
      <StrikesList strikes={strikes} />
    </div>
  );
};

export default Strikes;
