import { types } from '../types/types';
import Swal from 'sweetalert2';

const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200';

export const getPokemons = () => {
    return async (dispatch) => {
        
        try {
            const resp = await fetch(url);
            const { results } = await resp.json();

            dispatch(setPokemons(results))
        }
        catch (error) {
            Swal.fire('Error', error, 'error');
        }


    }
}

const setPokemons = (pokemons) => ({
    type: types.setPokemons,
    payload: pokemons
});

export const setCurrentPokemonLink = (link) => ({
    type: types.setCurrentPokemonLink,
    payload: link
});

const setCurrentPokemonData = (data) => ({
    type: types.setCurrentPokemonData,
    payload: data
});

export const getCurrentPokemon = (link) => {
    return async (dispatch) => {

        let url = link;

        try {
            const resp = await fetch(url);
            const results = await resp.json();

            dispatch(setCurrentPokemonData(results))
        }
        catch (error) {
            Swal.fire('Error', error, 'error');
        }


    }
}