import React from "react";

function Header() {
  return (
    <div>
      <p className="mb-5 text-center font-weight-bold">
        A To-Do Application written by Anthony Bernard. I will continue adding
        features to this project over time. See code for this project{" "}
        <a
          href="https://github.com/apb305/react-todo-app"
          target="noopener noreferrer"
        >
          here.
        </a>{" "}
        This project was built with the{" "}
        <a href="https://reactjs.org/" target="noopener noreferrer">
          REACT JS
        </a>{" "}
        library.
      </p>
    </div>
  );
}

export default Header;
