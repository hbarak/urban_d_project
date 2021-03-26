import { types } from './actions'

export const mainReducer = function (state = {
    markers: [],
    layers: [],
    layersImage: null,
}, action) {
    switch (action.type) {
      case types.SET_LAYERS:
        return {
            ...state,
            layers: action.payload
        };
      case types.GET_LAYERS_IMAGE:
        return {
            ...state,
            layersImage: action.payload
        };
      case types.CHECK_LAYER_BY_ID:
        return {
            ...state,
            layers: state.layers.map(l =>{
              if(l.layerID === action.payload){
                return {
                  ...l,
                  checked: !l.checked,
                }
              }
              return l;
            })
        };
      default:
        return state;
    }
  };