import { fireEvent, screen, render } from "@testing-library/react";
import React from "react";
import Todo from "./Todo";

const setup = () => render(<Todo />);
// beforeEach(()=>setup());

test("testing the text", () => {
  setup();
  const linkElement = screen.getByText(/What needs to be done?/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link", () => {
  setup();
  const linkElement = screen.getByText(/TODO/i);
  expect(linkElement).toBeInTheDocument();
});

test("user  input", () => {
  setup();
  const input = screen.getByLabelText("What needs to be done?");

  fireEvent.change(input, { target: { value: "Cake2" } });
  expect(input.value.length).toBeGreaterThan(0);
  expect(input.value).toEqual("Cake2");
});

test("is button value changing", () => {
  setup();
  const input = screen.getByLabelText("What needs to be done?");
  const button = screen.getByText("Add #1");
  fireEvent.change(input, { target: { value: "Cake3" } });
  fireEvent.click(button);
  const linkElement = screen.getByText(/Cake3/i);
  expect(linkElement).toBeInTheDocument();
  expect(button.textContent).toBe("Add #2");
});
