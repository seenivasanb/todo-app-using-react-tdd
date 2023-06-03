import { render, screen } from "@testing-library/react";
import CheckboxComponent from "./checkbox";

describe("Checkbox Component", () => {
  test("should render correctly", () => {
    render(<CheckboxComponent isCompleted={false} />);

    const inputElement = screen.getByRole("checkbox");
    const iconElement = screen.getByTestId("icon");

    expect(inputElement).not.toBeChecked();
    expect(iconElement).toBeInTheDocument();
  });

  test('should checked the checkbox', () => {
    render(<CheckboxComponent isCompleted={true} />);

    const inputElement = screen.getByRole("checkbox");
    
    expect(inputElement).toBeChecked();    
  });
});
