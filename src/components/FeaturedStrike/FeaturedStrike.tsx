import "./FeaturedStrike.scss";

type FeaturedStrikeProps = {
  video_url: string;
  name: string;
};

const FeaturedStrike = ({ video_url, name }: FeaturedStrikeProps) => {
  return (
    <div className="FeaturedStrike">
      <h4 className="FeaturedStrike__title">Featured Strike</h4>
      <h2 className="FeaturedStrike__name">{name}</h2>
      <iframe
        width="400"
        height="225"
        src={video_url}
        title="YouTube video player"
        className="FeaturedStrike__video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default FeaturedStrike;
