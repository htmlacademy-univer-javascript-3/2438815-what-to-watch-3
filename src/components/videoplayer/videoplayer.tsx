import {useRef, useEffect} from 'react';

type VideoPlayerProps = {
  videoLink: string;
  poster: string;
  width: number;
  height: number;
  className?: string;
  muted: boolean;
  isHovered: boolean;
}
function VideoPlayer({videoLink, poster, width, height, className, muted, isHovered} : VideoPlayerProps) : JSX.Element{
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
    <video src={videoLink} width={width} height={height} className={className} poster={poster} muted={muted} ref={refVideo} loop></video>
  );
}
export default VideoPlayer;
