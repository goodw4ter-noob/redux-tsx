export interface TodoState {
    todos: any[],
    loading: boolean,
    error: null | string,
    page: number;
    limit: number;
};

export enum TodoActionTypes {
    FETCH_TODOS_STARTED = 'FETCH_TODOS_STARTED',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_FAILED = 'FETCH_TODOS_FAILED',
    SET_TODO_PAGE = 'SET_TODO_PAGE',
};

interface FetchTodoStartedAction {
    type: TodoActionTypes.FETCH_TODOS_STARTED,
};
interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS,
    payload: any[];
};
interface FetchTodoFailedAction {
    type: TodoActionTypes.FETCH_TODOS_FAILED,
    payload: string;
};
interface SetTodoPageAction {
    type: TodoActionTypes.SET_TODO_PAGE,
    payload: number;
};

export type TodoAction = FetchTodoStartedAction | FetchTodoSuccessAction | FetchTodoFailedAction | SetTodoPageAction;