import React from "react";
import { render, fireEvent } from "@testing-library/react";
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
      remove={() => console.log("test remove")}
      />);
  });

  test("contains expected title", function () {
    const result = render(<EditableTodo
      todo={initialTodo}
      update={() => console.log("test update")}
      remove={() => console.log("test remove")}
      />);
    expect(result.queryByText("Code!")).toBeInTheDocument();
  });

  test("changes state when edit button clicked", function() {
    const result = render(<EditableTodo
      todo={initialTodo}
      update={() => console.log("test update")}
      remove={() => console.log("test remove")}
      />);

    const editButton = document.querySelector(".EditableTodo-toggle");
    fireEvent.click(editButton);

    const newTodoForm = document.querySelector(".NewTodoForm");
    expect(newTodoForm).toBeInTheDocument();

    const titleField = document.getElementById("newTodo-title");
    expect(titleField.value).toBe("Code!");
  })

  test("hides edit form when clicking go button", function() {
    const result = render(<EditableTodo
      todo={initialTodo}
      update={() => console.log("test update")}
      remove={() => console.log("test remove")}
      />);

    const editButton = document.querySelector(".EditableTodo-toggle");
    fireEvent.click(editButton);

    const goButton = document.querySelector(".NewTodoForm-addBtn");
    fireEvent.click(goButton);

    const newTodoForm = document.querySelector(".NewTodoForm");
    expect(newTodoForm).not.toBeInTheDocument();
  })

  test("passes snapshot", function (){
    const { container } = render(<EditableTodo
      todo={initialTodo}
      update={() => console.log("test update")}
      remove={() => console.log("test remove")}
      />);
    expect(container).toMatchSnapshot();
  });
});