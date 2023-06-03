import { render, screen } from "@testing-library/react";
import TodoComponent from "./todo";
import userEvent from "@testing-library/user-event";

describe("Todo Component", () => {
  const mockTodo = {
    id: 1,
    task: "Learn React",
    isCompleted: false,
  };

  test("should render correctly", () => {
    render(<TodoComponent {...mockTodo} />);

    const checkboxElement = screen.getByRole("checkbox", {
        checked: false
    });
    expect(checkboxElement).toBeInTheDocument();
    const taskElement = screen.getByText(mockTodo.task);
    expect(taskElement).toBeInTheDocument();
    const editButton = screen.getByTestId("edit-icon");
    expect(editButton).toBeInTheDocument();
    const removeButton = screen.getByTestId("delete-icon");
    expect(removeButton).toBeInTheDocument();
  });

  test("should checked the checkbox", () => {
    render(<TodoComponent {...mockTodo} isCompleted={true} />);

    const checkboxElement = screen.getByRole("checkbox", {
        checked: true
    });
    expect(checkboxElement).toBeInTheDocument();
  });

  test('should call the handlers', async () => { 
    const mockHandleStatusChange = jest.fn();
    const mockHandleEdit = jest.fn();
    const mockHandleRemove = jest.fn();

    render(<TodoComponent {...mockTodo}
        handleStatusChange={mockHandleStatusChange}
        handleEdit={mockHandleEdit}
        handleRemove={mockHandleRemove}
         />);

    const checkboxElement = screen.getByRole("checkbox", {
        checked: false
    });
    const editButton = screen.getByTestId("edit-icon");
    const removeButton = screen.getByTestId("delete-icon");

    await userEvent.click(checkboxElement);
    await userEvent.click(editButton);
    await userEvent.click(removeButton);

    expect(mockHandleStatusChange).toBeCalledTimes(1);
    expect(mockHandleEdit).toBeCalledTimes(1);
    expect(mockHandleRemove).toBeCalledTimes(1);
   });
});
