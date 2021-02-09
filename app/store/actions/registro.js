//Import Model
import { createStore } from 'redux';
import User from '../../models/user';

//Constant Creation 
export const REGISTER = 'REGISTER';

export const createUser = (nombre, apellido, telefono, correo) => {
    return async (dispatch) => {
        try {
            const createdUser = new User(new Date(), nombre, apellido, telefono, correo);
            dispatch({ type: REGISTER, user: createdUser });
        }
        catch (err) {
            throw err;
        }
    }
};
