import "./VideoPlayer.scss";

type VideoPlayerProps = {
  video_url: string;
};

const VideoPlayer = ({ video_url }: VideoPlayerProps) => {
  return (
    <div className="VideoPlayer">
      <iframe
        width="368"
        height="207"
        src={video_url}
        title="YouTube video player"
        className="VideoPlayer__player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
