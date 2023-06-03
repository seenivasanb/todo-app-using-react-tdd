export const getAllTodos = async (): Promise<any> => {
  return [
    { id: 1, task: "Test Todo", isCompleted: false },
    { id: 2, task: "Learn React", isCompleted: true },
    { id: 3, task: "Test Todo", isCompleted: true },
    { id: 4, task: "Learn React", isCompleted: false },
  ]
};