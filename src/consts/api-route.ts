export const APIRoute = {
  Films : '/films',
  Film : (id?: string) => !id ? '/films/:id' : '/films/:id'.replace(':id', id),
  Similar : (id?: string) => !id ? '/films/:id/similar' : '/films/:id/similar'.replace(':id', id),
  Promo : '/promo',
  Favorite : '/favorite',
  ChangeFavoriteStatus : '/wtw/favorite/:filmId/:status',
  Comments : (id?: string) => !id ? '/comments/:id' : '/comments/:id'.replace(':id', id),
  CheckLogin : '/login',
  Login : '/login',
  Logout : '/logout'
};
