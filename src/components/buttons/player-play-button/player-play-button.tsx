type PlayerPlayButtonProps = {
  isPlaying : boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  refVideo: React.RefObject<HTMLVideoElement>;
}
export function PlayerPlayButton({setIsPlaying, isPlaying, refVideo} : PlayerPlayButtonProps) : JSX.Element{
  const handleClick = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying){
      refVideo.current?.play();
    } else {
      refVideo.current?.pause();
    }
  };
  if(!isPlaying) {
    return (
      <button type="button" className="player__play" onClick={() => handleClick()}>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
    );
  }
  return(
    <button type="button" className="player__play" onClick={() => handleClick()}>
      <svg viewBox="0 0 14 21" width="14" height="21">
        <use xlinkHref="#pause"></use>
      </svg>
      <span>Pause</span>
    </button>
  );
}
