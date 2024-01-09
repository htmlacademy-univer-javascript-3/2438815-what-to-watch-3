type FullScreenButtonProps = {
  refVideo: React.RefObject<HTMLVideoElement>;
}
export function FullScreenButton({refVideo} : FullScreenButtonProps) : JSX.Element{
  const handleFullScreenClick = () => {
    if (refVideo.current?.requestFullscreen) {
      refVideo.current?.requestFullscreen();
    }
  };
  return(
    <button type="button" className="player__full-screen" onClick={() => handleFullScreenClick()}>
      <svg viewBox="0 0 27 27" width="27" height="27">
        <use xlinkHref="#full-screen"></use>
      </svg>
      <span>Full screen</span>
    </button>
  );
}
