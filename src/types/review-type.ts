export type ReviewType = {
  id: string;
  date: string;
  user: string;
  comment: string;
  rating: number;
}

export type Reviews = ReviewType[];

export type ReviewSendData = {
  id: string;
  comment: string;
  rating: number;
  date: string;
}
