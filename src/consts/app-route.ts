export const AppRoute = {
  Main : '/',
  SignIn : '/login',
  MyList : '/mylist',
  Film : (id?: string) => !id ? '/films/:id' : '/films/:id'.replace(':id', id),
  AddReview : (id?: string) => !id ? '/films/:id/review' : '/films/:id/review'.replace(':id', id),
  Player : (id?: string) => !id ? '/player/:id' : '/player/:id'.replace(':id', id),
  NotFoundPage : '/not-found-page'
};
