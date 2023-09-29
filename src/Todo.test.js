import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

describe("Todo component", function (){
  test("Should render without crashing", function () {
    render(<Todo id={1} title="test" priority={1} description="moretest"/>);
  });

  test("contains expected title", function () {
    const result = render(<Todo id={1}
                                title="test"
                                priority={1}
                                description="moretest"/>);
    expect(result.queryByText("test")).toBeInTheDocument();
  });

  test("passes snapshot", function (){
    const { container } = render(<Todo id={1}
                                      title="test"
                                      priority={1}
                                      description="moretest"/>);
    expect(container).toMatchSnapshot();
  });
});