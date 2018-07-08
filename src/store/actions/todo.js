import axios from "axios";
import config from "../../config";

export const SET_TODO = "SET_TODO";

export const getTodo = () => async dispatch =>{
    let todos = await axios.get(config.server.api+"/todos");
    dispatch(setTodo(todos.data));
}

export const addTodo = data => dispatch => {
    // let todos = axios.get(config.server.api+"/todos");
    // dispatch(setTodo(todos.data));
};

const setTodo = data => ({
    type: SET_TODO,
    payload: data
});