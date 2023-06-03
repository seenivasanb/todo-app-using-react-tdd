import { TodoComponentProps } from "../../components/todo/todo"

export type TodoReducerStateType = {
    todos: TodoComponentProps[],
    loading: boolean,
    error?: string
}

export type TodoReducerAction = {
    type: "FETCH_TODOS"
} | {
    type: "FETCH_SUCCESS",
    payload: TodoComponentProps[]
} | {
    type: "FETCH_ERROR",
    payload: string
}

export const initialState: TodoReducerStateType = {
    todos: [],
    loading: false,
    error: ""
}

const todoReducer = (state: TodoReducerStateType, action: TodoReducerAction): TodoReducerStateType => {
    switch (action.type) {
        case 'FETCH_TODOS':
            return { ...state, loading: true };

        case 'FETCH_SUCCESS':
            return { ...state, loading: false, todos: action.payload };

        case 'FETCH_ERROR':
            return { ...state, loading: false, error: action.payload };
    
        default:
            return state;
    }
}

export default todoReducer;