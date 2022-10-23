import { createContext , useContext, useReducer } from "react";
import {githubReducers} from '../context/githubReducres';
const githubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// returns all context values
export const GetContext = () => {
    return useContext(githubContext);
}
const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }
    const [state, dispatch] = useReducer(githubReducers,initialState);

    // to get multiple users
    const searchUsers = async (text) => {
        const params = new URLSearchParams({
            q: text
        });
        dispatch({type: 'SET_LOADING'});
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                authorization: `${GITHUB_TOKEN}`
            }
        });
        const {items} = await response.json();
        dispatch({
            type: 'GET_USERS',
            payload: items,
            loading: false
        });
    }

    // to get one sigle user data
    const searchSingleUser = async (login) => {
        dispatch({type: 'SET_LOADING'});
        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                authorization: `${GITHUB_TOKEN}`
            }
        });
        if(response.status !== 200) {
            return window.location = '/notFound';
        }
        const data = await response.json();
        dispatch({
            type: 'GET_USER',
            payload: data,
        });
    }


    // to get reposetories data
    const GetUserRepositories = async (login) => {
        dispatch({type: 'SET_LOADING'});
        const params = new URLSearchParams({
            sort: 'created',
            per_page: 10
        });
        const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
            headers: {
                authorization: `${GITHUB_TOKEN}`
            }
        });
        if(response.status !== 200) {
            return window.location = '/notFound';
        }
        const data = await response.json();
        dispatch({
            type: 'GET_REPOS',
            payload: data,
        });
    }

    const clearList = () => {
        dispatch({
            type:'CLEAR_USERS',
            payload: []
        })
    }

    return (
        <githubContext.Provider value={{
            ...state,
            searchUsers,
            clearList,
            searchSingleUser,
            GetUserRepositories
        }}>
            {children}
        </githubContext.Provider>
    )
} 
export default GithubProvider