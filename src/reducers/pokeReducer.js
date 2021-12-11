import { types } from "../types/types";

const initialState = {
    pokemons: [],
    currentPokemon: {}
}

export const pokeReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.setPokemons:
            return {
                ...state,
                pokemons: action.payload
            }

        case types.setCurrentPokemonLink:
            return {
                ...state,
                currentPokemon: {...state.currentPokemon, link: action.payload}
            }

        case types.setCurrentPokemonData:
            return {
                ...state,
                currentPokemon: {...state.currentPokemon, data: action.payload}
            }
    
        default:
            return state;
    }


}