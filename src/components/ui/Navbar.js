import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

export const Navbar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout())
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className='nav-item'>
                                <NavLink 
                                className="nav-link" 
                                exact to="/"
                                >
                                    Modules
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink 
                                className="nav-link" 
                                exact to="/pokemons"
                                >
                                    Pokemons
                                </NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button
                                className="btn btn-outline-primary"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}