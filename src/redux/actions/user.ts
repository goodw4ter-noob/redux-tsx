import { UserAction, UserActionTypes } from "../../types/user";
import { Dispatch } from 'redux'
import axios from "axios";


export const fetchUsers = function () {
    return async function (dispatch: Dispatch<UserAction>) {
        try {
            dispatch({ type: UserActionTypes.FETCH_USERS_STARTED })

            const res = await axios.get('https://jsonplaceholder.typicode.com/users');

            setTimeout(() => {
                dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: res.data });
            }, 500)

        } catch (error) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_FAILED,
                payload: 'Ошибка при загрузке пользователей!'
            })
        }
    }
};