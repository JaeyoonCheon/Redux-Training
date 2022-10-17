import { createStore, combineReducers } from "redux";
import timelineReducer, {
  addTimeline,
  removeTimeline,
  editTimeline,
  increaseNextPage,
} from "./timeline/state";
import friendReducer, {
  addFriend,
  removeFriend,
  editFriend,
} from "./common/friend/state";

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});
const store = createStore(reducer);
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

store.dispatch(addTimeline({ id: 1, desc: "1" }));
store.dispatch(addTimeline({ id: 2, desc: "2" }));
store.dispatch(increaseNextPage());
store.dispatch(editTimeline({ id: 2, desc: "2-1" }));
store.dispatch(removeTimeline({ id: 1, desc: "1" }));

store.dispatch(addFriend({ id: 1, desc: "1" }));
store.dispatch(addFriend({ id: 2, desc: "2" }));
store.dispatch(editFriend({ id: 2, desc: "2-1" }));
store.dispatch(removeFriend({ id: 1, desc: "1" }));
