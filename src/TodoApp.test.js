import React from "react";
import { render, fireEvent, debug } from "@testing-library/react";
import TodoApp from "./TodoApp";

describe("TodoApp component", function() {
  const initialTodos=[
    {
      id: 1,
      title: "Code!",
      description: "Write some code",
      priority: 2,
    },
    {
      id: 2,
      title: "Make dinner",
      description: "Cook something healthy",
      priority: 1,
    },
    {
      id: 3,
      title: "Go to bed",
      description: "In bed by 11:15",
      priority: 3,
    },
  ]

  test("renders without crashing", function(){
    render(<TodoApp initialTodos={initialTodos}/>)
  });

  test("renders new todo upon form submission", function(){
    //const { container, debug } = render(<TodoApp initialTodos={initialTodos}/>);

    const result = render(<TodoApp initialTodos={initialTodos}/>);
    const titleField = document.getElementById("newTodo-title");
    const descriptionField = document.getElementById("newTodo-description");
    const priorityField = document.getElementById("newTodo-priority");
    const todoForm = document.querySelector(".NewTodoForm");

    fireEvent.change(titleField, {target: {value: "newTitle"}});
    fireEvent.change(descriptionField, {target: {value: "newDesc"}});
    fireEvent.change(priorityField, {target: {value: 1}});

    fireEvent.submit(todoForm, {target: {title: {value: "newTitle"},
                                        description: {value: "newDesc"},
                                       priority: {value: 1}}});

    const allTodos = document.querySelectorAll(".Todo");

    expect(result.queryByText("newTitle")).toBeInTheDocument();
    //Four listed, one in the top.
    expect(allTodos.length).toBe(5);
  });

  test("rendering when initialTodos is empty", function(){
    const result = render(<TodoApp initialTodos={[]}/>);

    const allTodos = document.querySelectorAll(".Todo");

    expect(result.queryByText("You have no todos.")).toBeInTheDocument();
    expect(allTodos.length).toBe(0);

  });

  test("deletion of a todo", function() {
    const result = render(<TodoApp initialTodos={[{
      id: 2,
      title: "Make dinner",
      description: "Cook something healthy",
      priority: 1,
    }]}/>);

    const firstDelButton = document.querySelector(".EditableTodo-delBtn");
    //const firstTodo = document.querySelector(".Todo");

    fireEvent.click(firstDelButton);

    const allTodos = document.querySelectorAll(".Todo");

    expect(allTodos.length).toBe(0);
    expect(result.queryByText("Make dinner")).not.toBeInTheDocument();
  });

  test("passes snapshot", function (){
    const { container } = render(<TodoApp initialTodos={initialTodos}/>);
    expect(container).toMatchSnapshot();
  });
});