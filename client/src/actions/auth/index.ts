import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../types";
import AuthUtils from '../../utils/auth';

export const register: Function = (email: string, password: string, firstName: string, lastName: string): Function => (dispatch: Function) => {
    return AuthUtils.signUp(email, password, firstName, lastName)
        .then((response: any) => {
            if (response.status === 200) {
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: response.body
                });
            } else {
                dispatch({
                    type: REGISTER_FAIL,
                    payload: response.message
                });
            }
        });
}

export const login: Function = (email: string, password: string): Function => (dispatch: Function) => {
    return AuthUtils.signIn(email, password).then((response: any) => {
        if (response.status === 200) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.body.token
            });
        } else {
            dispatch({
                type: LOGIN_FAIL,
                payload: response.message
            });
        }
    });
};
  
export const logout: Function = (): Function => (dispatch: Function) => {
    dispatch({
        type: LOGOUT,
    });
};