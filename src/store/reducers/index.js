import { combineReducers } from 'redux'

import listMovie from './Movie/List'
import detailMovie from './Movie/Detail'
import listFavorit from './Movie/Favorit'

export default combineReducers({
  listMovie,
  detailMovie,
  listFavorit
})