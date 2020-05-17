import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
