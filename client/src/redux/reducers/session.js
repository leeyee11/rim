import { NEW_SESSION, NEW_MESSAGE } from "../actionTypes";
import initialState from './defaultState';


export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_MESSAGE: {
      const { sid,mid,uid,time,content } = action.payload;
      state.sessions.filter(session=>session.sid===sid)[0].messages.push({mid,uid,time,content})
      return {
        ...state
      };
    }
    case NEW_SESSION: {
      const { id } = action.payload;
      return {
        ...state,
        sessions: [...state.sessionsId, {"id":id,"message":""}]
      };
    }
    default:
      return state;
  }
}
