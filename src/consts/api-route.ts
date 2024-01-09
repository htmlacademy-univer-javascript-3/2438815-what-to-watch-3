export const API_ROUTE = {
  FILMS : '/films',
  FILM : (id?: string) => !id ? '/films/:id' : '/films/:id'.replace(':id', id),
  SIMILAR : (id?: string) => !id ? '/films/:id/similar' : '/films/:id/similar'.replace(':id', id),
  PROMO : '/promo',
  FAVORITE : '/favorite',
  CHANGE_FAVORITE_STATUS : (id: string, status: number) => `/favorite/${id}/${status}`,
  COMMENTS : (id?: string) => !id ? '/comments/:id' : '/comments/:id'.replace(':id', id),
  CHECK_LOGIN : '/login',
  LOGIN: '/login',
  LOGOUT : '/logout'
};
