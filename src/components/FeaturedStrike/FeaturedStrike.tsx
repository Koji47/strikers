import "./FeaturedStrike.scss";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import StrikeResponse from "../../types/StrikeResponse";

type FeaturedStrikeProps = {
  strikes: StrikeResponse;
};

const FeaturedStrike = ({ strikes }: FeaturedStrikeProps) => {
  return (
    <div className="FeaturedStrike">
      <h4 className="FeaturedStrike__title">Featured Strike</h4>
      <h2 className="FeaturedStrike__name">{strikes.name}</h2>
      <VideoPlayer video_url={strikes.video_url_tutorial} />
    </div>
  );
};

export default FeaturedStrike;
