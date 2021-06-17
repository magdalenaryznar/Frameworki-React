import { Dispatch } from 'redux';
import * as actionTypes from '../actions/actionTypes/userTypes';
import { IUser } from '../entities/users';

export const getUsers = (): Promise<IUser[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) 
        .then((usersList: IUser[]) => { 
            dispatch({
                type: actionTypes.GET_USERS, 
                data: {
                    usersList,
                    currentUser: usersList[8]
                }
            })
        })
}) as any;