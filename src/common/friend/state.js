import createItemsLogic from "../createItemsLogic";

const { add, remove, edit, reducer } = createItemsLogic("friends");

export const addFriend = add;
export const removeFriend = remove;
export const editFriend = edit;

const friendReducer = reducer;

export default friendReducer;
