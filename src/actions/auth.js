import { types } from '../types/types';
import Swal from 'sweetalert2';

const url = 'https://api.dev.myintelli.net/v1/login';

export const startLogin = ( email, password ) => {
    return async( dispatch ) => {

        let data = { email, password}

        try{
            const resp = await fetch( url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify( data )
            });
            const body = await resp.json();
            if( body.token ) {

                const user = {
                    uid: body.user.id_user,
                    name: body.user.first_name,
                    token: body.token
                }

                localStorage.setItem('user', JSON.stringify(user) );
                localStorage.setItem('userModules', JSON.stringify(body.modules) );

                dispatch( login(user) ) 
                dispatch( setModules(body.modules) ) 
            } else {
                Swal.fire('Error', body.msg, 'error');
            }
        }
        catch(error){
            Swal.fire('Error', error , 'error');
        }

        
    }
}

export const startChecking = () => {
    return async(dispatch) => {

        const loggedUser = localStorage.getItem('user');
        const modules = localStorage.getItem('userModules');

        if( loggedUser ) {
            dispatch( login(JSON.parse(loggedUser)) )
            dispatch( setModules(JSON.parse(modules)) )
        } else {
            dispatch( checkingFinish() );
        }
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish });

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});

const logout = () => ({
    type: types.authLogout,
});

export const startLogout = () => {
    return async( dispatch ) => {
        await localStorage.removeItem('user')
        await localStorage.removeItem('userModules')

        dispatch(logout())
    }
};

const setModules = ( modules ) => ({
    type: types.setModules,
    payload: modules
});