import { Dispatch } from 'redux';
import * as actionTypes from '../actions/actionTypes/postsTypes';
import { IPost } from '../entities/posts';


export const getPosts = (): Promise<IPost[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((postsList: IPost[]) => {
            dispatch({
                type: actionTypes.GET_POSTS,
                postsList,              
            })
        })
}) as any;