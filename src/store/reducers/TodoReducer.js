import { SET_TODO } from "../actions/todo";
import immutable from "immutability-helper";

const initialState = {
  todos: []
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODO:
      return immutable(state, { todos: { $set: action.payload } });
    default:
      return state;
  }
};

export default TodoReducer;
