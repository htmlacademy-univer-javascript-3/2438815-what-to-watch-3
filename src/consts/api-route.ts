export enum APIRoute {
  Films = '/films',
  Film = '/films/:id',
  Similar = '/films/:id/similar',
  Promo = '/promo',
  Favorite = '/favorite',
  ChangeFavoriteStatus = '/wtw/favorite/:filmId/:status',
  Comments = '/comments/:id',
  Login = '/login',
  Logout = '/logout'
}
