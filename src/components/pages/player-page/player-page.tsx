import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {getFilm} from '../../../store/film-page-process/film-page-getters';
import {GetVideoData} from '../../../functions/get-video-data/get-video-data';
import NotFoundPage from '../not-found-page/not-found-page';
import {useRef, useState} from 'react';
import {PlayerPlayButton} from '../../buttons/player-play-button/player-play-button';
import {FullScreenButton} from '../../buttons/full-screen-button/full-screen-button';
import {fetchFilmAction} from '../../../store/api-actions';
import {useEffect} from 'react';
import {makeRemainingTimeString} from '../../../functions/make-remaining-time-string/make-remaining-time-string';

export default PlayerPage;

function PlayerPage() : JSX.Element{
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [percentProgress, setPercentProgress] = useState<number>(0);
  const [remainingTime, setRemainingTime] = useState<string>('');
  const refVideo = useRef<HTMLVideoElement>(null);
  const id = useParams().id || '';
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm);
  const navigate = useNavigate();
  useEffect(() => {
    if (!film || film.id !== id) {
      dispatch(fetchFilmAction(id));
    }
  });

  function handleTimeUpdate() {
    const currentVideo = refVideo.current;
    if (currentVideo) {
      const currentTime = currentVideo.currentTime;
      const filmRunTime = currentVideo.duration;
      setPercentProgress(currentTime * 100 / filmRunTime);
      setRemainingTime(makeRemainingTimeString({allTime: filmRunTime, currentTime : currentTime}));
    }
  }

  const video = GetVideoData(film);
  if(!video || id === ''){
    return(<NotFoundPage/>);
  }
  return (
    <div className="player">
      <video src={video.src} className="player__video" ref={refVideo} poster={video.poster} onTimeUpdate={handleTimeUpdate} muted={false} loop></video>

      <button type="button" className="player__exit" onClick={() => navigate(-1)}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={percentProgress} max="100"></progress>
            <div className="player__toggler" style={{ left: `${percentProgress}%` }}>Toggler</div>
          </div>
          <div className="player__time-value">{remainingTime}</div>
        </div>

        <div className="player__controls-row">
          <PlayerPlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} refVideo={refVideo}/>
          <div className="player__name">Transpotting</div>
          <FullScreenButton refVideo={refVideo}/>
        </div>
      </div>
    </div>
  );
}
