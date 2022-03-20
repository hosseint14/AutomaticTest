import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("render 'Hello World' as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    //   expect(helloWorldElement).not.toBeInTheDocument(
    expect(helloWorldElement).toBeInTheDocument;
  });

  test("render 'good to see you' when button was not click", () => {
    render(<Greeting />);
    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument;
  });

  test("render 'changed!' when button was click", () => {
    //Arrange
    render(<Greeting />);

    //Act
    // const buttonElement = screen.getByText('change text')
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText("changed!");
    expect(outputElement).toBeInTheDocument;
  });

  test('dose not render "Good to See you" if the button was click', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
