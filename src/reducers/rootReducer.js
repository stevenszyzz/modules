import { combineReducers } from 'redux';

import { appReducer } from './appReducer';
import { authReducer } from './authReducer';
import { pokeReducer } from './pokeReducer';

export const rootReducer = combineReducers({
    app: appReducer,
    pokemons: pokeReducer,
    auth: authReducer
})