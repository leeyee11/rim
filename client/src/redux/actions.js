import { RESIZE, NEW_MESSAGE, NEW_SESSION } from "./actionTypes";

// let userId = 0;

export const newMessage = ({sid,mid,uid,time,content}) => ({
  type: NEW_MESSAGE,
  payload: {
    sid: sid,
    mid: mid,
    uid: uid,
    time: time,
    content: content
  }
});

export const newSession = id => ({
  type: NEW_SESSION,
  payload: { id }
});

