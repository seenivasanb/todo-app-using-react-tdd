import { render, screen } from "@testing-library/react";
import TodoListComponent from "./todo-list";

describe("Todo List Component", () => {
  test("should render correctly", () => {
    const todoList = [
      { id: 1, task: "Test Todo", isCompleted: false },
      { id: 2, task: "Learn React", isCompleted: true },
    ];

    render(<TodoListComponent todos={todoList} />);

    const allTodos = screen.getAllByRole("checkbox");
    expect(allTodos).toHaveLength(2);
  });
});
