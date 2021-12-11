import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCurrentPokemon, setCurrentPokemonLink } from '../../actions/heroes';

export const PokemonModal = () => {

    const dispatch = useDispatch();
    const { currentPokemon } = useSelector(state => state.pokemons);

    useEffect(() => {
        dispatch(getCurrentPokemon(currentPokemon.link))
    }, [dispatch, currentPokemon.link]);

    const closeModal = () => {
        dispatch(setCurrentPokemonLink(''))
    }

    return (
        <div className='modal' style={currentPokemon.link && {display: 'block'}}>
            <div className="modal-dialog">
                <div className="modal-content bg-dark text-white">
                    <div className="modal-header">
                        <h5 className="modal-title">{currentPokemon.data?.name.toUpperCase()}</h5>
                        <button type="button" className="btn-close" onClick={closeModal} />
                    </div>
                    <div className="modal-body">
                        <img src={`https://img.pokemondb.net/artwork/large/${currentPokemon.data?.name}.jpg`}
                            className="card-img-top" alt="{Pokemon.name}"
                            style={{ height: '350px' }}
                        />
                        <p>Height: <span>{currentPokemon.data?.height}</span></p>
                        <p>Weight: <span>{currentPokemon.data?.weight}</span></p>
                        <p>Abilities</p>
                        <ol>
                        {
                            currentPokemon.data?.abilities.map((abilitie, i) => (
                                <li
                                key={i}
                                >{abilitie.ability.name}</li>
                            ))
                        }
                        </ol>
                        <p>Moves</p>
                        <ol>
                        {
                            currentPokemon.data?.moves.map((move, i) => (
                                <li
                                key={i}
                                >{move.move.name}</li>
                            ))
                        }
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}
