import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({todos}) {
  // lowest-priority # is the highest priority
  const top = todos.reduce(
      (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);

  return <Todo
    id={top.id}
    title={top.title}
    description={top.description}
    priority={top.priority}
    />;
}

export default TopTodo;