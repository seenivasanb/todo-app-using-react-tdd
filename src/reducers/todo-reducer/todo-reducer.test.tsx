import todoReducer, { TodoReducerAction, TodoReducerStateType, initialState } from "./todo-reducer";

describe("Todo Reducer", () => {
    test('handles FETCH_TODOS action', () => { 
        const action: TodoReducerAction = {type: "FETCH_TODOS"};
        const newState: TodoReducerStateType = todoReducer(initialState, action);
        expect(newState.loading).toBe(true);
     });

     test('handles FETCH_SUCCESS action', () => {
        const action: TodoReducerAction = {
            type: "FETCH_SUCCESS", 
            payload: [
                {id: 1, isCompleted: false, task: "test 1"},
                {id: 2, isCompleted: true, task: "test 1"}
            ]
        };
        const newState = todoReducer(initialState, action);
        expect(newState.loading).toBe(false);
        expect(newState.todos.length).toBe(2);
     });

     test('handles FETCH_ERROR action', () => {
        const action: TodoReducerAction = { type: "FETCH_ERROR", payload: "Failed"};
        const newState = todoReducer(initialState, action);
        expect(newState.loading).toBe(false);
        expect(newState.error).toBe("Failed");
     });
});
