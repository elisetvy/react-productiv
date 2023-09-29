import React from "react";
import { render, fireEvent } from "@testing-library/react";
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

    const titleField = document.getElementById("newTodo-title");
    const descriptionField = document.getElementById("newTodo-description");
    const priorityField = document.getElementById("newTodo-priority");

    expect(titleField).toBeInTheDocument();
    expect(descriptionField).toBeInTheDocument();
    expect(priorityField).toBeInTheDocument();
  });

  test("changes state with changes to form inputs", function(){
    const result = render(<TodoForm
      initialFormData={BLANK_FORM_DATA}
      handleSave={() => console.log("test handle save")}
      />);

    const titleField = document.getElementById("newTodo-title");
    const descriptionField = document.getElementById("newTodo-description");
    const priorityField = document.getElementById("newTodo-priority");

    fireEvent.change(titleField, {target: {value: "newTitle"}});
    fireEvent.change(descriptionField, {target: {value: "newDesc"}});
    fireEvent.change(priorityField, {target: {value: 1}});

    expect(titleField.value).toBe("newTitle");
    expect(descriptionField.value).toBe("newDesc");
    expect(priorityField.value).toBe("1");
  });

  test("passes snapshot", function (){
    const { container } = render(<TodoForm
      initialFormData={BLANK_FORM_DATA}
      handleSave={() => console.log("test handle save")}
      />);
    expect(container).toMatchSnapshot();
  });
});