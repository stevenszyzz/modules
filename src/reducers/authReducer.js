import { types } from '../types/types';

const initialState = {
    isLoggedin: false,
    // uid: null,
    // name: null
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.authLogin:
            return {
                ...state,
                ...action.payload,
                isLoggedin: true
            }

        case types.authCheckingFinish:
            return {
                ...state,
                isLoggedin: false
            }

        case types.authLogout:
            return {
                isLoggedin: false
            }


        default:
            return state;
    }

}


