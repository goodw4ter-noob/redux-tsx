export interface UserState {
    users: any[],
    loading: boolean,
    error: null | string,
};

export enum UserActionTypes {
    FETCH_USERS_STARTED = 'FETCH_USERS_STARTED',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_FAILED = 'FETCH_USERS_FAILED',
};

export interface FetchUsersStartedAction {
    type: UserActionTypes.FETCH_USERS_STARTED,
};
export interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS,
    payload: any[],
};
export interface FetchUsersFaliedAction {
    type: UserActionTypes.FETCH_USERS_FAILED,
    payload: string,
};

export type UserAction = FetchUsersStartedAction | FetchUsersSuccessAction | FetchUsersFaliedAction;