import React from "react";

function TodosAdd(props) {
  return (
    <div>
      <form onSubmit={props.submitTodo}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            name="todoTitle"
            value={props.todoTitle}
            onChange={props.onChange}
            placeholder="Enter todo item"
            aria-describedby="basic-addon2"
            required
          />
          <div className="input-group-append">
            <button
              className="btn btn-secondary"
              type="submit"
              onSubmit={props.sumbitTodo}
            >
              Add
            </button>
          </div>
        </div>
      </form>
      <p className="text-center">{props.hidden}</p>
      <br />
    </div>
  );
}

export default TodosAdd;
