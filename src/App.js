import React, { Component } from "react";
import TodosAdd from "./components/todosAdd";
import Todos from "./components/todos";
import "./index.css";
import Header from "./components/header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          completed: false,
          title: "This is your first To-do item."
        }
      ],
      todoTitle: ""
    };
    this.onChange = this.onChange.bind(this);
    this.handleSumbitTodo = this.handleSumbitTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.taskCompleted = this.taskCompleted.bind(this);
  }

  //When the users submits the todo item
  handleSumbitTodo = e => {
    e.preventDefault();
    const newTodoItem = {
      title: this.state.todoTitle,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodoItem],
      todoTitle: ""
    });
  };

  //Handles users input
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //Deleting and item from the list
  deleteTodo = () => {
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    });
  };

  //Adds text decoration to show a completed todo item.
  taskCompleted = data => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item === data) {
          item.completed = !item.completed;
        }
        return item;
      })
    });
  };

  render() {
    const { todoTitle } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <Header />
            <div className="card shadow-lg">
              <h5 className="card-header text-center">To-do List</h5>
              <div className="card-body">
                <TodosAdd
                  onChange={this.onChange}
                  todoTitle={todoTitle}
                  submitTodo={this.handleSumbitTodo}
                  deleteTodo={this.deleteTodo}
                />
                <Todos
                  todos={this.state.todos}
                  taskCompleted={this.taskCompleted}
                />
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger btn-sm align-content-center"
                  onClick={() => {
                    this.deleteTodo();
                  }}
                >
                  Clear completed items
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
