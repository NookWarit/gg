import React from "react";
import {connect } from "react-redux";
const ListItems = props => (
  <React.Fragment>
    {props.todos.map((todo, index) => (
      <div
        style={{
          backgroundColor: "#fefefe",
          borderColor: "#ccc",
          borderWidth: 1,
          borderStyle: "solid",
          borderRadius: 5,
          margin: 2,
          padding: 5,
          paddingTop: 10,
          paddingBottom: 19
        }}
        key={todo.id}
      >
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => props.handleCheckboxCheck(index, !todo.complete)}
        />{" "}
        {!todo.complete ? todo.name : <s> {todo.name}</s>}
      </div>
    ))}
  </React.Fragment>
);
const mapStateToProps = state => ({
  todos: state.todo.todos
});
// const mapDispatchToProps = dispatch => ({

// });
export default connect(mapStateToProps)(ListItems);
