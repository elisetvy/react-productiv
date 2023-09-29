import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";

describe("Top todo component", function (){
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
    render(<TopTodo todos={initialTodos} />);
  });

  test("contains expected title", function () {
    const result = render(<TopTodo todos={initialTodos} />);
    expect(result.queryByText("Cook something healthy")).toBeInTheDocument();
  });

  test("passes snapshot", function (){
    const { container } = render(<TopTodo todos={initialTodos} />);
    expect(container).toMatchSnapshot();
  });
});