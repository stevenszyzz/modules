import { types } from "../types/types";

const initialState = {
    modules: []
}

export const appReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.setModules:
            return {
                ...state,
                modules: action.payload
            }
    
        default:
            return state;
    }


}