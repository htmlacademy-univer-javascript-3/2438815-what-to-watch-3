import {VideoType} from '../../types/video-type';

type VideoPlayerProps = {
  video: VideoType;
}
function VideoPlayer({video} : VideoPlayerProps) : JSX.Element{
  return (
    <video src={video.src} className="player__video" poster={video.posterPath}></video>
  );
}

export default VideoPlayer;
