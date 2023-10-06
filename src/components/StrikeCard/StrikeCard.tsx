import { NavLink } from "react-router-dom";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import "./StrikeCard.scss";
import Button from "../Button/Button";
import iconKick from "../../assets/Icon_kick.png";
import iconPunch from "../../assets/Icon_punch.png";

type StrikeCardProps = {
  id: number;
  video_url_tutorial: string;
  video_url_fighter: string;
  strike_type: string;
  name: string;
  speed: string;
  power: string;
};

const StrikeCard = ({
  id,
  video_url_tutorial,
  video_url_fighter,
  strike_type,
  name,
  power,
  speed,
}: StrikeCardProps) => {
  return (
    <div className="Strike">
      <h4 className="Strike__name">{name}</h4>
      <img
        src={strike_type == `Kick` ? iconKick : iconPunch}
        alt="Strike Image"
        className="Strike__image"
      />
      <div className="Strike__stats">
        <h6 className="Strike__stats__power">Power: {power}</h6>
        <h6 className="Strike__stats__speed">Speed: {speed}</h6>
      </div>
      <div className="Strike__tutorial">
        <h4 className="Strike__title">Tutorial</h4>
        <VideoPlayer video_url={video_url_tutorial} />
      </div>
      <div className="Strike__fighter">
        <h4 className="Strike__title">Fighter to Watch</h4>
        <VideoPlayer video_url={video_url_fighter} />
      </div>
      <NavLink to={`/strike/${id}`}>
        <Button label={"Edit"} variant="secondary" />
      </NavLink>
    </div>
  );
};

export default StrikeCard;
