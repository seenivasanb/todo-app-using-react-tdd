import FilterButtons from "../../components/filter-buttons/filter-buttons";
import TodoListComponent from "../../components/todo-list/todo-list";

const HomePage = () => {
  
  const todoList = [
    { id: 1, task: "Test Todo", isCompleted: false },
    { id: 2, task: "Learn React", isCompleted: true },
  ];

  return (
    <>
      <FilterButtons />
      <TodoListComponent todos={todoList} />
    </>
  );
};

export default HomePage;
