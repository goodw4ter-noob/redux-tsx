import { TodoAction, TodoActionTypes, TodoState } from "../../types/todo";

const initialState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10,
};

export const todoReducer = function (state: TodoState = initialState, action: TodoAction): TodoState {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODOS_STARTED:
            return {
                ...state,
                loading: true,
            };

        case TodoActionTypes.FETCH_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: action.payload
            };

        case TodoActionTypes.FETCH_TODOS_FAILED:
            return {
                ...state,
                error: 'Ошибка при получении списка задач...',
            };

        case TodoActionTypes.SET_TODO_PAGE:
            return {
                ...state,
                page: action.payload,
            };

        default: 
            return {
                ...state,
            };
    };
};