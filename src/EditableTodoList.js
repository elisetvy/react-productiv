import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos, update, remove}) {
  return (
      <div>
        {/* <EditableTodo todo={{id: 4, title:"test", description:"testing", priority: 1 }}/> */}
        {todos.map(todo => (
          <EditableTodo key={todo.id} todo={todo} update={update} remove={remove}/>
        ))}
        {/*   FIXME  */}
        {/* <EditableTodo />
        <EditableTodo />
        <EditableTodo /> */}
      </div>
  );
}

export default EditableTodoList;
