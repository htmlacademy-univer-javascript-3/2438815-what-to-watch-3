function addStartZero(time: number, endString : string) : string {
  return `${time < 10 ? '0' : ''}${endString}`;
}

function makeDisappearTimeString(time : number) : string {
  if(time > 0){
    return addStartZero(time,`${time > 0 ? `${time}:` : ''}`);
  }
  return '';

}

type MakeRemainingTimeStringProps = {
  allTime : number;
  currentTime : number;
}
export function makeRemainingTimeString({allTime, currentTime} : MakeRemainingTimeStringProps): string {
  const remainingTime = allTime - currentTime;
  const remainingHours = Math.floor(remainingTime / 3600);
  const remainingMinutes = Math.floor((remainingTime - remainingHours * 3600) / 60);
  const remainingSeconds = Math.floor(remainingTime % 60);
  const formatRemainingTime = `${makeDisappearTimeString(remainingHours)}${addStartZero(remainingMinutes, `${remainingMinutes}`)}:${addStartZero(remainingSeconds, `${remainingSeconds}`)}`;
  return (formatRemainingTime);
}
