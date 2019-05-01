import React, { Component } from "react";

class Todos extends Component {
  render() {
    return this.props.todos.map((data, id) => {
      const styles = {
        textDecoration: data.completed ? "line-through" : "none", // Add text decoration if box is checked.
        textDecorationColor: data.completed ? "red" : "none",
        fontStyle: data.completed ? "italic" : "normal"
      };
      return (
        <div key={id}>
          <ul className="list-group">
            <li style={styles} className="list-group-item">
              <input
                type="checkbox"
                checked={data.completed}
                onChange={() => this.props.taskCompleted(data)}
              />{" "}
              {data.title}{" "}
              <i
                onClick={() => this.props.deleteTodo(data)}
                className="btn fas fa-trash-alt text-danger float-right"
              />{" "}
            </li>
          </ul>
        </div>
      );
    });
  }
}

export default Todos;
