import React, { Component } from "react";
import TodosAdd from "./components/todosAdd";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoTitle: "",
      todoListEmpty: "Start adding some to-do items! 😀"
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
      todoTitle: "",
      todoListEmpty: ""
    });
  };

  //Handles users input
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //Deleting and item from the list
  deleteTodo = data => {
    this.setState({
      todoListEmpty:
        this.state.todos.length <= 1 ? "Start adding some todo items! 😀" : "",
      todos: this.state.todos.filter(item => item !== data)
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
    const todos = this.state.todos.map((data, id) => {
      const styles = {
        textDecoration: data.completed ? "line-through" : "none", // Add text decoration if box is checked.
        textDecorationColor: data.completed ? "red" : "none",
        textDecorationStyle: data.completed ? "wavy" : "none"
      };
      return (
        <div key={id}>
          <p style={styles} className="font-weight-bold">
            <span className="mr-2">
              <input
                type="checkbox"
                checked={data.completed}
                onChange={() => this.taskCompleted(data)}
              />
            </span>{" "}
            {data.title}{" "}
            <span>
              <i
                onClick={() => this.deleteTodo(data)}
                className="btn fas fa-trash-alt text-danger float-right"
              />
            </span>
          </p>
          <hr className="font-weight-bold" />
        </div>
      );
    });
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 text-left mt-5 p-3 mx-auto">
              <p className="mb-5 text-center font-weight-bold">
                A To-Do Application written by Anthony Bernard. I will
                continue adding features to this project over time. See code for
                this project{" "}
                <a
                  href="https://github.com/apb305/react-todo-app"
                  target="noopener noreferrer"
                >
                  here.
                </a>{" "}
                This project was built with the{" "}
                <a href="https://reactjs.org/" target="noopener noreferrer">
                  REACT JS
                </a>
                {" "}library.
              </p>
              <div className="card shadow-lg rounded-0">
                <h5 className="card-header text-center">Todo List</h5>
                <div className="card-body">
                  <TodosAdd
                    hidden={this.state.todoListEmpty}
                    onChange={this.onChange}
                    todoTitle={this.state.todoTitle}
                    submitTodo={this.handleSumbitTodo}
                  />
                  {todos}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
