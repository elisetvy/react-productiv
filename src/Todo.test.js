import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

describe("Todo component", function (){
  const initialTodo= {
    id: 1,
    title: "Code!",
    description: "Write some code",
    priority: 2,
  }

  test("Should render without crashing", function () {
    render(<Todo todo={initialTodo} />);
  });

  test("contains expected title", function () {
    const result = render(<Todo todo={initialTodo} />);
    expect(result.queryByText("Code!")).toBeInTheDocument();
  });

  test("passes snapshot", function (){
    const { container } = render(<Todo todo={initialTodo} />);
    expect(container).toMatchSnapshot();
  });
});