import { UserAction, UserActionTypes, UserState } from "../../types/user";

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
};

export const userReducer = function (state = initialState, action: UserAction): UserState {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS_STARTED:
            return {
                ...state,
                loading: true,
                error: null
            };

        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false,
                error: null
            };

        case UserActionTypes.FETCH_USERS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return {
                ...state
            };
    };
};