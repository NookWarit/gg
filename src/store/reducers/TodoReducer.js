import { SET_TODO, SET_TODOS, DELETE_TODO } from "../actions/todo";
import immutable from "immutability-helper";

const initialState = {
  todos: []
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return immutable(state, { todos: { $set: action.payload } });
    case SET_TODO:
      return immutable(state, { todos: { $push: [action.payload] } });
    // case DELETE_TODO:
    //   let oldState = state;
    //   let index = oldState.findIndex(item => (item.id = action.payload));
    //   return immutable(state, { todos: { $splice: [[index, 1]] } });

    // case CHANGED_COMPLETE_STATE:
    //   let index = oldState.findIndex(index => (item.id = action.payload));
    //   //
    //   return immutable(state, {
    //     todos: { [index]: { complete: { $set: action.payload } } }
    //   });
    default:
      return state;
  }
};

export default TodoReducer;
