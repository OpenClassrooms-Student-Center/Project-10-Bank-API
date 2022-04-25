import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../types";
import {signIn, signOut, signUp} from '../../utils/auth';

export const register: Function = (email: string, password: string, firstName: string, lastName: string): Function => (dispatch: Function) => {
    return signUp(email, password, firstName, lastName)
        .then((response: any) => {
            if (response.status === 200) {
                dispatch({
                    type: REGISTER_SUCCESS,
                });
            } else {
                dispatch({
                    type: REGISTER_FAIL
                });
            }
        });
}

export const login: Function = (email: string, password: string): Function => (dispatch: Function) => {
    console.log("Login action called")
    return signIn(email, password).then((res: any) => res.json()).then((response: any) => {
        const user = {
            email: email,
            password: password,
            token: response.body.token
        }
        if (response.status === 200) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    user: user
                }
            });
           localStorage.setItem("user", JSON.stringify(user));
        } else {
            dispatch({
                type: LOGIN_FAIL,
            });
        }
    });
};
  
export const logout: Function = (): Function => (dispatch: Function) => {
    dispatch({
        type: LOGOUT,
    });
    localStorage.setItem("user", 'null');
};