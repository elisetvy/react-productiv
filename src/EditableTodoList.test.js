import React from "react";
import { render } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";

describe("Editable todo list component", function (){
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

  test("Should render without crashing", function () {
    render(<EditableTodoList
      todos={initialTodos}
      update={() => console.log("test update")}
      remove={() => console.log("test remove")}
      />);
  });

  test("contains expected titles", function () {
    const result = render(<EditableTodoList
      todos={initialTodos}
      update={() => console.log("test update")}
      remove={() => console.log("test remove")}
      />);
    expect(result.queryByText("Code!")).toBeInTheDocument();
    expect(result.queryByText("Make dinner")).toBeInTheDocument();
    expect(result.queryByText("Go to bed")).toBeInTheDocument();
  });

  test("passes snapshot", function (){
    const { container } = render(<EditableTodoList
      todos={initialTodos}
      update={() => console.log("test update")}
      remove={() => console.log("test remove")}
      />);
    expect(container).toMatchSnapshot();
  });
});