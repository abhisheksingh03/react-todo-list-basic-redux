import React, { Component } from "react";
import { connect } from "react-redux";

class TodoInput extends Component {
  handleChange = (e) => {
    this.props.onChange(e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.props.id,
      title: this.props.item,
    };
    this.props.onSubmit(newItem);
  };

  render() {
    return (
      <div className="card card-body my-3">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add a todo item"
              value={this.props.item}
              // value={item}
              // value={this.state.item}
              onChange={this.handleChange}
            />
            <button
              type="submit"
              className={
                this.props.editItem
                  ? "btn btn-block btn-success mt-3 text-capitalize"
                  : "btn btn-block btn-primary mt-3 text-capitalize"
              }
            >
              {this.props.editItem ? "edit item" : "add item"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.item,
    id: state.id,
    editItem: state.editItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (value) => dispatch({ type: "ONCHANGE", payload: { value } }),
    onSubmit: (newItem) => dispatch({ type: "ONSUBMIT", payload: { newItem } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
