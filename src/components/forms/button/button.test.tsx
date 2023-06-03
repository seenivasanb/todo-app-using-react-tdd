import { render, screen } from "@testing-library/react";
import ButtonComponent from "./button";
import userEvent from "@testing-library/user-event";

describe("Button Component", () => {
  test("should render edit button", async () => {
    render(<ButtonComponent icon="edit" />);
    const buttonElement = screen.getByRole("button");
    const editIcon = screen.getByTestId("edit-icon");

    expect(buttonElement).toBeInTheDocument();
    expect(editIcon).toBeInTheDocument();
  });

  test("should render remove button", async () => {
    render(<ButtonComponent icon="remove" />);
    const buttonElement = screen.getByRole("button");
    const deleteIcon = screen.getByTestId("delete-icon");

    expect(buttonElement).toBeInTheDocument();
    expect(deleteIcon).toBeInTheDocument();
  });

  test('should call the click event', async () => { 
    const mockHandleEdit = jest.fn();
    render(<ButtonComponent icon="edit" handleClick={mockHandleEdit} />);
    const buttonElement = screen.getByRole("button");

    await userEvent.click(buttonElement);

    expect(mockHandleEdit).toBeCalledTimes(1);
   });
});
