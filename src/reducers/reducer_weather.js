import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
console.log(action)
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state]
      //spread?

      //never mutate state, if you have to, return
      // a new instance of state

  }

  return state;
}
