import React from "react";

function Header() {
  return (
    <div>
      <p className="my-2 text-center font-weight-bold">
        This is a{" "}
        <a href="https://reactjs.org/" target="noopener noreferrer">
          REACT JS
        </a>{" "}
        To-Do App written by Anthony Bernard. See the code for this project{" "}
        <a
          href="https://github.com/apb305/react-todo-app"
          target="noopener noreferrer"
        >
          here.
        </a>
      </p>
    </div>
  );
}

export default Header;
