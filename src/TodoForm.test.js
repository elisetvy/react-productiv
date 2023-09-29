import React from "react";
import { render } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("Todo form component", function (){
  const BLANK_FORM_DATA = {title: "", priority: 3, description:""};

  test("Should render without crashing", function () {
    render(<TodoForm
      initialFormData={BLANK_FORM_DATA}
      handleSave={() => console.log("test handle save")}
      />);
  });

  test("contains expected inputs", function () {
    const result = render(<TodoForm
      initialFormData={BLANK_FORM_DATA}
      handleSave={() => console.log("test handle save")}
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