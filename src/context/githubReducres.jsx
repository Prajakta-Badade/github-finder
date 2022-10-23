export  const githubReducers = (state, action) => {
    switch(action.type) {
        case 'SET_LOADING': 
        return {
            ...state,
            loading: true
        }
        case 'GET_USER': 
        return {
            ...state,
            loading: false,
            user: action.payload
        }
        case 'GET_REPOS': 
        return {
            ...state,
            repos: action.payload,
            loading:false
        }
        case 'GET_USERS' :
        return {
            ...state,
            users: action.payload,
            loading: false
        }
        case 'CLEAR_USERS' : 
        return {
            ...state,
            user: action.payload,
        }
        default: return state
    }
}