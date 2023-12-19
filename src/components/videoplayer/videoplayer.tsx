import {useRef, useEffect} from 'react';
import {VideoType} from '../../types/video-type';

type VideoPlayerProps = {
  video: VideoType;
  width: number;
  height: number;
  className?: string;
  muted: boolean;
  isHovered: boolean;
}
function VideoPlayer({video, className, muted, width, height, isHovered} : VideoPlayerProps) : JSX.Element{
  const refVideo = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const currentVideo = refVideo.current;
    if (!currentVideo) {
      return;
    }
    if (isHovered) {
      currentVideo.play();
    } else {
      currentVideo.load();
    }
  },
  [isHovered]
  );
  return (
    <video src={video.src} width={width} height={height} className={className} poster={video.posterPath} muted={muted} ref={refVideo} loop></video>
  );
}
export default VideoPlayer;
