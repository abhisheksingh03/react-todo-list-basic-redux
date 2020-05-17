import React, { Component } from "react";
import { connect } from "react-redux";

import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {this.props.items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleEdit={() => this.props.onEdit(item.id)}
              handleDelete={() => this.props.onDelete(item.id)}
            />
          );
        })}

        <button
          type="submit"
          className="btn btn-danger btn-block text-capitalize mt-5"
          // onClick={clearList}
          onClick={this.props.onClear}
        >
          clear list
        </button>
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return { items: state.items };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClear: () => dispatch({ type: "ONCLEAR" }),
    onEdit: (id) => dispatch({ type: "ONEDIT", payload: { id } }),
    onDelete: (id) => dispatch({ type: "ONDELETE", payload: { id } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
