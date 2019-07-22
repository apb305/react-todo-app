import React, { Component } from "react";
import TodosAdd from "./components/todosAdd";
import Todos from "./components/todos";
import "./index.css";
import Header from "./components/header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoTitle: "",
      errMsg: "No todos available."
    };
    this.onChange = this.onChange.bind(this);
    this.handleSumbitTodo = this.handleSumbitTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.taskCompleted = this.taskCompleted.bind(this);
  }

  componentDidMount() {
    if (!JSON.parse(localStorage.getItem("todos"))) {
      this.setState({
        errMsg: "No todos available."
      });
    } else {
      this.setState({
        todos: JSON.parse(localStorage.getItem("todos"))
      });
    }
  }

  //Submit todo item
  async handleSumbitTodo(e) {
    e.preventDefault();
    const newTodoItem = {
      title: this.state.todoTitle,
      completed: false
    };
    await this.setState({
      todos: [...this.state.todos, newTodoItem],
      todoTitle: ""
    });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  //User Input
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //Delete item from the list
  deleteTodo = () => {
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    });
    let todosData = this.state.todos.filter(data => !data.completed);
    localStorage.setItem("todos", JSON.stringify(todosData));
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
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };

  render() {
    const { todoTitle, errMsg, todos } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <Header />
            <div className="card shadow-lg mb-5">
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
                  errMsg={errMsg}
                />
                <p className="text-center">{todos.length < 1 ? errMsg : ""}</p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    this.deleteTodo();
                  }}
                >
                  Clear checked items
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
