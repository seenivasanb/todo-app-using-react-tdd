import { createContext, useReducer } from "react";
import todoReducer, { TodoReducerAction, TodoReducerStateType, initialState } from "../../reducers/todo-reducer/todo-reducer";



type TodoContextProps = {
    state: TodoReducerStateType;
    dispatch: React.Dispatch<TodoReducerAction>
}

const todoContextDefaultValue: TodoContextProps = {
    dispatch: () => null,
    state: {
        todos: [],
        loading: false,
        error: undefined
    }
}

export const TodoContext = createContext(todoContextDefaultValue);

export const TodoProvider = ({children}: React.PropsWithChildren<{}>) => {

    const [state, dispatch] = useReducer(todoReducer, initialState);

    return <TodoContext.Provider value={{state, dispatch}}>
        {children}
    </TodoContext.Provider>
}