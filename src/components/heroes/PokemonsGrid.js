import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getPokemons } from '../../actions/heroes';
import { PokemonCard } from './PokemonCard';
import { PokemonModal } from './PokemonModal';

export const PokemonsGrid = () => {

    const dispatch = useDispatch();
    const { pokemons, currentPokemon } = useSelector(state => state.pokemons);

    useEffect(() => {
        dispatch(getPokemons())
    }, [dispatch]);

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {
            currentPokemon.link && <PokemonModal />
        }
                {
                    pokemons.map(hero => (
                        <PokemonCard
                            key={hero.name}
                            Pokemon={hero}
                        />

                    ))
                }
        </div>
    )
}
