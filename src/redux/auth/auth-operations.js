//import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import  {registerRequest,  registerSuccess, registerError} from './auth-actions'

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';


//const token={}
/*
POST /users​/signup
Создать нового пользователя
*/
export const register = credentials => async dispatch => {
    dispatch(registerRequest());
     console.log(credentials);
     try {
         const response = await axios.post('/users/signup', credentials)
         dispatch(registerSuccess(response.data));
     } catch (error) {
         dispatch(registerError (error.message)) 
     }
   
};

//const exportOperation = {
 //    register}


//export default register;