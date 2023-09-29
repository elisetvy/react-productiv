import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

const BLANK_FORM_DATA = {title: "", priority: 3, description:""}

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {

  const [todos, setTodos] = useState(initialTodos)

  /** add a new todo to list */
  function create(newTodo) {
    const todo = {...newTodo, id: uuid()};
    return todo;
    //TODO: pass into form
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    const filteredTodos = todos.filter(todo => todo.id !== updatedTodo.id);
    setTodos([...filteredTodos, updatedTodo]);

  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  /** adds new todo to state */
  function handleSave(formData){
    const todo = create(formData);
    setTodos([...todos, todo]);
  }

  return (
      <main className="TodoApp">
        <div className="row">
          {/* TODO: ternary */}
          <div className="col-md-6">
            {todos.length !== 0 && <EditableTodoList
              todos={todos}
              update={update}
              remove={remove}
            />}
            {todos.length === 0 &&
            <span className="text-muted">You have no todos.</span>}
          </div>

          <div className="col-md-6">
            {todos.length !== 0 &&
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo todos={todos}/>
            </section>}


            <section>
              <h3 className="mb-3">Add Nü</h3>
              <TodoForm
                initialFormData={BLANK_FORM_DATA}
                handleSave={handleSave}
              />
            </section>
          </div>

        </div>
      </main>
  );
}

export default TodoApp;