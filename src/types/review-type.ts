export type ReviewType = {
  id: string;
  date: string;
  user: string;
  comment: string;
  rating: number;
}

export type Reviews = ReviewType[];
