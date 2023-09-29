import React from "react";
import { render } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

describe("Editable todo component", function (){
  const initialTodo= {
      id: 1,
      title: "Code!",
      description: "Write some code",
      priority: 2,
    }

  test("Should render without crashing", function () {
    render(<EditableTodo
      todo={initialTodo}
      update={() => console.log("test update")}
      remove={() => console.log("test remove")} />);
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