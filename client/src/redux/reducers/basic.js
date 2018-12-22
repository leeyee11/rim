import { RESIZE } from "../actionTypes";
import initialState from './defaultState';


export default function(state = initialState, action) {
  switch (action.type) {
    case RESIZE: {
      const { resize } = action.payload;
      return {
        ...state,
        fullScreen:!state.fullScreen
      };
    }
    default:
      return state;
  }
}
