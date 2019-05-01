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
        this.state.todos.length <= 1 ? "Start adding some to-do items! 😀" : "",
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
    const { todoTitle, todoListEmpty } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 text-left mt-5 p-3 mx-auto">
            <Header />
            <div className="card shadow-lg rounded-0">
              <h5 className="card-header text-center">Todo List</h5>
              <div className="card-body">
                <TodosAdd
                  hidden={todoListEmpty}
                  onChange={this.onChange}
                  todoTitle={todoTitle}
                  submitTodo={this.handleSumbitTodo}
                />
                <Todos
                  todos={this.state.todos}
                  taskCompleted={this.taskCompleted}
                  deleteTodo={this.deleteTodo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
