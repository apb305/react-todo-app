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
          <p style={styles}>
            <span className="mr-2">
              <input
                type="checkbox"
                checked={data.completed}
                onChange={() => this.props.taskCompleted(data)}
              />
            </span>{" "}
            {data.title}
            {data.completedText}
          </p>
          <hr />
        </div>
      );
    });
  }
}

export default Todos;
