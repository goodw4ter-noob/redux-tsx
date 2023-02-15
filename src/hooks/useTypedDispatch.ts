
import { useDispatch } from "react-redux/es/exports";
import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { store } from "../redux";
import { UserAction, UserState } from "../types/user";


export const useTypedDispatchThunk: () => Dispatch<UserAction> = useDispatch;
export type TypedDispatchThunk = ThunkDispatch<typeof store, any, UserAction>;