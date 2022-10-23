export const alertReducers = (state, action) => {
    switch(action.type) {
        case 'SET_ALERT': 
            return action.payload;
        case 'RESET_ALERT':
            return null;
        default: return state
    }
}