import {
 FAVORIT_MOVIE_SET,
 FAVORIT_MOVIE_REMOVE,
} from 'store/types'

export const setMovie = data => ({
  type:FAVORIT_MOVIE_SET,
  data,
});

export const removeMovie = data => ({
  type:FAVORIT_MOVIE_REMOVE,
  data,
});

