import { combineReducers } from "redux";
import TodoReducer from "./TodoReducer";
import UserReducer from "./UserReducer";

const RootReducer = combineReducers({
    todo: TodoReducer,
    user: UserReducer
});
export default RootReducer;