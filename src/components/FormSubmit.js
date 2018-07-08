import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/actions/todo";

class FromSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSumitForm = this.handleSumitForm.bind(this);
  }

  handleInputChange(e) {
    this.setState({ message: e.target.value });
  }

  handleSumitForm(e) {
    e.preventDefault();
    this.props.addTodo(this.state.message);
    this.setState({message:""});
  }

  render() {
    return (
      <div style={{ margin: 2 }}>
        <form onSubmit={this.handleSumitForm} style={{ display: "flex" }}>
          <input
            type="text"
            value={this.state.message}
            onChange={this.handleInputChange}
            style={{ flex: 9, height: 30 }}
          />
          <button type="submit" style={{ height: 35, flex: 1 }}>
            <strong>Add to List</strong>
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  todos: state.todo.todos
});
const mapDispatchToProps = dispatch => ({
  addTodo: message => dispatch(addTodo(message)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FromSubmit);
