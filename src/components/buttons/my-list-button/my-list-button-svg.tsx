export enum HrefType {
  'Add'= '#add',
  'InList' = '#in-list',
}

type MyListButtonSVGProps = {
  hrefType: HrefType;
}

export function MyListButtonSVG({hrefType} : MyListButtonSVGProps) : JSX.Element {
  if (hrefType === HrefType.Add) {
    return (
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
    );
  }
  return(
    <svg viewBox="0 0 18 14" width="18" height="14">
      <use xlinkHref="#in-list"></use>
    </svg>
  );
}
