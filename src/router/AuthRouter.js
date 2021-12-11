import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch
  } from 'react-router-dom';
  
import { useSelector } from 'react-redux';

import { LoginScreen } from '../components/auth/LoginScreen';
import { AppRouter } from './AppRouter';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { startChecking } from '../actions/auth';
import { useDispatch } from 'react-redux';

export const AuthRouter = () => {

    const dispatch = useDispatch();
    const { isLoggedin } = useSelector( state => state.auth);

    useEffect(() => {
        dispatch(startChecking())
    }, [dispatch]);

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ LoginScreen }
                        isAuthenticated={ isLoggedin }
                    />

                    <PrivateRoute 
                        path="/" 
                        component={ AppRouter } 
                        isAuthenticated={ isLoggedin }
                    />
                </Switch>
            </div>
        </Router>
    )
}
