import { types } from './actions'

export const mainReducer = function (state = {
    markers: [],
    layers: [],
}, action) {
    switch (action.type) {
      case types.SET_MARKERS:
        return {
            ...state,
            markers: action.payload
        };
      case types.SET_LAYERS:
        return {
            ...state,
            layers: action.payload
        };
      default:
        return state;
    }
  };