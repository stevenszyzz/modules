import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPokemonLink } from '../../actions/heroes'

export const PokemonCard = ({ Pokemon }) => {

    const dispatch = useDispatch();

    const showModal = () => {
        dispatch(setCurrentPokemonLink(Pokemon.url));
    }

    return (
        <div className="col">
            <div className="card bg-dark my-3 mx-auto" style={{ width: '18rem' }}>
                <img src={`https://img.pokemondb.net/artwork/large/${Pokemon.name}.jpg`}
                    className="card-img-top" alt="{Pokemon.name}"
                    style={{ height: '350px' }}
                />
                <div className="card-body">
                    <h5 className="card-title text-center text-white">{Pokemon.name}</h5>
                    <div className="d-grid gap-2 mt-4">
                        <button
                            className="btn btn-primary"
                            onClick={showModal}
                        >
                            More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
