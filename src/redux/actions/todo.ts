import { Dispatch } from 'redux';
import { TodoAction, TodoActionTypes } from '../../types/todo';
import axios from 'axios'



export const fetchTodos = function (page: number = 1, limit: number = 10) {
    return async function(dispatch: Dispatch<TodoAction>) {
        try {
            dispatch({ type: TodoActionTypes.FETCH_TODOS_STARTED })

            const res = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: { _page: page, _limit: limit },
            });

            setTimeout(() => {
                dispatch({ type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: res.data });
            }, 500);

        } catch (error) {
            dispatch({ type: TodoActionTypes.FETCH_TODOS_FAILED, payload: 'Ошибка при получении списка дел!' });
        }
    }
};

export const setTodoPage = function (page: number): TodoAction {
    return { type: TodoActionTypes.SET_TODO_PAGE, payload: page };
}