import { Route, Routes, BrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/app-layout";
import AddTodoPage from "./pages/add-todo-page/add-todo-page";
import HomePage from "./pages/home-page/home-page";
import { TodoProvider } from "./contexts/todo-context/todo-context";

function App() {
  return (
    <BrowserRouter>
      <TodoProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="addtodo" element={<AddTodoPage />} />
          </Route>
        </Routes>
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App;
