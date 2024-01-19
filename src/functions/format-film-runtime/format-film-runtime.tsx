const MINUTES_IN_HOUR = 60;
export function formatFilmRuntime (runTime : number): string {
  return `${Math.floor(runTime / MINUTES_IN_HOUR)} h ${runTime % MINUTES_IN_HOUR} min`;
}
