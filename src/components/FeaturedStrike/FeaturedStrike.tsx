import "./FeaturedStrike.scss";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

type FeaturedStrikeProps = {
  video_url: string;
  name: string;
};

const FeaturedStrike = ({ video_url, name }: FeaturedStrikeProps) => {
  return (
    <div className="FeaturedStrike">
      <h4 className="FeaturedStrike__title">Featured Strike</h4>
      <h2 className="FeaturedStrike__name">{name}</h2>
      <VideoPlayer video_url={video_url} />
    </div>
  );
};

export default FeaturedStrike;
