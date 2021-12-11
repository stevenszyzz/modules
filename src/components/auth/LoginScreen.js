import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../actions/auth';

import './login.css';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formLoginValues, handleLoginInputChange] = useForm({
        email: 'eduardo@mail.com',
        password: '123456'
    });

    const { email, password } = formLoginValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(email, password));
    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="login-form">
                    <h3 className='text-white'>Ingreso</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mt-4"
                                placeholder="Correo"
                                name="email"
                                value={email}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control mt-4"
                                placeholder="Contraseña"
                                name="password"
                                value={password}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-4">
                            <button
                                type="submit"
                                className="btn btn-primary btnSubmit"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}