//import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import  {registerRequest,  registerSuccess, registerError, loginRequest, loginSuccess, loginError, logoutRequest, logoutSuccess, logoutError, getCurrentUserRequest, getCurrentUserSuccess, getCurrentUserError} from './auth-actions'

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';


 const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization  = '';
    },

}

export const register = credentials => async dispatch => {
    dispatch(registerRequest());
     //console.log(credentials);
     try {
         const response = await axios.post('/users/signup', credentials);

         token.set(response.data.token);
         dispatch(registerSuccess(response.data));
     } catch (error) {
         dispatch(registerError (error.message)) 
     }
   
};


export const logIn = credentials => async dispatch => {
    dispatch(loginRequest());
     console.log(credentials);
     try {
         const response = await axios.post('/users/login', credentials);

         token.set(response.data.token);
         dispatch(loginSuccess(response.data));
     } catch (error) {
         dispatch(loginError (error.message)) 
     }
   
};


export const logOut = () => async dispatch => {
    dispatch(logoutRequest());
     
    try {
        await axios.post('/users/logout');

        token.unset();
        dispatch(logoutSuccess()); // чтобы очистить стейт
    } catch (error) {
        dispatch(logoutError(error.message))
    }
};



export const getCurrentUser = () => async (dispatch, getState) => {
    console.log('zzzzzz')
    const {
        auth: { token: persistedTokrn },
    } = getState();

    if (!persistedTokrn) {
        return;
    }

    token.set(persistedTokrn);

    dispatch(getCurrentUserRequest());
 console.log('aaaaaa')
    try {
         const response = await axios.get('/users/current');

         //token.set(response.data.token);
         dispatch(getCurrentUserSuccess(response.data));
     } catch (error) {
         dispatch(getCurrentUserError (error.message)) 
     }
}