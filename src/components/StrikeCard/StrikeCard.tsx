import VideoPlayer from "../VideoPlayer/VideoPlayer";
import "./StrikeCard.scss";

type StrikeCardProps = {
  video_url_tutorial: string;
  video_url_fighter: string;
  icon_url_strike: string;
  name: string;
  speed: string;
  power: string;
};

const StrikeCard = ({
  video_url_tutorial,
  video_url_fighter,
  icon_url_strike,
  name,
  power,
  speed,
}: StrikeCardProps) => {
  return (
    <div className="Strike">
      <h4 className="Strike__name">{name}</h4>
      <img src={icon_url_strike} alt="Strike Image" className="Strike__image" />
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
    </div>
  );
};

export default StrikeCard;
