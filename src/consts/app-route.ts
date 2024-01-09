export const APP_ROUTE = {
  MAIN : '/',
  SIGN_IN : '/login',
  MY_LIST : '/mylist',
  FILM : (id?: string) => !id ? '/films/:id' : '/films/:id'.replace(':id', id),
  ADD_REVIEW : (id?: string) => !id ? '/films/:id/review' : '/films/:id/review'.replace(':id', id),
  PLAYER : (id?: string) => !id ? '/player/:id' : '/player/:id'.replace(':id', id),
  NOT_FOUND_PAGE : '/not-found-page'
};
