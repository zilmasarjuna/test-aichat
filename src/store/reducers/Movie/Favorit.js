import {
  FAVORIT_MOVIE_SET,
  FAVORIT_MOVIE_REMOVE,
} from 'store/types'

const initialState = {
  isFetching: true,
  data: [],
  error: null,
}

export default function favorit(state = initialState, action) {
  switch(action.type) {
    case FAVORIT_MOVIE_SET: 
      let data = state.data;
      data.push(action.data)
      return {
        ...state,
        isFetching: false,
        data: data,
        error: null,
      }
    case FAVORIT_MOVIE_REMOVE: 
      let dataFilter = state.data.filter(item => item.imdbID !== action.data.imdbID);
      return {
        ...state,
        isFetching: false,
        data: dataFilter,
        error: null,
      }
    default:
      return state
  }
}