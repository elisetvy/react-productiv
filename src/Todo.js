import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({ id, title, description, priority } ) {
  console.log("TODO TITLE IS: ", title);
  const testTitle = title;
  console.log(testTitle);
  return (
      <div className="Todo" id={id}>
        {/* <p>{testTitle}</p> */}
        <div><b>{title}</b> <small>(priority: {priority})</small></div>
        <div><small>{description}</small></div>
      </div>
  );
}

export default Todo;
