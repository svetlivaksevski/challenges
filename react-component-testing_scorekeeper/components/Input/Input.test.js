import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      labelText="Name of game"
      placeholder="e.g. Dodelido"
      name="nameOfGame"
      required
    />
  );

  const nameOfGameInput = screen.getByLabelText("Name of game");
  expect(nameOfGameInput).toBeInTheDocument();
  expect(nameOfGameInput).toHaveAttribute("placeholder", "e.g. Dodelido");
  expect(nameOfGameInput).toHaveAttribute("name", "nameOfGame");
  expect(nameOfGameInput).toHaveAttribute("type", "text");
  expect(nameOfGameInput).toHaveAttribute("required");
});

test("calls callback on every user input", async () => {
  const handleUserInput = jest.fn();

  render(<Input onChange={handleUserInput} />);
  const inputHandler = screen.getByRole("textbox");

  await userEvent.type(inputHandler, "hello");

  expect(handleUserInput).toHaveBeenCalledTimes(5);
});
