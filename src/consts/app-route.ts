export const AppRoute = {
  Main : '/',
  SignIn : '/login',
  MyList : '/mylist',
  Film : (id?: string) => !id ? '/films/:id' : '/films/:id'.replace(':id', id),
  AddReview : '/films/:id/review',
  Player : '/player/:id',
  NotFoundPage : '/not-found-page'
};
