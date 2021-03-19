import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import {registerSuccess }from './auth-actions';


const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
    [registerSuccess]: (_, payload)=> payload.user
});

const token = createReducer(null, {});

const error = createReducer(null, {});


export default combineReducers({
    user,
    token,
    error
})